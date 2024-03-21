import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp';
import FirstApp from './FirstApp';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="Hola soy Goku" subTitle={123}/>
  </React.StrictMode>
);