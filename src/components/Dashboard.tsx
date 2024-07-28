import { Component, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Error from "./Error";
import PostDetails from "./PostDetails";

class Dashboard extends Component {
  render(): ReactNode {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="details" element={<PostDetails />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Dashboard;
