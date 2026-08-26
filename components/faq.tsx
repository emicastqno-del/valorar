'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, MessageCircle, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { faqs, whatsappHref } from '@/lib/company'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-navy shadow-2xl shadow-navy/15">
                <Image
                  src="/images/contact-bg.png"
                  alt="Interior de apartamento moderno con vista urbana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/5" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Estamos para ayudarle
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                    <span className="h-px w-8 bg-gold" />
                    ¿Tiene otra pregunta?
                  </p>
                  <h2 className="font-serif text-3xl leading-tight lg:text-4xl">
                    Hablemos de su inmueble.
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                    Si no encuentra la respuesta que busca, nuestro equipo puede orientarle directamente.
                  </p>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Consultar por WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background p-4">
                  <Check className="h-4 w-4 text-gold" />
                  <p className="mt-3 text-xs font-medium text-foreground">Orientación clara</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <Check className="h-4 w-4 text-gold" />
                  <p className="mt-3 text-xs font-medium text-foreground">Atención profesional</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <div className="mb-8 max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-10 bg-gold" />
                Preguntas frecuentes
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-5xl">
                Todo lo que necesita saber antes de dar el siguiente paso.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                Resolvemos las dudas más comunes sobre avalúos y procesos inmobiliarios para que pueda decidir con mayor claridad y confianza.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              {faqs.map((item, i) => {
                const isOpen = open === i
                return (
                  <div key={item.q} className="border-b border-border last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center gap-5 px-5 py-6 text-left transition-colors duration-300 hover:bg-secondary/60 sm:px-7"
                      aria-expanded={isOpen}
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border font-serif text-sm text-muted-foreground transition-all duration-300 group-hover:border-gold/50 group-hover:text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-base font-medium text-foreground sm:text-lg">
                        {item.q}
                      </span>
                      <span className={cn('flex h-9 w-9 flex-none items-center justify-center rounded-full bg-secondary transition-colors duration-300', isOpen && 'bg-gold text-gold-foreground')}>
                        <Plus className={cn('h-4 w-4 text-gold transition-transform duration-300', isOpen && 'rotate-45 text-gold-foreground')} />
                      </span>
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-500 ease-in-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl px-5 pb-7 pl-[4.75rem] text-pretty text-sm leading-7 text-muted-foreground sm:px-7 sm:pl-[5.5rem]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
