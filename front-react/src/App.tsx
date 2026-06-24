import MainPage from './components/pages/MainPage'
import LoginPage from './components/pages/LoginPage'
import NotFoundPage from './components/pages/NotFoundPage'
import ProtectedPage from './components/pages/ProtectedPage'
import AboutPage from './components/pages/AboutPage'
import SchedulePage from './components/pages/SchedulePage'
import RegistrationPage from './components/pages/RegistrationPage'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './consts/routes'
import { theme } from './consts/colorsTheme'
import { ThemeProvider } from '@mui/material'
import AdministratorPage from './components/pages/AdministratorPage'
import ScheduleContextProvider from './contexts/scheduleContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScheduleContextProvider>
        <Routes>
          <Route path={AppRoutes.HOME.value} Component={MainPage} />
          <Route path={AppRoutes.LOGIN.value} Component={LoginPage} />
          <Route path={AppRoutes.REGISTRATION.value} Component={RegistrationPage} />
          <Route path={AppRoutes.SCHEDULES.value} element={
            <ProtectedPage roleName={AppRoutes.SCHEDULES.role}>
              <SchedulePage />
            </ProtectedPage>}
          />
          <Route path={AppRoutes.ADMINISTRATION.value} element={
            <ProtectedPage roleName={AppRoutes.ADMINISTRATION.role} >
              <AdministratorPage />
            </ProtectedPage>}
          />
          <Route path={AppRoutes.ABOUT.value} Component={AboutPage} />
          <Route path='*' Component={NotFoundPage}/>
        </Routes>
      </ScheduleContextProvider>
    </ThemeProvider>
  )
}

export default App
