import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quiz from './Components/Quiz/Quiz.jsx'
import QuizReact from './Components/QuizReact/QuizReact.jsx'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/QuizHTML", element: <Quiz />},
  {path:"/QuizReact", element: <QuizReact />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
