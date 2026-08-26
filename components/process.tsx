import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/company'

export function Process() {
  return (
    <section id="proceso" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Proceso
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            Comenzar es sencillo.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 100}
              className="interactive-lift shine-card group flex flex-col bg-background p-8 hover:bg-secondary"
            >
              <span className="font-serif text-5xl text-gold/40 transition-colors duration-300 group-hover:text-gold">
                {step.step}
              </span>
              <p className="mt-6 text-pretty leading-relaxed text-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-sm bg-navy px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-navy-foreground transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
          >
            Solicitar información
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
