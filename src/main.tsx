import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import IntegrantePage from './pages/IntegrantesPage'

const router = createBrowserRouter ([
  {
    path: "/",
    element: < App />
  },
  {
    path: "/Integrantes",
    element: < IntegrantePage />
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
