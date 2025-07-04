import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Authorization from '../../pages/Authorization/Authorization'
import Registration from '../../pages/Registration/Registration'
import HomePage from '../../pages/HomePage/HomePage'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import UserProfile from '../../pages/UserProfile/UserProfile';
import '../../styles/App.css'


function App() {
 return (
    <div className='App'>
      <nav className='container'>
        <Link to='/'>Главная</Link>
        <Link to='login'>Авторизация</Link>
        <Link to='register'>Регистрация</Link>
        <Link to='/user'>Личный кабинет</Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Authorization/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/user' element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
        <Route path='*' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
