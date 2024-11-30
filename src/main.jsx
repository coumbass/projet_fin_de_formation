import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { Login } from './pages/Login.jsx';
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./pages/CourseDetails";
import CourseCatalog from "./pages/CourseCatalog";
import CourseDetail from "./pages/CourseDetail";
import CourseOverview from "./pages/CourseOverview";
import ChatInterface from "./pages/ChatInterface";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses/details" element={<CourseDetails />} />
      <Route path="/courses/catalog" element={<CourseCatalog />} />
      <Route path="/courses/detail" element={<CourseDetail />} />
      <Route path="/courses/overview" element={<CourseOverview />} />
      <Route path="/chat" element={<ChatInterface />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signout" element={<SignOut />} />
    </Routes>
  </Router>
);
