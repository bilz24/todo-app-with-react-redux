import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './config/store.js'   // ✅ curly braces hata do
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
