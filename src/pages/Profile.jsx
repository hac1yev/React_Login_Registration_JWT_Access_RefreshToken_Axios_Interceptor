import { Link, Outlet, useNavigate } from "react-router-dom";
import useSignOut from "../hooks/useSignOut";

const Profile = () => {
    const logOut = useSignOut();
    const navigation = useNavigate();

    const signOut = async () => {
      await logOut();
      navigation('/login', { replace: true });
    };

    return (
      <div className="d-flex justify-content-center">
        <div className="container profile-container">
          <div className="row">
            <div className="col-lg-4">
              <Link to='/profile/editors'>Editors</Link>
              <Link to='/profile/favorites'>Favorites</Link>
              <Link to='/profile/admins'>Admins</Link>
              <button onClick={signOut} className="sign-out-button">Sign Out</button>
            </div>
            <div className="col-md-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Profile