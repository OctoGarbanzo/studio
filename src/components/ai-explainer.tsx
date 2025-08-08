'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const mockExplanations: Record<string, { title: string, description: string }> = {
  "desviación estándar": {
    title: "Desviación Estándar (σ o s)",
    description: "Es una medida de la dispersión de los datos con respecto a la media. Una desviación estándar baja indica que los valores de los datos tienden a estar cerca de la media, mientras que una desviación estándar alta indica que los datos están más dispersos en un rango más amplio de valores."
  },
  "sesgo": {
    title: "Sesgo (Bias)",
    description: "En estadística, el sesgo se refiere a la tendencia de un estadístico a sobrestimar o subestimar sistemáticamente un parámetro poblacional. Por ejemplo, un sesgo de muestreo ocurre si la muestra no es representativa de la población, llevando a conclusiones incorrectas."
  }
}

export function AiExplainer() {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<{title: string, description: string} | null>(null);

  const handleExplain = () => {
    if (!term) return;
    setLoading(true);
    setExplanation(null);
    
    // Mock AI call
    setTimeout(() => {
        const key = term.toLowerCase().trim();
        const result = mockExplanations[key];
        if (result) {
            setExplanation(result);
        } else {
            setExplanation({
                title: `Explicación para "${term}"`,
                description: "Lo sentimos, no pudimos generar una explicación para este término. Por favor, intenta con otro concepto estadístico como 'desviación estándar' o 'sesgo'."
            })
        }
        setLoading(false);
    }, 1500);
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
          <Button onClick={handleExplain} disabled={loading}>
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
