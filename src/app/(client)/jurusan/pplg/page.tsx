'use client'

import { Tabbar } from '@/components/ui/tab'
import jurusan from '@/data/jurusan.json'
import Container from '@/components/common/layouts/Container'
import { useState } from 'react'

export default function Pplg() {
  const [contentVisible, setContentVisible] = useState(Array(jurusan.length).fill(false))

  const handleClick = (index: number) => {
    // Create a copy of the visibility array
    const newVisibility = [...contentVisible]

    // Toggle the visibility of the clicked tab
    newVisibility[index] = !newVisibility[index]

    // Set all other tabs to false
    for (let i = 0; i < newVisibility.length; i++) {
      if (i !== index) {
        newVisibility[i] = false
      }
    }

    // Update the state
    setContentVisible(newVisibility)
  }

  return (
    <main>
      <Container className="flex space-x-2xl">
        {jurusan.map((item, index) => (
          <div key={index}>
            <Tabbar onclick={() => handleClick(index)} tabs={item.label} />
          </div>
        ))}
      </Container>

      <Container>
        {jurusan.map((item, index) => (
          <div key={index}>{contentVisible[index] && <div key={index}>{item.title}</div>}</div>
        ))}
      </Container>
    </main>
  )
}
