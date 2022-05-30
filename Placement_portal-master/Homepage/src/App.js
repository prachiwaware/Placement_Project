import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar/Navbar';
import Placement from './components/PlacementHistory/Placement'
import NavbarTop from './components/InterviewPreparation/InterviewPrep'
// import Drawer from './components/AdminLogin/navbar'
// import Create from './components/AdminLogin/create';
// import Edit from './components/AdminLogin/edit';
// import RecordList from './components/AdminLogin/recordList';
import Maincontent from './components/LandingPage/Maincontent';
//import Login from './components/AdminLogin/Login';
import Signup from './components/InterviewExperience/Signup';
import Login from './components/InterviewExperience/Login';
import AddExp from './components/InterviewExperience/AddExp';
import Experience from './components/InterviewExperience/Experience';
import Display from './components/InterviewExperience/Display';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Navbar />}></Route>
          <Route exact path='/statastics' element={<Placement/>}> </Route>
          <Route exact path='/interviewprep' element={<NavbarTop/>}></Route>
          <Route exact path="/home" element={<Maincontent/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/addexperience' element={<AddExp/>}></Route>
          <Route exact path="/interviewexperience" element={<Experience/>}></Route>
          <Route exact path="/display/:name" element={<Display/>}></Route>
        </Routes>       
      </div>
    </Router>
  );
}
export default App;
