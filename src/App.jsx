import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store/Store.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Portfolio from './Pages/Portfolio/Portfolio.jsx'
import Layout from './Layout.jsx'
import ProjectCard from './Pages/ProjectCard/ProjectCard.jsx'
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      }
      ,{
        path:'/contact',
        element: <Contact/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/portfolio/:id',
        element : <ProjectCard/>,
      }
    ]
  }
  ] 
)
function App() {


  return (
    <>
       <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
