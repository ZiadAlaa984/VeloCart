import React from 'react'

export default function ContainerWidth({children}:any) {
  return (
    <div className='max-w-screen-2xl mx-auto ' >
      {children}
    </div>
  )
}
