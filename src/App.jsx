import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Autre from './pages/Autre'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: "/autre",
    element: <Autre/>
  }
])

function App() {
  return (
    <div className="App">
      <header className="App-header">   
        
        <RouterProvider router={router}/>
      </header>
      
    </div>
  );
}

export default App
