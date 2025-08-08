'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { explainConcept, ExplainConceptOutput } from '@/ai/flows/explain-concept';
import { useToast } from '@/hooks/use-toast';

export function AiExplainer() {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<ExplainConceptOutput | null>(null);
  const { toast } = useToast();

  const handleExplain = async () => {
    if (!term) return;
    setLoading(true);
    setExplanation(null);
    
    try {
      const result = await explainConcept({ term });
      setExplanation(result);
    } catch (error) {
      console.error("Error explaining concept:", error);
      toast({
          variant: "destructive",
          title: "Error de IA",
          description: "No se pudo generar la explicación. Por favor, inténtalo de nuevo.",
      });
    }

    setLoading(false);
  };
  
  return (
    <Card className="bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-accent" />
          AI-Powered Explanations
        </CardTitle>
        <CardDescription>¿Tienes dudas sobre un concepto? Pídele a nuestra IA que te lo explique.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center space-x-2">
          <Input 
            type="text" 
            placeholder="Ej: Desviación estándar, sesgo, etc."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleExplain()}
            />
          <Button onClick={handleExplain} disabled={loading || !term}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Explicar'}
          </Button>
        </div>
        {explanation && (
            <Alert className="mt-4">
                <Sparkles className="h-4 w-4" />
                <AlertTitle>{explanation.title}</AlertTitle>
                <AlertDescription>
                    {explanation.description}
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
