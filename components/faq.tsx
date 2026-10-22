'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { faqs } from '@/lib/company'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-4">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Resolvemos las dudas más comunes sobre el proceso de valoración de inmuebles.
            Si necesita más información, escríbanos.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="divide-y divide-border border-t border-border">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-foreground lg:text-lg">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'h-5 w-5 flex-none text-gold transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
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
    </section>
  )
}
