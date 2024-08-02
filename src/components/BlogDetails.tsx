import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Comments from "./Comments";
import Loader from "./Loader";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const BlogDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const navigateToBlogs = () => {
    navigate("/blogs");
  };

  useEffect(() => {
    setLoaderStatus(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${state.blog.id}/comments`
    )
      .then((response) => response.json())
      .then((json: Comment[]) => {
        setComments(json);
        setLoaderStatus(false);
      })
      .catch((error) => {
        console.error(error);
        setLoaderStatus(false);
      });
  }, []);

  return (
    <>
      <div onClick={navigateToBlogs}>Back to blogs</div>
      <h1>{state.blog.title}</h1>
      <p>{state.blog.body}</p>
      <Loader status={loaderStatus} />
      <Comments items={comments} />
    </>
  );
};

export default BlogDetails;
