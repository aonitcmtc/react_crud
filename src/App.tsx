import { useState } from 'react'
import { Route, Switch } from 'wouter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// /* Component */
import { Navbar } from './components/Navbar'
import { Home, Heroes, HeroesDetail, Marvel, AddForm, UserDetail } from './pages'

function App() {

  return (
    <>
      <Navbar>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/heroes' component={Heroes}/>
          <Route path='/marvel' component={Marvel}/>
          <Route path='/heroes/:heroesName' component={HeroesDetail}/>
          <Route path='/addform' component={AddForm}/>
          <Route path='/editform/:id' component={AddForm}/>
          <Route path='/UserDetail' component={UserDetail}/>
        </Switch>
      </Navbar>
    </>
  )
}

export default App
