import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function TiposDeVariables() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipos de Variables y Niveles de Medición</CardTitle>
        <CardDescription>El 'Variable Navigator' para explorar conceptos.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold">Cuantitativas</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              <div>
                <h4 className="font-semibold text-primary">Discretas</h4>
                <p className="text-sm text-muted-foreground">Valores enteros, contables.</p>
                <p className="text-sm"><strong>Ejemplos:</strong> Número de hijos, cantidad de libros.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Continuas</h4>
                <p className="text-sm text-muted-foreground">Cualquier valor en un intervalo.</p>
                <p className="text-sm"><strong>Ejemplos:</strong> Peso, altura, tiempo.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold">Cualitativas</AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              <div>
                <h4 className="font-semibold text-primary">Nominales</h4>
                <p className="text-sm text-muted-foreground">Categorías sin orden.</p>
                <p className="text-sm"><strong>Ejemplos:</strong> Sexo, color de ojos, religión.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Ordinales</h4>
                <p className="text-sm text-muted-foreground">Categorías con orden.</p>
                <p className="text-sm"><strong>Ejemplos:</strong> Nivel educativo, nivel de satisfacción.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold">Niveles de Medición</AccordionTrigger>
            <AccordionContent className="pt-2">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Nominal:</span> Clasificación sin orden jerárquico.</li>
                <li><span className="font-semibold text-foreground">Ordinal:</span> Clasificación con orden jerárquico.</li>
                <li><span className="font-semibold text-foreground">Intervalo:</span> Orden + intervalos iguales (sin cero absoluto).</li>
                <li><span className="font-semibold text-foreground">Razón:</span> Orden + intervalos iguales + cero absoluto.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
