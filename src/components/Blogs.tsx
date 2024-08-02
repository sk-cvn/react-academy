import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BlogList from "./BlogList";
import Loader from "./Loader";
import { Pagination } from "@mui/material";
import { AddComment } from "@mui/icons-material";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blogs = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    setLoaderStatus(true);
    getPost();
  }, []);

  const getPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoaderStatus(false);
        setPostPerPage(10);
      })
      .catch((error) => {
        console.error(error);
        setLoaderStatus(false);
      });
  };

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const handlePostSelection = (data: Post) => {
    navigate("/blogs/details", { state: { blog: data } });
  };

  const handlePostUpdate = (data: Post) => {
    navigate("/blogs/edit", { state: { blog: data } });
  };

  const createNewBlog = () => {
    navigate("/blogs/create");
  };

  const handlePostDeletion = (data: Post) => {
    setLoaderStatus(true);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
      .then((_) => {
        getPost();
        setLoaderStatus(false);
      })
      .catch((error) => {
        console.error(error);
        setLoaderStatus(false);
      });
  };

  const getPageCount = () => {
    return Math.ceil(posts.length / 10);
  };

  const getPagination = () => {
    return (
      posts.length != 0 && (
        <Pagination
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          count={getPageCount()}
          page={currentPage}
          onChange={(_, val) => updateCurrentPage(val)}
        />
      )
    );
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

  return (
    <>
      <Loader status={loaderStatus} />
      <div className="align-right add-post">
        <AddComment onClick={createNewBlog} sx={{ fontSize: 40 }} />
      </div>
      <BlogList
        heading="Blogs"
        items={currentPosts}
        onSelectItem={(data) => handlePostSelection(data)}
        onDeleteItem={(data) => handlePostDeletion(data)}
        onEditItem={(data) => handlePostUpdate(data)}
      />
      {getPagination()}
    </>
  );
};

export default Blogs;
