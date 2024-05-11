import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import Authorization from './components/Authorization.jsx';
import Notifications from './components/Notifications.jsx';
import Messages from './components/Messages.jsx';
import Profile from './components/Profile.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
import Notification from './components/Notification.jsx';
import Logo from './components/Logo.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Feed from './components/Feed.jsx';
import Message from './components/Message.jsx';
import MessageInput from './components/Message-Input.jsx';
import Post from './components/Post.jsx';
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

Modal.setAppElement('#root');

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Notifications" element={<Notifications />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Authorization" element={<Authorization />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/Register" element={<SignupForm />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Message" element={<Message />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Logo" element={<Logo />} />
      <Route path="/Feed" element={<Feed />} />
      <Route path="/MessageInput" element={<MessageInput />} />
      <Route path="/Post" element={<Post />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(<Root />);
