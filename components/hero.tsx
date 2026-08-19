import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Interior de apartamento moderno con vista a la ciudad al atardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
        <div className="absolute inset-0 bg-navy/25" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Avalúos y servicios inmobiliarios
          </p>

          <h1 className="font-serif text-4xl font-medium leading-[1.08] text-balance text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Conozca el verdadero valor de su inmueble.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/75 lg:text-lg">
            Información profesional para valorar su patrimonio y tomar decisiones
            inmobiliarias con mayor seguridad.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105 hover:shadow-xl hover:shadow-gold/20"
            >
              Solicitar un avalúo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 bg-white/5 px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Hablar con un asesor
            </a>
          </div>

          <div className="mt-14 border-t border-white/15 pt-6">
            <p className="font-serif text-lg text-white">Valorar Eficaz S.A.S.</p>
            <p className="mt-1 text-sm text-white/60">
              Servicios inmobiliarios y valoración de inmuebles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
