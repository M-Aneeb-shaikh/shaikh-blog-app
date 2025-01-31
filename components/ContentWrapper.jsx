import React from 'react'

export default function ContentWrapper({children}) {
  return (
    <section className='mx-4 sm:mx-10 md:mx-20 lg:mx-40'>
      {children}
    </section>
  )
}
