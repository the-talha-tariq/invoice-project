import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
     {/* Notes */}
     <section className='mb-5 mt-20'>
        <p className='lg:w-1/2 text-justify'>{notes}</p>
      </section> 
    </>
  )
}

export default Notes
