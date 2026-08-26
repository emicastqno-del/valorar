import Image from 'next/image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { properties } from '@/lib/company'

export function Gallery() {
  return (
    <section id="portafolio" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Portafolio visual
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-5xl">
              Espacios que hablan del valor que sabemos encontrar.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground lg:pb-1">
            Una selección visual de inmuebles, arquitectura e interiores que representa el universo inmobiliario con el que trabajamos.
          </p>
        </Reveal>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-12 lg:gap-5">
          <Reveal className="group relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-7 lg:row-span-3">
            <Image
              src="/images/gallery-2.png"
              alt="Panorámica de Medellín entre montañas al atardecer"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Portafolio destacado
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">Antioquia</p>
                <h3 className="mt-1 font-serif text-2xl lg:text-3xl">Arquitectura &amp; territorio</h3>
              </div>
              <span className="hidden h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-navy transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:flex">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} className="group relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-2">
            <Image
              src="/images/gallery-1.png"
              alt="Detalle de escalera y madera en interior moderno"
              fill
              sizes="(max-width: 1024px) 50vw, 42vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Interiorismo</p>
              <p className="mt-1 font-serif text-xl">Detalles que elevan un espacio</p>
            </div>
          </Reveal>

          <Reveal delay={180} className="group relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-2">
            <Image
              src="/images/gallery-3.png"
              alt="Cocina moderna con isla de mármol e iluminación cálida"
              fill
              sizes="(max-width: 1024px) 50vw, 42vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Valor inmobiliario</p>
                <p className="mt-1 font-serif text-xl">Funcionalidad, diseño y ubicación</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260} className="relative overflow-hidden rounded-2xl border border-border bg-secondary p-6 sm:col-span-2 lg:col-span-7 lg:row-span-1 lg:flex lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Experiencia sobre el terreno</p>
              <p className="mt-2 font-serif text-2xl text-foreground">Propiedades en diferentes regiones</p>
            </div>
            <div className="mt-5 flex -space-x-3 lg:mt-0">
              {properties.slice(0, 4).map((property) => (
                <div key={property.location} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-secondary shadow-md transition-transform duration-300 hover:-translate-y-1">
                  <Image src={property.image} alt={property.location} fill sizes="48px" className="object-cover" />
                </div>
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-navy text-[10px] font-semibold text-white shadow-md">
                +{Math.max(properties.length - 4, 1)}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat value="2017" label="Año de constitución" />
          <Stat value="6820" label="Actividad inmobiliaria" />
          <Stat value="5+" label="Regiones representadas" />
          <Stat value="100%" label="Enfoque profesional" />
        </Reveal>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="group rounded-xl border border-border bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5 sm:p-5">
      <p className="font-serif text-2xl text-foreground sm:text-3xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
    </div>
  )
}
