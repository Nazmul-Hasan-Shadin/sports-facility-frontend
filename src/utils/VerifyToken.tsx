import { jwtDecode } from "jwt-decode";


export const VerifyToken = (token) => {
    return jwtDecode(token)
};

