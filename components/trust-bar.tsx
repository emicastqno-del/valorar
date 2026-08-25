import { LineChart, FileText, ShieldCheck, BadgeCheck, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { certifications, clientExperience } from '@/lib/company'

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

const certIcons = [BadgeCheck, Building2]

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

        {/* Certificaciones y afiliaciones oficiales */}
        <Reveal delay={160} className="mt-8 rounded-sm border border-gold/25 bg-secondary p-8 lg:p-10">
          <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Respaldo y certificaciones
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert, i) => {
              const Icon = certIcons[i] ?? BadgeCheck
              return (
                <div key={cert.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">{cert.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {cert.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Experiencia con empresas */}
        <Reveal delay={220} className="mt-10 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Experiencia realizando avalúos para
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clientExperience.map((name) => (
              <span
                key={name}
                className="font-serif text-base text-foreground/70 lg:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
