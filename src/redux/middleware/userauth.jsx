import { axiosInstance } from "../../config/config";
import account_types from "../auth/types";

export function accountLogin(values) {
    return async function (dispatch) {
        try {
            const res = await axiosInstance.get("/accounts/", {params: values});
            const accountData = res.data[0];

            if(accountData) {
                dispatch({
                    type: account_types.ACC_LOGIN,
                    payload: accountData
                });
                localStorage.setItem("user_data", JSON.stringify(accountData))

                return {status: true, data: accountData};
            }
            return {status: false, data: {}};
        }
        catch (err) {
            console.log(err)
            return {status: false, data: {}};
        }
    }
}