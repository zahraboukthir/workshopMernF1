
import './App.css';
import NavigationBar from './Components/NavBar/NavigationBar';
import { Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import SignIn from './Components/authForms/SignIn';
import SignUp from './Components/authForms/SignUp';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getuser } from './js/actions/authActions';
import PrivateRoute from './Components/PrivateRoute';
import DachboardClient from './Components/PrivateRoute/Dashboards/DachboardClient';

import Dashboard from './Components/PrivateRoute/Saler/Dashboard';
import Orders from './Components/PrivateRoute/Saler/Orders';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getuser())

  }, [])
  
  return (
    <div className="App">
      <NavigationBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/dhbClient' element={

  <PrivateRoute>
    <DachboardClient/>
  </PrivateRoute>
}/>
<Route path='/dhbSaler' element={

<PrivateRoute>
<Dashboard/>
</PrivateRoute>
}/>
<Route path="/dhbSaler/order" element={

<PrivateRoute>
<Orders/>
</PrivateRoute>
}/>

</Routes>
    </div>
  );
}

export default App;
