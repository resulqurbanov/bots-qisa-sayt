import React from 'react'
import "./style.scss"
function News() {
  return (
    <section className='news'>
      <div className='metn'>
        <a href="">
          <p className='by'>Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.</p>
          <p className='kc'>Labore irure irure laborum quis tempor aliqua. Dude</p>
        </a>
        <p className='date'>February 19, 2020</p>
        <a href="">
          <p className='by'>Dolore pariatur amet ullamco aliquip mollit aliqua qui.</p>
          <p className='kc'>Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.</p>
        </a>
        <p className='date'>February 17, 2020</p>
        <a href="">
          <p className='by'>Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.</p>
          <p className='kc'>Adipisicing sit minim occaecat nulla proident exercitation do laboris.</p>
        </a>
        <p className='date'>February 15, 2020</p>
      </div>
    </section>
  )
}

export default News