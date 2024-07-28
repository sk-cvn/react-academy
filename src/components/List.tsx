import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Post } from "./Blogs";

interface ListGroupProps {
  items: Post[];
  heading: string;
  onSelectItem: (item: Post) => void;
}

function List({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No Data fount</p>;
  };

  return (
    <Fragment>
      <h1> {heading} </h1>
      {getMessage()}
      <ul className="list-group row">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={
              selectedIndex === index
                ? "active list-group-item"
                : "list-group-item col-md-4"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <br />
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default List;
