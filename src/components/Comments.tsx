import { useState } from "react";
import { Comment } from "./BlogDetails";

interface CommentsProps {
  items: Comment[];
}

const Comments = ({ items }: CommentsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  if (items.length)
    return (
      <>
        <h3> Comments</h3>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={
                selectedIndex === index
                  ? "active list-group-item"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <h5>Title - {item.name}</h5>
              <p> Description - {item.body} </p>
              <p>by - {item.email} </p>
            </li>
          ))}
        </ul>
      </>
    );
  else return <p>No Data fount</p>;
};

export default Comments;
