import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App.tsx';

const pageContext = createContext<{page:string}>({
  page: ""
});
const getRoot = document.getElementById('root');

if(getRoot) {
  const root = ReactDOM.createRoot(getRoot);
  root.render(  
    <React.StrictMode>
      <pageContext.Provider value={{page: '/'}}>
        <App />
      </pageContext.Provider>
    </React.StrictMode>
  )
}

export {pageContext}
