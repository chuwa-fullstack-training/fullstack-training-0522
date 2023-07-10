import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HW1 from './hw1'
import {HW1tk, store} from './redux-tk/hw1-tk'
import { Provider } from 'react-redux'
// import store from './store';


function App() {


  return (
    <>
       <Provider store={store}>
        <HW1tk></HW1tk>
        {/* <HW1/> */}
      </Provider>
    </>
  )
}

export default App
