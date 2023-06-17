import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

/**
 * Checks the user login status with refresh token
 * Redirects user to the homepage
 * Credits- CI's Moments walthrough 
 */
export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async() => {
            try{
                await axios.post('/dj-rest-auth/token/refresh/');
                 // if user is logged in, the code below will run
        if (userAuthStatus === "loggedIn") {
            history.push("/");
          }
            }catch(err){
                 // if user is not logged in, the code below will run
        if (userAuthStatus === "loggedOut") {
            history.push("/");
          }
            }
        };
        handleMount();
    }, [history, userAuthStatus]);
}