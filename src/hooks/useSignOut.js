import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { authSliceAction } from "../store/auth-slice";

const useSignOut = () => {
    const dispatch = useDispatch();

    const logOut = async () => {
        dispatch(authSliceAction.logOut());

        await axios.get('/logout', {
            withCredentials: true
        });
    }

    return logOut
};

export default useSignOut;