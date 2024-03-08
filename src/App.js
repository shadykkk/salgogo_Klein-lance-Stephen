import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ExerciseScreen from './Screens/ExerciseScreen';
import TrackerScreen from './Screens/TrackerScreen';
import Settings from './Screens/SettingsScreen';
import SubscriptionScreen from './Screens/SubscriptionScreen';
import ProfileScreen from './Screens/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen'
function App() {
  return (
     

    <Router>
      <div >
        <div >
          <div>
            <Header />
          </div>
          
          <div>
            <Routes>
            <Route path='/settings' element={<Settings/>} />
             <Route path='/subscription' element={<SubscriptionScreen/>} />
             <Route path='/profile' element={<ProfileScreen/>} />
             <Route path='/' element={<RegisterScreen/>} />

              <Route path='/home' element={<HomeScreen/>} />
              <Route path='/exercise' element={<ExerciseScreen/>} />
              <Route path='/tracker' element={<TrackerScreen/>} />



            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
