import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from '../pages/Home';
import { List } from '../pages/List';
import { NewList } from '../pages/NewList';

import { AuthContextProvider } from '../contexts/AuthContext'

export const Router = () => {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists/:id" element={<List />} />
          <Route path="/lists/new" element={<NewList />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}