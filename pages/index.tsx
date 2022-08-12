import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact'
import Projects from '../components/projects'


const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen bg-gray-700 text-white'>
      <div className='mx-2'>
        <h1>Projects</h1>
        <Projects />
      </div>
      <div className='mx-2'>
        <h1>Contact</h1>
        <Contact />
      </div>
    </div>
  )
}

export default Home
