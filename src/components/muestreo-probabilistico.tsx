import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FormulaTooltip } from '@/components/formula-tooltip';
import { TraceableNumber } from '@/components/traceable-number';
import { Separator } from '@/components/ui/separator';

export function MuestreoProbabilistico() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>1.3 Muestreo Probabilístico</CardTitle>
        <CardDescription>Métodos donde cada miembro de la población tiene una probabilidad conocida de ser seleccionado.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Muestreo Aleatorio Simple (MAS)</h3>
          <p className="text-muted-foreground mb-4">Cada elemento de la población tiene la misma probabilidad de ser seleccionado.</p>
          <div className="text-center font-code text-lg p-4 bg-muted rounded-lg">
            <FormulaTooltip explanation="Tamaño de la muestra">n</FormulaTooltip>
            {' = '}
            <FormulaTooltip explanation="Combinaciones de N elementos tomados de n en n">
              C(N, n)
            </FormulaTooltip>
            {' = '}
            <div className="inline-flex flex-col text-center">
              <span className="border-b border-foreground px-2">
                <FormulaTooltip explanation="Factorial del tamaño de la población">N!</FormulaTooltip>
              </span>
              <span className="px-2">
                <FormulaTooltip explanation="Factorial del tamaño de la muestra">n!</FormulaTooltip>
                (<FormulaTooltip explanation="Tamaño de la población">N</FormulaTooltip>
                {' - '}
                <FormulaTooltip explanation="Tamaño de la muestra">n</FormulaTooltip>)!
              </span>
            </div>
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-base">Ejemplo 2: MAS con Tabla de Números Aleatorios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><span className="font-semibold">Población:</span> 1000 estudiantes (001-1000).</p>
              <p className="mb-2"><span className="font-semibold">Muestra deseada:</span> 50 estudiantes.</p>
              <p className="font-semibold">Procedimiento:</p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-1 mt-1">
                <li>Usar tabla de números aleatorios.</li>
                <li>Tomar grupos de 3 dígitos (001-1000).</li>
                <li>Seleccionar los primeros 50 números válidos y únicos.</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-2">Muestreo Sistemático</h3>
          <p className="text-muted-foreground mb-4">Se selecciona cada k-ésimo elemento después de un inicio aleatorio.</p>
          <div className="text-center font-code text-lg p-4 bg-muted rounded-lg">
            <FormulaTooltip explanation="Intervalo de muestreo">k</FormulaTooltip>
            {' = '}
            <div className="inline-flex flex-col text-center">
                <span className="border-b border-foreground px-2">
                    <FormulaTooltip explanation="Tamaño de la población">N</FormulaTooltip>
                </span>
                <span className="px-2">
                    <FormulaTooltip explanation="Tamaño de la muestra">n</FormulaTooltip>
                </span>
            </div>
          </div>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-base">Ejemplo 3: Muestreo Sistemático</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-2">N = <TraceableNumber explanation="Tamaño total de la población dado en el problema.">2000</TraceableNumber>, n = <TraceableNumber explanation="Tamaño de muestra deseado.">100</TraceableNumber></p>
                <p className="mb-2 font-code">k = 2000 / 100 = <TraceableNumber explanation="Se obtiene dividiendo el tamaño de la población (N=2000) por el tamaño de la muestra (n=100).">20</TraceableNumber></p>
                <p className="mb-2">Se selecciona aleatoriamente un número entre 1 y 20 (ej: 7).</p>
                <p><span className="font-semibold">Elementos seleccionados:</span> 7, 27, 47, 67, 87, ...</p>
            </CardContent>
          </Card>
        </div>
        
        <Separator />
        
        <div>
            <h3 className="text-xl font-semibold mb-2">Muestreo Estratificado</h3>
            <p className="text-muted-foreground mb-4">La población se divide en subgrupos (estratos) y se realiza un muestreo en cada uno.</p>
            <div className="text-center font-code text-lg p-4 bg-muted rounded-lg">
                <FormulaTooltip explanation="Tamaño de la muestra total">n</FormulaTooltip>
                {' = '}
                Σ 
                <FormulaTooltip explanation="Tamaño de la muestra para el estrato h">nₕ</FormulaTooltip>
            </div>
             <Card className="mt-4">
                <CardHeader>
                    <CardTitle className="text-base">Ejemplo 4: Muestreo Estratificado Proporcional</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-2 font-semibold">Facultad</th>
                                    <th className="p-2 font-semibold">Estudiantes (Nₕ)</th>
                                    <th className="p-2 font-semibold">Proporción (Wₕ)</th>
                                    <th className="p-2 font-semibold">Muestra (nₕ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-2">Ciencias</td>
                                    <td className="p-2">3000</td>
                                    <td className="p-2"><TraceableNumber explanation="3000 / 6000 = 0.50">0.50</TraceableNumber></td>
                                    <td className="p-2"><TraceableNumber explanation="100 × 0.50 = 50">50</TraceableNumber></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2">Humanidades</td>
                                    <td className="p-2">2000</td>
                                    <td className="p-2"><TraceableNumber explanation="2000 / 6000 = 0.33">0.33</TraceableNumber></td>
                                    <td className="p-2"><TraceableNumber explanation="100 × 0.33 = 33">33</TraceableNumber></td>
                                </tr>
                                 <tr>
                                    <td className="p-2">Ingeniería</td>
                                    <td className="p-2">1000</td>
                                    <td className="p-2"><TraceableNumber explanation="1000 / 6000 = 0.17">0.17</TraceableNumber></td>
                                    <td className="p-2"><TraceableNumber explanation="100 × 0.17 = 17">17</TraceableNumber></td>
                                </tr>
                                <tr className="border-t font-bold bg-muted/50">
                                    <td className="p-2">Total</td>
                                    <td className="p-2">6000</td>
                                    <td className="p-2">1.00</td>
                                    <td className="p-2">100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
      </CardContent>
    </Card>
  );
}
