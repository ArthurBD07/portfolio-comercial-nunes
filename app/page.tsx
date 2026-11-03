'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, ChevronDown, Mail, Menu, MoveUpRight, Sparkles, X } from 'lucide-react'
import { faqs, process, services, site, whatsappUrl } from '@/data/site'
import ProjectsCarousel from '@/components/ui/projects-carousel'
import HeroTitleAnimated from '@/components/hero-title'
import heroStyles from './hero.module.css'

function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a href={href} className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors ${light ? 'text-[#f8f5ef] hover:text-[#d7c6a5]' : 'text-[#252522] hover:text-[#c66b4c]'}`}><span>{children}</span><ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
}

function HeroTitle() {
  return <HeroTitleAnimated className={`${heroStyles.title} max-w-3xl font-serif text-[clamp(2.5rem,8vw,7.3rem)] leading-[.91] tracking-[-0.065em]`} highlightClassName="italic text-[#c66b4c]" />
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -5% 0px' })

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#252522] selection:bg-[#d7c6a5] selection:text-[#252522]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#252522]/10 bg-[#f8f5ef]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#inicio" aria-label="Arthur Nunes — início" className="block shrink-0">
            <span className="relative block h-[48px] w-[200px] md:w-[190px] lg:w-[250px]">
              <Image
                src="/LogoArthurNunes.png"
                alt="Arthur Nunes — sites que impulsionam negócios"
                width={1774}
                height={887}
                loading="eager"
                className="absolute left-1/2 top-1/2 max-w-none"
                style={{ width: '128.46%', height: 'auto', transform: 'translate(-50%, -50.8%)' }}
              />
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {['Projetos', 'Serviços', 'Processo', 'Sobre'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium tracking-wide text-[#252522]/65 transition-colors hover:text-[#252522]">{item}</a>)}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#252522] px-4 py-2.5 text-xs font-semibold text-[#f8f5ef] transition-transform hover:-translate-y-0.5">Vamos conversar <ArrowUpRight className="ml-1 inline size-3" /></a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-[#252522]/10 bg-[#f8f5ef] px-5 py-6 md:hidden" aria-label="Menu mobile">{['Projetos', 'Serviços', 'Processo', 'Sobre'].map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="text-lg">{item}</a>)}<a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-1 rounded-full bg-[#252522] px-5 py-3 text-center text-sm font-semibold text-[#f8f5ef]">Pedir orçamento</a></nav>}
      </header>

      <section id="inicio" className={`${heroStyles.hero} relative mx-auto grid max-w-7xl items-center gap-6 px-5 pb-10 pt-28 md:grid-cols-[1.08fr_.92fr] md:gap-12 md:px-10 md:pb-28 md:pt-44`}>
        <div className="relative z-10" data-reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#c66b4c]"><span className="h-px w-8 bg-[#c66b4c]" /> Desenvolvimento web independente</p>
          <HeroTitle />
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#252522]/65 md:mt-8 md:text-lg">Crio sites e landing pages para profissionais e pequenos negócios que querem apresentar seu trabalho com clareza, credibilidade e personalidade — sem depender só das redes sociais.</p>
          <div className="mt-6 flex flex-wrap items-center gap-5 md:mt-9"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#c66b4c] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#ad593d]">Pedir orçamento <ArrowUpRight className="ml-2 inline size-4" /></a><ArrowLink href="#projetos">Ver projetos</ArrowLink></div>
        </div>
        <div className="relative mx-auto hidden w-full max-w-[470px] md:block md:justify-self-end" data-reveal>
          <div className="absolute -right-3 -top-10 font-serif text-[7rem] leading-none text-[#252522]/[.05] md:-right-12 md:-top-16 md:text-[12rem]">A</div>
          <div className="relative rotate-2 border border-[#252522]/15 bg-[#e7e1d6] p-3 shadow-[18px_22px_0_#d7c6a5] transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center justify-between border-b border-[#252522]/10 px-3 py-3"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-[#c66b4c]" /><i className="size-2 rounded-full bg-[#d7c6a5]" /><i className="size-2 rounded-full bg-[#252522]/20" /></div><span className="text-[9px] uppercase tracking-[.2em] text-[#252522]/50">presença digital</span></div>
            <div className="grid min-h-[320px] grid-cols-[1.25fr_.75fr] gap-3 p-5"><div className="flex flex-col justify-between"><div><span className="text-[10px] uppercase tracking-[.16em] text-[#c66b4c]">seu nome aqui</span><p className="mt-3 font-serif text-4xl leading-[.95] tracking-[-.05em]">O seu trabalho, bem apresentado.</p></div><span className="flex items-center gap-2 text-xs font-semibold">conheça <span className="flex size-7 items-center justify-center rounded-full bg-[#252522] text-white"><ArrowUpRight className="size-3" /></span></span></div><div className="relative overflow-hidden bg-[#c66b4c]"><div className="absolute -bottom-5 -left-7 size-32 rounded-full border-[20px] border-[#d7c6a5]" /><div className="absolute right-4 top-8 h-32 w-16 rotate-12 border border-white/50" /></div></div>
          </div>
          <p className="mt-8 text-right text-[10px] uppercase tracking-[.18em] text-[#252522]/45">feito para ser lembrado</p>
        </div>
      </section>

      <div className="marquee border-y border-[#252522]/10 bg-[#e7e1d6]" aria-label="Princípios do trabalho"><div className="marquee-track"><div className="marquee-group"><span className="text-[#252522]">Sites com intenção</span><span>Conteúdo claro</span><span>Experiência responsiva</span><span>Contato facilitado</span></div><div className="marquee-group" aria-hidden="true"><span className="text-[#252522]">Sites com intenção</span><span>Conteúdo claro</span><span>Experiência responsiva</span><span>Contato facilitado</span></div></div></div>

      <ProjectsCarousel />

      <section id="serviços" className="bg-[#252522] px-5 py-24 text-[#f8f5ef] md:px-10 md:py-36"><div className="mx-auto max-w-7xl"><div className="grid gap-14 md:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker text-[#d7c6a5]">02 / o que eu faço</p><h2 className="section-title text-[#f8f5ef]">O essencial, <em className="text-[#d7c6a5]">bem feito.</em></h2><p className="mt-7 max-w-sm text-sm leading-relaxed text-[#f8f5ef]/60">Nada de soluções prontas que não conversam com o seu negócio. Cada página nasce de uma conversa e de uma necessidade real.</p></div><div className="divide-y divide-[#f8f5ef]/15" data-reveal-group>{services.map((service) => <div key={service.number} data-reveal className="grid gap-3 py-7 md:grid-cols-[60px_1fr_1fr] md:items-start"><span className="text-xs text-[#d7c6a5]">{service.number}</span><h3 className="font-serif text-3xl">{service.title}</h3><p className="max-w-xs text-sm leading-relaxed text-[#f8f5ef]/55">{service.text}</p></div>)}</div></div></div></section>

      <section id="processo" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36"><div className="mb-14" data-reveal><p className="section-kicker">03 / sem complicação</p><h2 className="section-title">Do primeiro <em>oi</em> ao site no ar.</h2></div><div className="grid border-t border-[#252522]/15 md:grid-cols-5" data-reveal-group>{process.map(([number, title, text]) => <div key={number} data-reveal className="border-b border-[#252522]/15 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-0"><span className="text-xs text-[#c66b4c]">{number}</span><h3 className="mt-10 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#252522]/60">{text}</p></div>)}</div></section>

      <section id="sobre" className="bg-[radial-gradient(circle_at_78%_45%,#3a3838_0%,#242222_42%,#161515_100%)] px-5 py-24 text-[#f4eee4] md:px-10 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-16"><div className="order-2 md:order-1"><p className="section-kicker">04 / sobre mim</p><h2 className="section-title text-[#d8c7a6]">Olá, eu sou o <em>Arthur.</em></h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-[#f4eee4]/90">Trabalho com desenvolvimento de sites para profissionais e pequenos negócios. Meu papel é entender o que torna o seu trabalho importante e transformar isso em uma presença digital clara, bonita e fácil de acessar.</p><p className="mt-5 max-w-xl text-sm leading-relaxed text-[#f4eee4]/75">Você fala diretamente comigo durante o processo — da primeira conversa à publicação. Sem tradução de termos técnicos, sem perder de vista o que importa para o seu negócio.</p><ArrowLink href={whatsappUrl} light>Vamos conversar sobre o seu projeto</ArrowLink></div><div className="order-1 relative mx-auto flex w-full max-w-sm justify-center md:order-2 md:max-w-md md:justify-end"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-27%20at%2011.33.20-5Elu0m9F2ObY4SWXhP09hBvO8D4qWd.jpeg" alt="Arthur Nunes" className="block max-h-[560px] w-full object-contain [mask-image:linear-gradient(to_bottom,transparent_0%,black_7%,black_88%,transparent_100%),linear-gradient(to_right,transparent_0%,black_22%,black_100%)] [mask-composite:intersect] md:max-h-[620px]" /></div></div></section>

      <section className="mx-auto max-w-3xl px-5 py-24 md:py-36"><div className="mb-12" data-reveal><p className="section-kicker">05 / perguntas frequentes</p><h2 className="section-title">Antes de <em>começar.</em></h2></div><div className="divide-y divide-[#252522]/15">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl marker:hidden"><span>{question}</span><ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-[#252522]/60">{answer}</p></details>)}</div></section>

      <section className="bg-[#c66b4c] px-5 py-24 text-white md:px-10 md:py-32"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="section-kicker text-white/70">vamos começar por uma conversa</p><h2 className="max-w-3xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[.92] tracking-[-.06em]">Seu negócio já tem uma história. <em className="text-[#252522]">Vamos apresentá-la?</em></h2></div><div className="shrink-0"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#252522] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1">Falar pelo WhatsApp <ArrowUpRight className="ml-2 size-4" /></a><p className="mt-4 text-xs text-white/70">Resposta direta, sem compromisso.</p></div></div></section>

      <footer className="bg-[#252522] px-5 py-12 text-[#f8f5ef] md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><a href="#inicio" className="font-serif text-2xl tracking-[-.04em]">Arthur<span className="text-[#c66b4c]">.</span></a><p className="mt-3 text-sm text-[#f8f5ef]/50">{site.city}</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#f8f5ef]/65"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a><a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></div><p className="text-xs text-[#f8f5ef]/35">© {new Date().getFullYear()} NunesDev · Arthur Nunes</p></div></footer>
    </main>
  )
}

// Pequeno conjunto de utilitários visuais mantido aqui para preservar a composição editorial da página.
function CheckIcon() { return <Check className="size-4" /> }
