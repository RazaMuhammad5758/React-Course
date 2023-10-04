import React from 'react'
import Profile from './assets/components/profile/profile'
import './App.css'

const App = () => {
  return (
    <div className='pro'>
      <Profile
      src='https://images.unsplash.com/photo-1694080139845-f6096fb56c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      title ='Birds'
      desc = 'Explore the nature'
      btn = 'EXPLORE'/>
      <Profile
      src='https://images.unsplash.com/photo-1695817940139-05a792a27e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
      title ='Sparrow'
      desc = 'Explore the nature'
      btn = 'EXPLORE'/>
      <Profile
      src='https://images.unsplash.com/photo-1695796187783-23b6a38ba1aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80'
      title ='Animals'
      desc = 'Explore the nature'
      btn = 'EXPLORE'/>
      <Profile
      src='https://images.unsplash.com/photo-1678854354576-1d7504664911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
      title ='Monkeys'
      desc = 'Explore the nature'
      btn = 'EXPLORE'/>
    </div>
  )
}

export default App
