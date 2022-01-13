import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from '../pages/Home';

import { AuthContextProvider } from '../contexts/AuthContext'

export const Router = () => {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}