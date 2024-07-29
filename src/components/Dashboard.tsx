import { Component, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Error from "./Error";
import BlogDetails from "./BlogDetails";
import Users from "./Users";
import UserDetails from "./UserDetails";
import EditBlog from "./EditBlog";
import CreateBlog from "./CreateBlog";

class Dashboard extends Component {
  render(): ReactNode {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/details" element={<BlogDetails />} />
              <Route path="blogs/edit" element={<EditBlog />} />
              <Route path="blogs/create" element={<CreateBlog />} />

              <Route path="users" element={<Users />} />
              <Route path="users/details" element={<UserDetails />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Dashboard;
