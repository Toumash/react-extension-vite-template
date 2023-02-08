import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SampleRootComponent } from './SampleRootComponent';

console.log(`vite 4 app started the chrome extension`);

let element = document.createElement('span');
element.id = 'crx-root';
document.body.appendChild(element);
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <SampleRootComponent />
  </React.StrictMode>,
)