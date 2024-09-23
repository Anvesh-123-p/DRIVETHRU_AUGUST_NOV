import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Components/StudentComponents/StudentDashboard/Home';
import StudentSummary from './Components/StudentComponents/StudentSummary/StudentSummary';
import EditProfile from './Components/StudentComponents/EditProfile/EditProfile';
import ViewOfferLetter from './Components/StudentComponents/ViewOfferLetter/ViewOfferLetter';
import Login from './ReUseableComponents/Login/Login';
import SignUp from './ReUseableComponents/SignUp/SignUp';
import ChangePassword from './ReUseableComponents/ChangePassword/ChangePassword';
import Dashboard from './Components/HODComponents/DashBoard';
import StudentList from './Components/HODComponents/StudentList';
import ApprovalPage from './Components/HODComponents/ApprovalPage';

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
      },
      {
        path:"/home/changePassowrd",
        element:<ChangePassword/>
      }
    ]
  },
  {
    path:"HODdashboard",
    element:<Dashboard/>
  },
  {
    path:"HODStudentList",
    element:<StudentList/>
  },
  {
    path:"HODApprovalPage",
    element:<ApprovalPage/>
  },
  {
    path:"Login",
    element:<Login/>
  },
  {
    path:"Signup",
    element:<SignUp/>
  }
])

function App() {
  return <RouterProvider router={router} />;
}


export default App;
