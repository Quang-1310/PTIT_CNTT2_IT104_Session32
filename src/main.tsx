import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routers}/>
    </Provider>
  </StrictMode>,


)
