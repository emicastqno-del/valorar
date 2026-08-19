import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="nosotros" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/about.png"
              alt="Fachada de edificio residencial contemporáneo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-navy px-8 py-6 shadow-xl sm:block lg:-right-6">
            <p className="font-serif text-3xl text-gold">Desde 2017</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/70">
              Cámara de Comercio de Medellín
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Valorar Eficaz
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl xl:text-5xl">
            Valoramos lo que representa su patrimonio.
          </h2>

          <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Valorar Eficaz S.A.S. es una empresa colombiana vinculada al sector
              inmobiliario. Su actividad se encuentra enfocada en servicios relacionados
              con el mercado de inmuebles y actividades inmobiliarias realizadas a cambio
              de una retribución o por contrato.
            </p>
            <p>
              Desde Medellín, la empresa desarrolla su actividad dentro del sector
              inmobiliario, acompañando diferentes necesidades relacionadas con
              propiedades y valoración.
            </p>
          </div>

          <div className="mt-8 rounded-sm border-l-2 border-gold bg-background p-6">
            <p className="font-serif text-xl text-foreground">Desde 2017</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Empresa constituida como sociedad por acciones simplificada y matriculada
              ante la Cámara de Comercio de Medellín para Antioquia el 23 de junio de 2017.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
