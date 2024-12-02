import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Register from "./pages/Register"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import Authors from "./pages/Authors"
import AuthorPosts from "./pages/AuthorPosts"
import CreatePost from "./pages/CreatePosts"
import EditPost from "./pages/EditPost"
import CategoryPosts from "./pages/CategoryPosts"
import Dashboard from "./pages/Dashboard"
import Logout from "./pages/Logout"





const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <ErrorPage/>, 
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "register/:id", element: <Register />},
      {path: "login/:id", element: <Login />},
      {path: "profile/:id", element: <UserProfile />},
      {path: "authors/:id", element: <Authors />},
      {path: "create/:id", element: <CreatePost />},
      {path: "posts/:id/edit", element: <EditPost />},
      {path: "posts/:categories/:category", element: <CategoryPosts />},
      {path: "posts/users/:id", element: <AuthorPosts />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "logout", element: <Logout />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
);

