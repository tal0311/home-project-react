import React, { useState, useEffect } from 'react'

export const Clock = () => {
  const [isDark, setIsDark] = useState(false)

  const time = new Date()
  const minutes = time.getMinutes()
  const hours = time.getHours()

  return (
    <>
      <section
        onClick={() => setIsDark(!isDark)}
        className={isDark ? 'ch-1 flex dark' : 'ch-1 flex'}
      >
        <h1>Challenge-1</h1>
        <div className='season-img'></div>
        <p className='time'>
          {hours}:{minutes} <span>{hours > 12 ? 'PM' : 'AM'}</span>
        </p>
      </section>
    </>
  )
}
