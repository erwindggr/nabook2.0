import { useEffect } from "react";
import { useDispatch } from "react-redux";
import account_types from "../redux/auth/types";

const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const fetchData = () => {
        const savedDataUser = localStorage.getItem("user_data");
        if(savedDataUser) {
            const parseDataUser = JSON.parse(savedDataUser);

            dispatch({
                type: account_types.ACC_LOGIN,
                payload: parseDataUser,
            });
        }
    };

    useEffect(()=> {
        fetchData();
    }, []);

    return children;
}

export default AuthProvider;