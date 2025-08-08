import { Header } from '@/components/header';
import { ConceptosFundamentales } from '@/components/conceptos-fundamentales';
import { TiposDeVariables } from '@/components/tipos-de-variables';
import { MuestreoProbabilistico } from '@/components/muestreo-probabilistico';
import { MuestreoNoProbabilistico } from '@/components/muestreo-no-probabilistico';
import { CuestionarioYRecoleccion } from '@/components/cuestionario-y-recoleccion';
import { AiExplainer } from '@/components/ai-explainer';
import { ImportanciaEnCienciasSociales } from '@/components/importancia-ciencias-sociales';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="mx-auto grid w-full max-w-7xl gap-8">
          <h1 className="text-3xl font-bold font-headline text-primary md:text-4xl">
            Tema I: La Estadística, el Muestreo y la Recolección de Datos
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <ConceptosFundamentales />
            <div className="flex flex-col gap-8">
              <TiposDeVariables />
              <ImportanciaEnCienciasSociales />
            </div>
          </div>
          
          <AiExplainer />

          <MuestreoProbabilistico />
          <MuestreoNoProbabilistico />
          <CuestionarioYRecoleccion />
        </div>
      </main>
    </div>
  );
}
