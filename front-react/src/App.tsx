import MainPage from './components/pages/MainPage'
import LoginPage from './components/pages/LoginPage'
import NotFoundPage from './components/pages/NotFoundPage'
import ProtectedPage from './components/pages/ProtectedPage'
import AboutPage from './components/pages/AboutPage'
import SchedulePage from './components/pages/SchedulePage'
import RegistrationPage from './components/pages/RegistrationPage'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './consts/routes'


function App() {

  return (
    <Routes>
      <Route path={AppRoutes.HOME.value} Component={MainPage}/>
      <Route path={AppRoutes.LOGIN.value} Component={LoginPage}/>
      <Route path={AppRoutes.REGISTRATION.value} Component={RegistrationPage} />
      <Route path={AppRoutes.SCHEDULES.value} element={
        <ProtectedPage>
          <SchedulePage/>
        </ProtectedPage>}/>

       <Route path={AppRoutes.ABOUT.value} Component={AboutPage} />
      <Route path='*' Component={NotFoundPage}/>
    </Routes>
  )
}

export default App
