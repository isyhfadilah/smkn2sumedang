import React from 'react'
// import { animateScroll } from 'react-scroll';

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={handleScroll} className="bg-dark text-white py-2 px-4 rounded-full">
      Scroll ke Bawah
    </button>
  )
}

export default ScrollButton
