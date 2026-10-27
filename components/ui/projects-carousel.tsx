'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import Image from 'next/image'
import { Carousel } from '@ark-ui/react/carousel'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { projects } from '@/data/projects'
import styles from './projects-carousel.module.css'

// Ark owns all navigation. Only finish its native scroll immediately when
// reduced motion is requested, including navigation initiated by the keyboard.
function ReducedMotionScroll({ page, reduceMotion, scrollTo }: {
  page: number
  reduceMotion: boolean | null
  scrollTo: (page: number, instant?: boolean) => void
}) {
  const scrollToRef = useRef(scrollTo)
  scrollToRef.current = scrollTo
  useEffect(() => {
    if (reduceMotion) scrollToRef.current(page, true)
  }, [page, reduceMotion])
  return null
}

export default function ProjectsCarousel() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projetos" aria-labelledby="projects-title" className="mx-auto max-w-7xl px-4 py-24 md:px-10 md:py-36">
      <Carousel.Root
        className={styles.carousel}
        defaultPage={0}
        slideCount={projects.length}
        slidesPerPage={1}
        slidesPerMove={1}
        autoSize
        spacing="var(--project-gap)"
        autoplay={false}
        loop={false}
        allowMouseDrag
        aria-label="Projetos de Arthur Nunes"
        translations={{
          nextTrigger: 'Próximo projeto',
          prevTrigger: 'Projeto anterior',
          indicator: (index) => `Ir para o projeto ${String(index + 1).padStart(2, '0')}`,
          item: (index, count) => `Projeto ${index + 1} de ${count}`,
        }}
      >
        <Carousel.Context>
          {(api) => (
            <>
              <ReducedMotionScroll page={api.page} reduceMotion={reduceMotion} scrollTo={api.scrollTo} />
              <div className={styles.heading}>
                <div data-reveal>
                  <p className="section-kicker">01 / trabalhos</p>
                  <h2 id="projects-title" className="section-title">Espaços para <em>bons negócios.</em></h2>
                </div>
                <div className={styles.introduction}>
                  <p className="text-sm leading-relaxed text-[#252522]/60">
                    Projetos que mostram como um site pode transformar a apresentação de um negócio — da primeira impressão ao contato com o cliente.
                  </p>
                  <Carousel.Control className={styles.controls}>
                    <Carousel.PrevTrigger className={styles.arrow} aria-label="Projeto anterior" onClick={(event) => {
                      if (reduceMotion) { event.preventDefault(); api.scrollPrev(true) }
                    }}>
                      <ArrowLeft size={18} aria-hidden="true" />
                    </Carousel.PrevTrigger>
                    <Carousel.NextTrigger className={styles.arrow} aria-label="Próximo projeto" onClick={(event) => {
                      if (reduceMotion) { event.preventDefault(); api.scrollNext(true) }
                    }}>
                      <ArrowRight size={18} aria-hidden="true" />
                    </Carousel.NextTrigger>
                  </Carousel.Control>
                </div>
              </div>

              <Carousel.ItemGroup className={styles.track}>
                {projects.map((project, index) => (
                  <Carousel.Item key={project.id} index={index} className={styles.slide}>
                    <article
                      className={styles.card}
                      style={{ '--project-background': project.background, '--project-accent': project.accent } as CSSProperties}
                      aria-label={project.name}
                    >
                      <p className={styles.category}>{project.category}</p>
                      <div className={styles.browser}>
                        <div className={styles.browserBar} aria-hidden="true">
                          <span className={styles.browserDots}><i /><i /><i /></span>
                          <span className={styles.browserName}>{project.name}</span>
                          <span className={styles.browserMark}>↗</span>
                        </div>
                        <div className={styles.screenshot}>
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            sizes="(max-width: 359px) calc(100vw - 66px), (max-width: 767px) calc(100vw - 90px), (max-width: 1146px) calc(72vw - 116px), 710px"
                            className={styles.image}
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                      </div>
                      <div className={styles.description}>
                        <span className={styles.number} aria-hidden="true">{project.number}</span>
                        <h3>{project.description}</h3>
                      </div>
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.visit} tabIndex={api.isInView(index) ? 0 : -1} aria-label={`Visitar site: ${project.name} (abre em nova aba)`}>
                        <span>Visitar site</span><ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    </article>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <Carousel.IndicatorGroup className={styles.indicators} aria-label="Selecionar projeto">
                {projects.map((project, index) => (
                  <Carousel.Indicator key={project.id} index={index} className={styles.indicator} aria-label={`Ir para o projeto ${project.number}: ${project.name}`} onClick={(event) => {
                    if (reduceMotion) { event.preventDefault(); api.scrollTo(index, true) }
                  }}>
                    <span />
                  </Carousel.Indicator>
                ))}
              </Carousel.IndicatorGroup>
            </>
          )}
        </Carousel.Context>
      </Carousel.Root>
    </section>
  )
}
