import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons'
import{BsFillPersonLinesFill} from 'react-icons/bs'
import Logoo from '../assets/ligo.png'
import {Link} from 'react-scroll'


const Navbar =() => {
    const [nav, setNav]= useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' >
        <div>
        <img src={Logoo} alt="Logo imagee" style={{width: '180px'}}/>
        </div>
      
      <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                  <li>
                  <Link  to="home"  smooth={true}  duration={500} >
                   Home
                    </Link> </li>
                  <li><Link  to="about"  smooth={true}  duration={500} >
                   about
                    </Link></li>
                  <li><Link  to="skills"  smooth={true}  duration={500} >
                   skills
                    </Link></li>
                  <li><Link  to="work"  smooth={true}  duration={500} >
                   work
                    </Link></li>
                  <li><Link  to="contact"  smooth={true}  duration={500} >
                   contact
                    </Link></li>
            </ul>
          </div>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
         </div>

   
          

      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
{/*mobile menu*/}
                  <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
                   Home
                    </Link></li>
                  <li className='py-6 text-4xl'><Link  onClick={handleClick} to="about"  smooth={true}  duration={500} >
                   about
                    </Link></li>
                  <li className='py-6 text-4xl'><Link  onClick={handleClick} to="skills"  smooth={true}  duration={500} >
                   skills
                    </Link>l</li>
                  <li className='py-6 text-4xl'><Link  onClick={handleClick} to="work"  smooth={true}  duration={500} >
                   work
                    </Link></li>
                  <li className='py-6 text-4xl'><Link  onClick={handleClick} to="contact"  smooth={true}  duration={500} >
                   contact
                    </Link></li>
      </ul>
      
      <div className='hidden lg:flex fixed  flex-col top-[35%] left-0'>

      <ul className=''>
        
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
              <a href=''className='flex justify-between items-center w-full text-gray-300 '> Github <FaGithub size={30}/></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a href='https://www.facebook.com/dingle012/'className='flex justify-between items-center w-full text-gray-300 '> Facebook <FaFacebook size={30}/></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
              <a href=''className='flex justify-between items-center w-full text-gray-300 '> Linked in <FaLinkedin size={30}/></a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8892b0]'>
              <a href=''className='flex justify-between items-center w-full text-gray-300 '> Resume <BsFillPersonLinesFill size={30}/></a>
        </li>
       
      </ul>

      </div>

    </div>
  )
}

export default Navbar