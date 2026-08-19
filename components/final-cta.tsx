import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="bg-navy py-24 text-navy-foreground lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            Valorar Eficaz
          </p>
          <h2 className="font-serif text-4xl font-medium leading-[1.1] text-balance text-white lg:text-5xl xl:text-6xl">
            Su inmueble tiene un valor. Conozcámoslo.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/70">
            Solicite información y dé el primer paso para conocer mejor su propiedad.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#formulario"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105 sm:w-auto"
            >
              Solicitar avalúo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/40 px-8 py-4 text-[13px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
            >
              Contactar asesor
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
