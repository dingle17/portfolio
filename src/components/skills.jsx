import React from 'react'
import LOGOO from '../assets/ligo.png'
import HTML from '../assets/html1.png'
import CSS from '../assets/css1.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import TailWind from '../assets/tailwind.png'
import GitHub from '../assets/github.png'
import CodeIgniter from '../assets/codeigniter.png'
import Bootstrap from '../assets/bootstrap.png'





const skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4 '>// These are the technologies I've work with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={HTML} alt="html" className='w-20 mx-auto'/>
                <p>HTML</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={CSS} alt="html" className='w-20 mx-auto'/>
                <p>CSS</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={JavaScript} alt="html" className='w-20 mx-auto'/>
                <p>JavaScript</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={ReactImg} alt="html" className='w-20 mx-auto'/>
                <p>React</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={TailWind} alt="html" className='w-20 mx-auto'/>
                <p>TailWind</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={GitHub} alt="html" className='w-20 mx-auto'/>
                <p>Github</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={CodeIgniter} alt="html" className='w-20 mx-auto'/>
                <p>CodeIgniter</p>

            </div>
            <div className='shadow-md shadow-[#84c0c16] hover:scale-110 duration-500'>
                <img src={Bootstrap} alt="html" className='w-20 mx-auto'/>
                <p>Bootstrap</p>

            </div>
            
        </div>
        </div>
    </div>
  )
}
export default skills