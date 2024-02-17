import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom"; 
import PropTypes from 'prop-types';

const RequireAuth = ({ allowedRoles }) => {
    const auth = useSelector(state => state.authReducer.auth);
    const expiredRefresh = useSelector(state => state.authReducer.expiredRefresh);
    const location = useLocation();

    return (
        <>
            {!auth?.roles
                ? <Navigate to='/login' state={{ from: location }} replace />
                : auth?.roles?.find(role => allowedRoles.includes(role)) && !expiredRefresh
                    ? <Outlet />
                    : !auth?.roles?.find(role => allowedRoles.includes(role)) && !expiredRefresh
                        ? <Navigate to='/unauthorized' state={{ from: location }} replace />
                        : expiredRefresh && <Navigate to='/login' state={{ from: location }} replace />
            }
        </>
    );
};

RequireAuth.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default RequireAuth;