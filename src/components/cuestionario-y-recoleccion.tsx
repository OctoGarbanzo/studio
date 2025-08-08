'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { evaluateStudyDesign, EvaluateStudyDesignOutput } from '@/ai/flows/evaluate-study-design';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Loader2, Sparkles, CheckCircle2, XCircle, FileText, Beaker, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const techniques = [
    { title: "Entrevista Personal", advantages: "Alta tasa de respuesta, clarificación de dudas.", disadvantages: "Costosa, sesgo del entrevistador.", use: "Temas complejos, poblaciones específicas." },
    { title: "Entrevista Telefónica", advantages: "Rápida, menor costo.", disadvantages: "Sesgo de cobertura, respuestas breves.", use: "Encuestas de opinión, seguimiento." },
    { title: "Correo Electrónico", advantages: "Bajo costo, no hay sesgo entrevistador.", disadvantages: "Baja tasa de respuesta.", use: "Poblaciones con acceso a internet." },
    { title: "Observación", advantages: "Datos objetivos, comportamiento natural.", disadvantages: "No mide actitudes, limitada.", use: "Estudios de comportamiento." },
];

export function CuestionarioYRecoleccion() {
    const [studyDesign, setStudyDesign] = useState({
        poblacion: '',
        variables: '',
        muestreo: '',
        preguntas: '',
        tecnica: '',
    });
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState<EvaluateStudyDesignOutput | null>(null);
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setStudyDesign((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setFeedback(null);
        try {
            const result = await evaluateStudyDesign(studyDesign);
            setFeedback(result);
        } catch (error) {
            console.error("Error evaluating study design:", error);
            toast({
                variant: "destructive",
                title: "Error de IA",
                description: "No se pudo procesar la evaluación. Por favor, inténtalo de nuevo.",
            });
        }
        setLoading(false);
    };

    const isSubmitDisabled = Object.values(studyDesign).some(value => value.trim() === '');

    return (
        <Card>
            <CardHeader>
                <CardTitle>1.4 El Cuestionario y 1.5 Técnicas de Recolección de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Ejemplo de Pregunta de Cuestionario</h3>
                    <Card className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="text-base">Pregunta Cerrada</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold mb-2">¿Cuál es su nivel de satisfacción con el servicio de la biblioteca universitaria?</p>
                            <ol className="list-decimal list-inside space-y-1">
                                <li>Muy insatisfecho</li>
                                <li>Insatisfecho</li>
                                <li>Neutral</li>
                                <li>Satisfecho</li>
                                <li>Muy satisfecho</li>
                            </ol>
                            <p className="mt-4 text-sm text-muted-foreground"><span className="font-semibold">Codificación:</span> 1=Muy insatisfecho, 2=Insatisfecho, etc.</p>
                        </CardContent>
                    </Card>
                </div>
                
                <Separator />
                
                <div>
                    <h3 className="text-xl font-semibold mb-2">Técnicas de Recolección de Datos</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {techniques.map(t => (
                            <Card key={t.title}>
                                <CardHeader><CardTitle className="text-base">{t.title}</CardTitle></CardHeader>
                                <CardContent className="text-sm space-y-2">
                                    <p><strong className="text-primary">Ventajas:</strong> {t.advantages}</p>
                                    <p><strong className="text-destructive/80">Desventajas:</strong> {t.disadvantages}</p>
                                    <p><strong className="text-accent">Uso Recomendado:</strong> {t.use}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <Separator />
                
                <div>
                    <h3 className="text-xl font-semibold mb-2">Ejercicio Práctico Interactivo</h3>
                    <Card className="border-primary border-2">
                        <CardHeader>
                            <CardTitle className="text-lg">Diseña tu propio estudio</CardTitle>
                            <CardDescription>Conoce la opinión de los estudiantes sobre el sistema de transporte universitario.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="poblacion">1. Define la población y la muestra</Label>
                                <Textarea id="poblacion" placeholder="Ej: Población: todos los estudiantes. Muestra: 200 estudiantes." value={studyDesign.poblacion} onChange={handleInputChange} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="variables">2. Identifica las variables de interés</Label>
                                <Textarea id="variables" placeholder="Ej: Frecuencia de uso, satisfacción con rutas, costo..." value={studyDesign.variables} onChange={handleInputChange} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="muestreo">3. Propón un método de muestreo</Label>
                                <Textarea id="muestreo" placeholder="Ej: Muestreo estratificado por facultad..." value={studyDesign.muestreo} onChange={handleInputChange}/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="preguntas">4. Diseña 3 preguntas para el cuestionario</Label>
                                <Textarea id="preguntas" placeholder="Ej: 1. ¿Con qué frecuencia...?" value={studyDesign.preguntas} onChange={handleInputChange}/>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="tecnica">5. Selecciona la técnica de recolección</Label>
                                <Textarea id="tecnica" placeholder="Ej: Encuesta por correo electrónico..." value={studyDesign.tecnica} onChange={handleInputChange}/>
                            </div>
                            <Button className="w-full bg-accent hover:bg-accent/90" onClick={handleSubmit} disabled={loading || isSubmitDisabled}>
                                {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                                {loading ? 'Analizando...' : 'Evaluar con IA'}
                            </Button>
                        </CardContent>
                    </Card>
                    {feedback && (
                        <Card className="mt-6 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-primary">
                                    <CheckCircle2 />
                                    Retroalimentación de la IA
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Alert>
                                    <HelpCircle className="h-4 w-4" />
                                    <AlertTitle>1. Población y Muestra</AlertTitle>
                                    <AlertDescription>{feedback.feedbackPoblacion}</AlertDescription>
                                </Alert>
                                <Alert>
                                    <FileText className="h-4 w-4" />
                                    <AlertTitle>2. Variables de Interés</AlertTitle>
                                    <AlertDescription>{feedback.feedbackVariables}</AlertDescription>
                                </Alert>
                                <Alert>
                                    <Beaker className="h-4 w-4" />
                                    <AlertTitle>3. Método de Muestreo</AlertTitle>
                                    <AlertDescription>{feedback.feedbackMuestreo}</AlertDescription>
                                </Alert>
                                 <Alert>
                                    <HelpCircle className="h-4 w-4" />
                                    <AlertTitle>4. Preguntas del Cuestionario</AlertTitle>
                                    <AlertDescription>{feedback.feedbackPreguntas}</AlertDescription>
                                </Alert>
                                <Alert>
                                    <FileText className="h-4 w-4" />
                                    <AlertTitle>5. Técnica de Recolección</AlertTitle>
                                    <AlertDescription>{feedback.feedbackTecnica}</AlertDescription>
                                </Alert>
                                <Separator />
                                <Alert className="border-accent">
                                    <Sparkles className="h-4 w-4 text-accent" />
                                    <AlertTitle className="text-accent">Resumen General</AlertTitle>
                                    <AlertDescription>{feedback.resumenGeneral}</AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
