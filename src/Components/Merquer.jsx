import React from 'react'
import  {motion} from 'framer-motion'

const Merquer = () => {
  return (
    <div className='morquee w-full py-20 bg-[#004D43] pt-1 rounded-tl-3xl rounded-tr-3xl'>
        <div className="inner  border-t-2 border-b-2 mt-20 flex overflow-hidden whitespace-nowrap">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[22vw] font-bold -mt-12 -mb-2 leading-none tracking-[-1.8vw] uppercase'>We Are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[22vw] font-bold -mt-12 -mb-2 leading-none tracking-[-1.8vw] uppercase'>We Are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[22vw] font-bold -mt-12 -mb-2 leading-none tracking-[-1.8vw] uppercase'>We Are Ochi</motion.h1>          
        </div>
    </div>
  )
}

export default Merquer
