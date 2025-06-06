import './index.css'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import store from './Redux/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'


import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store = {store}>
      <BrowserRouter>
      <App />
      <Toaster/>
      </BrowserRouter>
  </Provider>
  
    
 
)
