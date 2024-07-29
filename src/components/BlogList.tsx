import { Fragment } from "react/jsx-runtime";
import { Post } from "./Blogs";
import './BlogList.css'

interface ListGroupProps {
  items: Post[];
  heading: string;
  onSelectItem: (item: Post) => void;
}

function BlogList({ items, heading, onSelectItem }: ListGroupProps) {

  const getMessage = () => {
    return items.length === 0 && <p>No Data fount</p>;
  };


  return (
    <Fragment>
      <h1> {heading} </h1>
      {getMessage()}
      <div className="list row">
        {
          items.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-12" key={item.id} onClick={() => {
              onSelectItem(item);
            }}>
              <div className="card " >
                <div className="card-body">
                  <h5 className="card-title ">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </Fragment>
  );
}

export default BlogList;
