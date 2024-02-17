import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
    const [isLoading,setIsLoading] = useState(true);
    const auth = useSelector(state => state.authReducer.auth);
    const persist = useSelector(state => state.authReducer.persist);

    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.error(error);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [])

    return (
        <>
            {!persist
                ? <Outlet /> 
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    );
};

export default PersistLogin;