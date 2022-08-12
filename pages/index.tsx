import type { NextPage } from 'next'
import Contact from '../components/contact'
import Projects from '../components/projects'


const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen bg-gray-700 text-white text-lg'>
      <div className='mx-2'>
        <h1 className='mb-1 ml-1'>Projects</h1>
        <Projects />
      </div>
      <div className='mx-2'>
        <h1 className='mb-1 ml-1'>Contact</h1>
        <Contact />
      </div>
    </div>
  )
}

export default Home
