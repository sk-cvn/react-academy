import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const handleItemSelection = (data: User) => {
    navigate("/users/details", { state: { user: data } });
  };

  const getShowStatus = () => {
    return Boolean(!users.length) ? (
      <p>No Data fount</p>
    ) : (
      <UserList
        items={users}
        onSelectItem={(data) => handleItemSelection(data)}
      />
    );
  };

  useEffect(() => {
    setLoaderStatus(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoaderStatus(false);
      })
      .catch((error) => {
        console.error(error);
        setLoaderStatus(false);
      });
  }, []);

  return (
    <>
      <Loader status={loaderStatus} />
      <h1> Users </h1>
      {getShowStatus()}
    </>
  );
};

export default Users;
