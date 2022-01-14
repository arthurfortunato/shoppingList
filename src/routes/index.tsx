import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from '../pages/Home';
import { ShoppingList } from '../pages/List';
import { NewList } from '../pages/NewList';
import { UserLists } from '../pages/UserLists';

import { AuthContextProvider } from '../contexts/AuthContext'
import { ListsContextProvider } from '../contexts/ListContext';

export const Router = () => {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ListsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lists/" element={<UserLists />} />
            <Route path="/lists/new" element={<NewList />} />
            <Route path="/lists/:listId" element={<ShoppingList />} />
          </Routes>
        </ListsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}