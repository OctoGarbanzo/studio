import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, BarChart, Beaker } from 'lucide-react';

export function ConceptosFundamentales() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>1.1 Naturaleza de la Estadística</CardTitle>
        <CardDescription>Conceptos Fundamentales</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Estadística</h3>
          <p className="text-muted-foreground">
            Ciencia que estudia la recolección, organización, análisis e interpretación de datos para la toma de decisiones en condiciones de incertidumbre.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1"><Users className="w-5 h-5 text-primary" /></div>
            <div>
              <h4 className="font-semibold">Población (N)</h4>
              <p className="text-muted-foreground">Conjunto completo de elementos que poseen una característica común de interés para el estudio.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 pt-1"><Users className="w-5 h-5 text-accent" /></div>
            <div>
              <h4 className="font-semibold">Muestra (n)</h4>
              <p className="text-muted-foreground">Subconjunto representativo de la población seleccionado para el estudio.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
             <div className="flex-shrink-0 pt-1"><BarChart className="w-5 h-5 text-primary" /></div>
            <div>
              <h4 className="font-semibold">Parámetro</h4>
              <p className="text-muted-foreground">Medida numérica que describe una característica de la población (letras griegas: <span className="font-code text-primary">μ, σ, π</span>).</p>
            </div>
          </div>
           <div className="flex items-start gap-4">
             <div className="flex-shrink-0 pt-1"><Beaker className="w-5 h-5 text-accent" /></div>
            <div>
              <h4 className="font-semibold">Estadístico</h4>
              <p className="text-muted-foreground">Medida numérica que describe una característica de la muestra (letras latinas: <span className="font-code text-accent">x̄, s, p</span>).</p>
            </div>
          </div>
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Ejemplo 1: Identificación de Conceptos</CardTitle>
            <CardDescription>Se desea conocer el promedio de edad de los estudiantes de la UCR.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><span className="font-semibold">Población:</span> Todos los estudiantes matriculados en la UCR.</p>
            <p><span className="font-semibold">Muestra:</span> 500 estudiantes seleccionados aleatoriamente.</p>
            <p><span className="font-semibold">Variable:</span> Edad (cuantitativa continua).</p>
            <p><span className="font-semibold">Parámetro (μ):</span> Edad promedio de todos los estudiantes UCR.</p>
            <p><span className="font-semibold">Estadístico (x̄):</span> Edad promedio de los 500 estudiantes seleccionados.</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
