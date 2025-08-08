import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Users, Brain, Landmark, LineChart } from 'lucide-react';

const applications = [
  { icon: Users, text: "Demografía: Análisis de crecimiento poblacional" },
  { icon: BookOpen, text: "Educación: Evaluación de métodos de enseñanza" },
  { icon: Brain, text: "Psicología: Medición de actitudes y comportamientos" },
  { icon: Landmark, text: "Sociología: Estudio de fenómenos sociales" },
  { icon: LineChart, text: "Economía: Análisis de indicadores económicos" },
];

export function ImportanciaEnCienciasSociales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>1.2 Importancia en Ciencias Sociales</CardTitle>
        <CardDescription>Aplicaciones clave de la estadística</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {applications.map((app, index) => (
            <li key={index} className="flex items-center gap-3">
              <app.icon className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{app.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
