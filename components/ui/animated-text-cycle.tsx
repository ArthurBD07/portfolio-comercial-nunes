'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface AnimatedTextCycleProps {
  words: string[]
  active?: boolean
  className?: string
  startDelay?: number
  interval?: number
}

export default function AnimatedTextCycle({
  words,
  active = true,
  className = '',
  startDelay = 3000,
  interval = 2800,
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!active || words.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let changeTimer: ReturnType<typeof setTimeout> | undefined
    const startTimer = setTimeout(() => {
      let nextIndex = 1
      const advance = () => {
        setCurrentIndex(nextIndex)
        if (nextIndex < words.length - 1) {
          nextIndex += 1
          changeTimer = setTimeout(advance, interval)
        }
      }
      advance()
    }, startDelay)

    return () => {
      clearTimeout(startTimer)
      if (changeTimer) clearTimeout(changeTimer)
    }
  }, [active, interval, startDelay, words.length])

  const variants = {
    hidden: { y: -12, opacity: 0, filter: 'blur(4px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.35, ease: 'easeOut' as const } },
    exit: { y: 12, opacity: 0, filter: 'blur(4px)', transition: { duration: 0.25, ease: 'easeIn' as const } },
  }

  return (
    <span className="inline-grid align-baseline whitespace-nowrap" aria-hidden="true">
      {words.map((word, index) => (
        <span key={`reserve-${word}-${index}`} className="invisible col-start-1 row-start-1 italic" aria-hidden="true">
          {word}
        </span>
      ))}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className={`col-start-1 row-start-1 italic ${className}`}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
