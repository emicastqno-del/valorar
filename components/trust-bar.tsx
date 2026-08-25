import { LineChart, FileText, ShieldCheck, Award, Landmark } from 'lucide-react'
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

const certIcons = [Award, Landmark]

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

      {/* Certificaciones — estilo sello oficial */}
      <Reveal delay={160} className="relative mt-20 overflow-hidden bg-navy py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            Respaldo y certificaciones
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
            {certifications.map((cert, i) => {
              const Icon = certIcons[i] ?? Award
              return (
                <div
                  key={cert.title}
                  className="flex flex-col items-center rounded-sm border border-white/10 bg-white/[0.03] px-7 py-10 text-center backdrop-blur-sm transition-colors duration-300 hover:border-gold/40"
                >
                  <span className="relative flex h-20 w-20 flex-none items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-gold/50" />
                    <span className="absolute inset-[6px] rounded-full border border-gold/25" />
                    <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-lg text-white">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {cert.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* Experiencia con empresas */}
      <div className="border-t border-border bg-secondary py-14">
        <Reveal className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Experiencia realizando avalúos para
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {clientExperience.map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                <span className="whitespace-nowrap font-serif text-base text-foreground/80 lg:text-lg">
                  {name}
                </span>
                {i < clientExperience.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-gold/60" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
