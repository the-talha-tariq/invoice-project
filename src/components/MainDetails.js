import React from 'react'

const MainDetails = ({name,address}) => {
  return (
    <>
     <section className='flex flex-col items-end justify-end'>
        <h2 className='text-xl uppercase' >{name}</h2>
        <p>{address}</p>
      </section> 
    </>
  )
}

export default MainDetails
