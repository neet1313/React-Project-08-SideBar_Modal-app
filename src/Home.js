import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';
const Home = () => {
  const { openModal, openSideBar } = useGlobalContext();
  return <main>
    <button type='btn' className='sidebar-toggle' onClick={openSideBar}>
      <FaBars />
    </button>
    <button type='btn' className='btn' onClick={openModal}>
      Show Modal
    </button>
  </main>
}

export default Home
