import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [loaderStatus, setLoaderStatus] = useState(false);

  const navigateToBlogs = () => {
    navigate("/blogs");
  };

  const editBlog = () => {
    setLoaderStatus(true);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
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
        <div className="form-field">
          <TextField
            id="outlined-basic"
            label="Blog Title"
            variant="outlined"
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
            required
          />
        </div>
      </div>

      <div className="align-right action-btns">
        <Button variant="text" onClick={navigateToBlogs}>
          Cancel
        </Button>
        <Button variant="contained" onClick={editBlog}>
          Create Blog
        </Button>
      </div>
    </>
  );
};

export default CreateBlog;
