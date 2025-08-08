'use server';
/**
 * @fileOverview Un agente de IA que explica un concepto estadístico.
 *
 * - explainConcept - Una función que maneja la explicación del concepto.
 * - ExplainConceptInput - El tipo de entrada para la función explainConcept.
 * - ExplainConceptOutput - El tipo de retorno para la función explainConcept.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ExplainConceptInputSchema = z.object({
  term: z.string().describe('El término estadístico que el usuario quiere que se le explique.'),
});
export type ExplainConceptInput = z.infer<typeof ExplainConceptInputSchema>;

const ExplainConceptOutputSchema = z.object({
  title: z.string().describe('El nombre formal del concepto estadístico explicado.'),
  description: z.string().describe('Una explicación clara y concisa del concepto estadístico.'),
});
export type ExplainConceptOutput = z.infer<typeof ExplainConceptOutputSchema>;

export async function explainConcept(input: ExplainConceptInput): Promise<ExplainConceptOutput> {
  return explainConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainConceptPrompt',
  input: { schema: ExplainConceptInputSchema },
  output: { schema: ExplainConceptOutputSchema },
  prompt: `Eres un profesor de estadística experto y amigable. Tu tarea es explicar conceptos estadísticos de forma clara y concisa en español. El usuario puede cometer errores de ortografía, corrígelos si es necesario.

Explica el siguiente término: {{{term}}}

Proporciona una respuesta concisa pero completa.`,
});

const explainConceptFlow = ai.defineFlow(
  {
    name: 'explainConceptFlow',
    inputSchema: ExplainConceptInputSchema,
    outputSchema: ExplainConceptOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
