import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Hero';
import ProfileView from './components/ProfileView/index.jsx';
import About from './components/About/index.jsx';
import UserProvider from './utils/UserContext.jsx'
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>this is not working</p>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'profile/:id',
        element: <ProfileView />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

// UserProvider, which is a custom hook that retreives user data, is available to all the components in application
ReactDOM.createRoot(document.getElementById('root')).render(
<UserProvider>
  <RouterProvider router={router}/>
</UserProvider>  
  );
