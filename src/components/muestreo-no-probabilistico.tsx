import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Hand, Heart, UserCheck, BarChartHorizontal } from 'lucide-react';

const samplingTypes = [
  { icon: Hand, title: "Por conveniencia", description: "Elementos fáciles de contactar." },
  { icon: Heart, title: "Voluntario", description: "Elementos que se ofrecen a participar." },
  { icon: UserCheck, title: "Por juicio", description: "Investigador selecciona según criterio." },
  { icon: BarChartHorizontal, title: "Por cuotas", description: "Similar a estratificado pero sin aleatoriedad." },
];

export function MuestreoNoProbabilistico() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Muestreo No Probabilístico</CardTitle>
        <CardDescription>La selección de la muestra se basa en el juicio del investigador, no en el azar.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        {samplingTypes.map((type, index) => (
          <div key={index} className="flex items-start gap-4">
            <type.icon className="h-8 w-8 flex-shrink-0 text-primary mt-1" />
            <div>
              <h4 className="font-semibold">{type.title}</h4>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
