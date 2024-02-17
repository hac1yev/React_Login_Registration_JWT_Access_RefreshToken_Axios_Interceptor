import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
)