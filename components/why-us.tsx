import { Reveal } from '@/components/reveal'
import { whyUs } from '@/lib/company'

export function WhyUs() {
  return (
    <section className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Por qué Valorar Eficaz
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-white lg:text-4xl xl:text-5xl">
            Información para tomar mejores decisiones inmobiliarias.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="border-t border-white/15 pt-6">
              <span className="font-serif text-2xl text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
