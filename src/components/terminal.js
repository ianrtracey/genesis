import React from 'react'
import ReactTyped from 'react-typed'

const Terminal = () => (
  <div>
    <ReactTyped
      loop
      typeSpeed={60}
      backSpeed={20}
      strings={['Art + Technology', 'Data + Creativity', '']}
      smartBackspace
      shuffle={false}
      backDelay={1000}
      fadeOut={false}
      fadeOutDelay={300}
      showCursor
      smartBackspace
      cursorChar="|"
    />
  </div>
)
export default Terminal
