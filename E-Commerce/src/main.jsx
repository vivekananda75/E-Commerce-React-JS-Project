import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Mycontext from './components/Mycontext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './ReduxToolKit/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Mycontext>
    <App />
    </Mycontext>
    </BrowserRouter>
    </Provider>
  
  </StrictMode>,
)
