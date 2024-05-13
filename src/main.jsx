// import React from 'react'
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
// import './styles/index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";

//needed!!
import Notifications from "./components/Notifications.jsx";
import Messages from "./components/Messages.jsx";
import Profile from "./components/Profile.jsx";
import Authorization from "./components/Authorization.jsx";

// not needed, just for checking
import Notification from "./components/Notification.jsx";
import Logo from "./components/Logo.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Feed from "./components/Feed.jsx";
import Message from "./components/Message.jsx";
import MessageInput from "./components/Message-Input.jsx";
import Post from "./components/Post.jsx";
import Modal from "react-modal";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

Modal.setAppElement("#root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "team",
        element: <Header />,
      },
    ],
  },

  {
    path: "/Notifications",
    element: <Notifications />,
  },
  {
    path: "/Messages",
    element: <Messages />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Authorization",
    element: <Authorization />,
  },

  // just for checking, not necessdasdarry - ok got it
  {
    path: "/Notification",
    element: <Notification />,
  },
  {
    path: "/Message",
    element: <Message />,
  },

  {
    path: "/Header",
    element: <Header />,
  },
  {
    path: "/Footer",
    element: <Footer />,
  },

  {
    path: "/Logo",
    element: <Logo />,
  },
  {
    path: "/Feed",
    element: <Feed />,
  },

  {
    path: "/MessageInput",
    element: <MessageInput />,
  },
  {
    path: "/Post",
    element: <Post />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
