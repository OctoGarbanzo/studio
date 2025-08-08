'use server';
/**
 * @fileOverview Un agente de IA que evalúa un diseño de estudio estadístico propuesto por un usuario.
 *
 * - evaluateStudyDesign - Una función que maneja el proceso de evaluación del diseño del estudio.
 * - EvaluateStudyDesignInput - El tipo de entrada para la función evaluateStudyDesign.
 * - EvaluateStudyDesignOutput - El tipo de retorno para la función evaluateStudyDesign.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EvaluateStudyDesignInputSchema = z.object({
  poblacion: z.string().describe('La definición de la población y la muestra del estudio.'),
  variables: z.string().describe('Las variables de interés identificadas.'),
  muestreo: z.string().describe('El método de muestreo propuesto.'),
  preguntas: z.string().describe('Las preguntas diseñadas para el cuestionario.'),
  tecnica: z.string().describe('La técnica de recolección de datos seleccionada.'),
});
export type EvaluateStudyDesignInput = z.infer<typeof EvaluateStudyDesignInputSchema>;

const EvaluateStudyDesignOutputSchema = z.object({
  feedbackPoblacion: z.string().describe('Retroalimentación sobre la definición de población y muestra.'),
  feedbackVariables: z.string().describe('Retroalimentación sobre la identificación de variables.'),
  feedbackMuestreo: z.string().describe('Retroalimentación sobre el método de muestreo.'),
  feedbackPreguntas: z.string().describe('Retroalimentación sobre las preguntas del cuestionario.'),
  feedbackTecnica: z.string().describe('Retroalimentación sobre la técnica de recolección.'),
  resumenGeneral: z.string().describe('Un resumen general y una calificación o conclusión sobre el diseño del estudio.'),
});
export type EvaluateStudyDesignOutput = z.infer<typeof EvaluateStudyDesignOutputSchema>;

export async function evaluateStudyDesign(input: EvaluateStudyDesignInput): Promise<EvaluateStudyDesignOutput> {
  return evaluateStudyDesignFlow(input);
}

const prompt = ai.definePrompt({
  name: 'evaluateStudyDesignPrompt',
  input: { schema: EvaluateStudyDesignInputSchema },
  output: { schema: EvaluateStudyDesignOutputSchema },
  prompt: `Eres un profesor de estadística experto y amigable. Tu tarea es evaluar un diseño de estudio propuesto por un estudiante para "conocer la opinión de los estudiantes sobre el sistema de transporte universitario".

Evalúa cada una de las cinco secciones proporcionadas por el estudiante (población/muestra, variables, método de muestreo, preguntas y técnica de recolección). Proporciona retroalimentación constructiva y específica para cada sección en español.

A continuación, se presenta el diseño del estudio del estudiante:
- Población y Muestra: {{{poblacion}}}
- Variables de Interés: {{{variables}}}
- Método de Muestreo: {{{muestreo}}}
- Preguntas del Cuestionario: {{{preguntas}}}
- Técnica de Recolección: {{{tecnica}}}

Proporciona tu evaluación en los campos correspondientes del esquema de salida. En el resumen general, ofrece una conclusión sobre la viabilidad y solidez del plan y sugiere mejoras clave. Sé alentador y educativo.`,
});

const evaluateStudyDesignFlow = ai.defineFlow(
  {
    name: 'evaluateStudyDesignFlow',
    inputSchema: EvaluateStudyDesignInputSchema,
    outputSchema: EvaluateStudyDesignOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
