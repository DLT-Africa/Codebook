import React from 'react'

import { Footer, Header } from './components'
import { AllRoutes } from './routes/AllRoutes'



const App = () => {
  return (
    <div  className='App dark:bg-dark'>
      <Header/>
      <AllRoutes/>
      <Footer/>
      
    </div>
  )
}

export default App
