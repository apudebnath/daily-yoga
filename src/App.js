import './App.css';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import Navigation from './components/Shared/Navigation/Navigation';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Services from './components/Services/Services';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import ManageAllOrders from './components/Dashboard/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Payment from './components/Dashboard/Payment/Payment';
import Reviews from './components/Dashboard/Reviews/Reviews';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Purchase from './components/Purchase/Purchase';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Registration/>}></Route>
            <Route path="/purchase/:id" element={<Purchase/>}></Route>
            <Route path="services" element={<PrivateRoute><Services/></PrivateRoute>}></Route>
            <Route path="dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome />}></Route>
              <Route path="addproduct" element={<AdminRoute><AddProduct /></AdminRoute>}></Route>
              <Route path="makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
              <Route path="manageallorders" element={<ManageAllOrders />}></Route>
              <Route path="myorders" element={<MyOrders />}></Route>
              <Route path="payment" element={<Payment />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>

            </Route>
          </Routes> 
      </AuthProvider>
    </div>
  );
}

export default App;