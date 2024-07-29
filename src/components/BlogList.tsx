import { Fragment } from "react/jsx-runtime";
import { Post } from "./Blogs";
import "./BlogList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNote from "@mui/icons-material/EditNote";

interface ListGroupProps {
  items: Post[];
  heading: string;
  onSelectItem: (item: Post) => void;
  onDeleteItem: (item: Post) => void;
  onEditItem: (item: Post) => void;
}

function BlogList({
  items,
  heading,
  onSelectItem,
  onDeleteItem,
  onEditItem,
}: ListGroupProps) {
  const getMessage = () => {
    return items.length === 0 && <p>No Data fount</p>;
  };

  return (
    <Fragment>
      <h1> {heading} </h1>
      {getMessage()}
      <div className="list row">
        {items.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-12" key={item.id}>
            <div className="card">
              <div
                className="card-body"
                onClick={() => {
                  onSelectItem(item);
                }}
              >
                <h5 className="card-title ">{item.title}</h5>
                <p className="card-text">{item.body}</p>
              </div>
              <div className="card-body align-right">
                <EditNote onClick={() => onEditItem(item)} />
                <DeleteIcon onClick={() => onDeleteItem(item)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default BlogList;
