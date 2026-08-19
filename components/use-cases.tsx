import { ShoppingBag, Tag, Landmark, Home } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useCases } from '@/lib/company'

const icons = [ShoppingBag, Tag, Landmark, Home]

export function UseCases() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Usos del avalúo
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            ¿Para qué necesita un avalúo?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group flex flex-col rounded-sm border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-navy transition-colors duration-300 group-hover:bg-gold">
                  <Icon
                    className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-gold-foreground"
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="mt-6 text-base font-semibold uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
