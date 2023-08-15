import React from 'react'

type Props = {}

const Gome = (props: Props) => {
  return (
   <main className="flex justify-start  items-center flex-col  h-screen w-full  z-0  " >
   <div className='flex  flex-col items-center p-3 md:p-12 border border-black w-[60%]  ' >
      <p className='font-serif text-4xl p-3 md:text-6xl  ' >Next Blogs</p>
      <p className='font-serif text-xl md:text-3xl md:py-3 ' >Blog site for developers</p>
     </div>

     <h1 className='py-4 text-2xl font-light  md:text-3xl w-[60%] border border-black  ' >Popular Blogs</h1>
   </main>
  )
}

export default Gome