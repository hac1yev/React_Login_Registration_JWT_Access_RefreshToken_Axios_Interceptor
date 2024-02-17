import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceAction } from "../store/auth-slice";

const Users = () => {
    const [users,setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
    
        const fetchUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                const userNames = response.data.map((user) => user.username);
    
                isMounted && setUsers(userNames);
            } catch (error) {
                dispatch(authSliceAction.getExpiredRefresh(true));
                navigate('/login', { state: { from: location }, replace: true });
            }
        };
    
        fetchUsers();
    
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);
    

    return (
        <article>
            <h2>Users List</h2>
            {users?.length > 0
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    );
};

export default Users;