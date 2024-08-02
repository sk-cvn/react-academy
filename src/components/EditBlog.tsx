import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const EditBlog = () => {
  const navigate = useNavigate();
  const [loaderStatus, setLoaderStatus] = useState(false);

  const { state } = useLocation();

  const navigateToBlogs = () => {
    navigate("/blogs");
  };

  const editBlog = () => {
    setLoaderStatus(true);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${state.blog.id}`, {
        title: "test",
        body: "test",
      })
      .then((_) => {
        setLoaderStatus(false);
        navigateToBlogs();
      })
      .catch((error) => {
        console.error(error);
        setLoaderStatus(false);
      });
  };

  return (
    <>
      <Loader status={loaderStatus} />
      <div onClick={navigateToBlogs}>Back to blogs</div>
      <div className="create-form">
        <p>Blog Id - {state.blog.id} </p>
        <div className="form-field">
          <TextField
            id="outlined-basic"
            label="Blog Title"
            variant="outlined"
            defaultValue={state.blog.title}
            required
          />
        </div>
        <div className="form-field">
          <TextField
            id="outlined-basic"
            label="Blog Content"
            variant="outlined"
            multiline
            minRows={5}
            defaultValue={state.blog.body}
            required
          />
        </div>
      </div>
      <div className="align-right action-btns">
        <Button variant="text" onClick={navigateToBlogs}>
          Cancel
        </Button>
        <Button variant="contained" onClick={editBlog}>
          Update Blog
        </Button>
      </div>
    </>
  );
};

export default EditBlog;
