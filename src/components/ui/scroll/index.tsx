import React from 'react'
import Image from 'next/image'
// import { animateScroll } from 'react-scroll';

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <main>
      <p className="text-center text-sm text-white/80 mb-2">Scroll</p>
      <button onClick={handleScroll} className="bg-secondary text-white p-4 rounded-full shadow-dark shadow-inner">
        <Image src="/icons/fi_arrow_down.svg" alt="arrow_down" height={24} width={24} />
      </button>
    </main>
  )
}

export default ScrollButton
