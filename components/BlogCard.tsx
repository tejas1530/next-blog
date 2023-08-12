import Link from 'next/link'
import React from 'react'

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
  slug:string
}

type Props = {
  data:Post
}

const BlogCard = (props: Props) => {
  const {data}=props

  return (
<>

    {/* {
      data.map((a)=>( */}
        <main key={data.id} className='w-screen flex justify-center items-center py-3 md:py-7 border-t border-gray-400  ' >

      
        <div   className='w-screen px-3 md:w-[50%]  space-y-4 box-border ' >
         
             
              <div  >
  
              <h1  className='text-2xl' >{data.title}</h1>
              <p className='text-l font-light' >date day time {data.userId} </p>
              <h3 className='text-xl' >{data.body.substring(0,150)}</h3>
              <ul className='list-disc ml-3 space-y-2 ' >
                  <li>dabkdaskhd</li>
                  <li>skvksdbfkjsbfk</li>
                  <li>skvksdbfkjsbfk</li>
              </ul>
                      <h1 className='text-blue-600' ><Link href={`/blogpost/${data.slug}`} >read more...</Link></h1>
              </div>
             
            
            
          </div>
  
  
      </main>
      {/* ))
    } */}
</>
  )
}

export default BlogCard