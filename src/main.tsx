import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import IntegrantePage from './pages/IntegrantesPage'
import FaqPage from './pages/FaqPage'
import CadastroPage from './pages/CadastroPage.tsx'
import LoginPage from './pages/LoginPage.tsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: < App />
  },
  {
    path: "/Integrantes",
    element: < IntegrantePage />
  },
  {
    path: "/Faq",
    element: <FaqPage/>
  },
  {
    path: "/Cadastro",
    element: <CadastroPage/>
  },
  {
    path: "/Login",
    element: <LoginPage/>
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
