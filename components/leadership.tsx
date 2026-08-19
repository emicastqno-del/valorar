import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappHref, WHATSAPP_MESSAGE_NATALIA } from '@/lib/company'

export function Leadership() {
  return (
    <section id="equipo" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* LADO IZQUIERDO — Fotografía */}
        <Reveal className="relative order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy">
            {/*
              TODO: Reemplazar este bloque por la fotografía profesional real de
              Natalia Buitrago (public/images/natalia.png) cuando esté disponible.
              No se utiliza una foto de stock genérica para representarla.
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-navy via-navy to-navy/90">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/40 bg-white/5">
                <span className="font-serif text-4xl text-gold">NB</span>
              </div>
              <p className="px-8 text-center text-xs uppercase tracking-[0.28em] text-white/40">
                Fotografía profesional próximamente
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-navy px-8 py-6 shadow-xl sm:block lg:-right-6">
            <p className="font-serif text-lg text-gold">Natalia Buitrago</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/70">
              CEO &amp; Asesora Inmobiliaria
            </p>
          </div>
        </Reveal>

        {/* LADO DERECHO — Contenido */}
        <Reveal delay={120} className="order-2">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Conozca a nuestro equipo
          </p>

          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl xl:text-5xl">
            Experiencia y acompañamiento en cada decisión inmobiliaria.
          </h2>

          <div className="mt-8">
            <p className="font-serif text-2xl text-foreground lg:text-3xl">Natalia Buitrago</p>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-gold to-gold/20" />
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-gold">
              CEO &amp; Asesora Inmobiliaria
            </p>
          </div>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Al frente de Valorar Eficaz, Natalia Buitrago acompaña a sus clientes en sus
            necesidades inmobiliarias, brindando una atención cercana y profesional durante
            el proceso.
          </p>

          <blockquote className="mt-7 rounded-sm border-l-2 border-gold bg-background p-6">
            <p className="text-pretty font-serif text-lg italic leading-relaxed text-foreground">
              &ldquo;Cada inmueble representa una decisión importante. Nuestro trabajo es
              acompañarla con información y confianza.&rdquo;
            </p>
          </blockquote>

          <div className="mt-9">
            <a
              href={whatsappHref(WHATSAPP_MESSAGE_NATALIA)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105 hover:shadow-xl hover:shadow-gold/20"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar con Natalia
            </a>
          </div>

          {/* Firma visual */}
          <div className="mt-10 border-t border-border pt-6">
            <p className="font-serif text-xl italic text-foreground/80">Natalia Buitrago</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              CEO &amp; Asesora Inmobiliaria — Valorar Eficaz S.A.S.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
