import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { authSliceAction } from "../store/auth-slice";

const useRefreshToken = () => {
    const dispath = useDispatch();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });

        dispath(authSliceAction.getRefreshToken({ 
            accessToken: response.data.accessToken, 
            roles: response.data.roles 
        }));
        return response.data.accessToken;
    };

    return refresh;
};

export default useRefreshToken;