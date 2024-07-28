import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";
import Loader from "./Loader";

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

  useEffect(() => {
    setLoaderStatus(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoaderStatus(false);
      })
      .catch((error) => {
        console.error(error);
        setLoaderStatus(false);
      });
  }, []);

  const handleItemSelection = (data: Post) => {
    navigate("/details", { state: { blog: data } });
  };

  return (
    <>
      <Loader status={loaderStatus} />
      <List
        heading="Blogs"
        items={posts}
        onSelectItem={(data) => handleItemSelection(data)}
      />
    </>
  );
};

export default Blogs;
