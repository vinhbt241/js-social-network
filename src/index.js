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
import { Profile } from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="friend-requests" element={<FriendRequests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
