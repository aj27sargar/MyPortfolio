import React from 'react'

function Container({children}) {
  return (
    <>
    <div className=' mx-10 my-10 pb-20 md:mx-20 md:my-20 flex justify-center border-b-4 border-border md:border-b-2 '>
        {children}
    </div>
    </>
  )
}

export default Container