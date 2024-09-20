import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Components/StudentComponents/StudentDashboard/Home';
import StudentSummary from './Components/StudentComponents/StudentSummary';
import EditProfile from './Components/StudentComponents/EditProfile/EditProfile';
import ViewOfferLetter from './Components/StudentComponents/ViewOfferLetter/ViewOfferLetter';

const router = createBrowserRouter([
  {
    path:"/home",
    element:<Home/>,
    children:[
      {
        index:true,
        element:<StudentSummary/>
      },
      {
        path:"/home/editProfile",
        element:<EditProfile/>
      },
      {
        path:"/home/ViewOfferLetter",
        element:<ViewOfferLetter/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}


export default App;
