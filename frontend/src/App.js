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
import TPODashboard from './Components/TPOComponents/TPODashboard';
import StudentDetails from './Components/TPOComponents/StudentDetails';
import PlacementHistory from './Components/TPOComponents/PlacementHistory';
import Statistics from './Components/TPOComponents/Statistics';
import UploadDrive from './Components/TPOComponents/UploadDrive';
import CompanyViewPage from './Components/TPOComponents/CompanyViewPage';

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
    ]
  },
  {
    path:"/HOD",
    children:[
      {
        path:"/HOD/Dashboard",
        element:<Dashboard/>
      },
      {
        path:"/HOD/StudentList",
        element:<StudentList/>
      },
      {
        path:"/HOD/ApprovalPage",
        element:<ApprovalPage/>
      },
    ]
  },
  {
    path:"/TPO",
    children:[
      {
        path:"/TPO/Dashboard",
        element:<TPODashboard/>
      },
      {
        path:"/TPO/StudentDetails",
        element:<StudentDetails/>
      },
      {
        path:"/TPO/PlacementHistory",
        element:<PlacementHistory/>
      },
      { 
        path:"/TPO/Statistics",
        element:<Statistics/>
      },
      {
        path:"/TPO/UploadDrive",
        element:<UploadDrive/>
      },
      {
        path:"/TPO/CompanyViewPage",
        element:<CompanyViewPage/>
      }
    ]
  },
  {
    path:"Login",
    element:<Login/>
  },
  {
    path:"Signup",
    element:<SignUp/>
  },
  {
    path:"ChangePassword",
    element:<ChangePassword/>
  }
])

function App() {
  return <RouterProvider router={router} />;
}


export default App;
