import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import Sorting from './routes/Sorting'
import PathFinding from './routes/PathFinding'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'sorting/*',
    element: <Sorting />,
  },
  {
    path: 'pathfinding',
    element: <PathFinding />,
  },
  {
    path: '*',
    element: <>404</>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
