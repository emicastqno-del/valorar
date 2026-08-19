import { LineChart, FileText, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: LineChart,
    title: 'Profesionalismo',
    text: 'Un enfoque orientado al análisis y conocimiento del mercado inmobiliario.',
  },
  {
    icon: FileText,
    title: 'Claridad',
    text: 'Información presentada de forma clara para facilitar la toma de decisiones.',
  },
  {
    icon: ShieldCheck,
    title: 'Confianza',
    text: 'Un servicio pensado alrededor de las necesidades de cada cliente.',
  },
]

export function TrustBar() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            Una valoración adecuada comienza con información confiable.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            En Valorar Eficaz trabajamos dentro del sector inmobiliario ofreciendo
            soluciones orientadas a la valoración y gestión de inmuebles, ayudando a
            nuestros clientes a contar con información para sus decisiones patrimoniales.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 120}
              className="flex flex-col bg-background p-8 lg:p-10"
            >
              <item.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
