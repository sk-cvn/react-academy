import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BlogList from "./BlogList";
import Loader from "./Loader";
import { Pagination } from "@mui/material";

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
  }, []);

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  }

  const handleItemSelection = (data: Post) => {
    navigate("/blogs/details", { state: { blog: data } });
  };

  const getPageCount = () => {
    return Math.ceil(posts.length / 10);
  }

  const getPagination = () => {
    return posts.length != 0 && <Pagination variant="outlined" shape="rounded" showFirstButton showLastButton count={getPageCount()} page={currentPage} onChange={(_, val) => updateCurrentPage(val)} />
  }

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

  return (
    <>
      <Loader status={loaderStatus} />
      <BlogList
        heading="Blogs"
        items={currentPosts}
        onSelectItem={(data) => handleItemSelection(data)}
      />
      {getPagination()}

    </>
  );
};

export default Blogs;
