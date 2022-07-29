import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import { FriendRequests } from './components/FriendRequests';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { Setting } from './components/Setting';
import { SignUp } from './components/SignUp';
import { PrivateRoute } from './PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="friend-requests" element={<PrivateRoute><FriendRequests /></PrivateRoute>} />
          <Route path="setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
