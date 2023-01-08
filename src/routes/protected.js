import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedPage({
    children,
    needLogin = false,
    guestOnly = false,
}) {
    let navigate = useNavigate();
    const accSelector = useSelector((state) => state.auth);

    useEffect(() => {
        if(needLogin && !accSelector?.id) {
            return navigate("/login", {replace: true});
        }

        if(guestOnly && accSelector.id) {
            return navigate("/", {replace: true});
        }
        
    }, []);

    return children;
}

export default ProtectedPage;