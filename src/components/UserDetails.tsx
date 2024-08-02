import { useLocation, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const navigateToBlogs = () => {
    navigate("/users");
  };

  return (
    <>
      <p onClick={navigateToBlogs}>Back to Users</p>
      <div className="section">
        <div>User ID - {state.user.id} </div>
        <div>Name - {state.user.name} </div>
        <div>User Name - {state.user.username} </div>
        <div>Email id - {state.user.email} </div>
        <div>Phone No - {state.user.phone} </div>
      </div>
      <div className="section">
        <div>
          <b>Address</b>
        </div>
        <div>
          <div>Street - {state.user.address.street} </div>
          <div>Suite - {state.user.address.suite} </div>
          <div>City - {state.user.address.city} </div>
          <div>Zipcode - {state.user.address.zipcode} </div>
        </div>
      </div>
      <div className="section">
        <div>
          <b> Company</b> -
        </div>
        <div>
          <div>Name - {state.user.company.name} </div>
          <div>Catch Phrase - {state.user.company.catchPhrase} </div>
          <div>Bs - {state.user.company.bs} </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
