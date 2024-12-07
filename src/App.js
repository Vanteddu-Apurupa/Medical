import Login from './components/Signin';
import Home from './components/Home';

import { Routes, Route, BrowserRouter,HashRouter} from 'react-router-dom'
import Register from './components/Signup';
import Admin from './components/admin';
import Pharmacist from './components/pharmacist';
import Home1 from './components/Home1';
import AddD from './components/AddDoctor';
import Dlog from './components/dlog';
import Dview from './components/viewdoc';
import ViewU from './components/viewuser.js';
import Pdoc from './components/Pdoc.js';
import AppointmentD from './components/AppointmentD.js';
import DHome from './components/DHome.js';
import AppointmentDtoP from './components/AppointmentsDtoP.js';

















//first letter captail
function App() {
  function Page(){
    return (
      <div>
        <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/log" element={<Login />}/>  
          <Route path="/reg" element={<Register />}/>  
          <Route path="/admin" element={<Admin />}/>  
          <Route path="/pha" element={<Pharmacist />}/> 
          <Route path="/home1" element={<Home1 />}/>  
          <Route path="/addD" element={<AddD />}/>  
          <Route path="/dlog" element={<Dlog />}/>  
          <Route path="/doctors" element={<Dview />}/>  
          <Route path="/patients" element={<ViewU />}/>  
          <Route path="/pdoc" element={<Pdoc />}/> 
          <Route path="/appointmentsD" element={<AppointmentD />}/> 
          <Route path="/drhome" element={<DHome />}/> 
          <Route path="/appointmentsDtoP" element={<AppointmentDtoP />}/> 


        </Routes>
        </HashRouter>
      </div>
    );
  }
//   function Page(){
//     switch(store.getState().NavRuducer){
//       case ("Home"):
//         return (<div><Home /></div>) 
//       case ("Home1"):
//           return (<div><Home1 /></div>) 
//       case ("Login"):
//             return (<div><Login/></div>) 
//       case ("Register"):
//               return (<div><Register/></div>) 
//       case ("Chpa"):
//                 return (<div><Chpa/></div>) 

//   }
// }
  return (
    
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
