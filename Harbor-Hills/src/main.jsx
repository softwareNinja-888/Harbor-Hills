import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/'>
          <Route index element={<App/>}/>
          {/* <Route path='/about'>
            <Route index element={<AboutPage/>}/>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
