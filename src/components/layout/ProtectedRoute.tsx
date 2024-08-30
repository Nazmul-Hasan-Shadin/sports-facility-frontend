import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut, selectCurrentToken } from "../../redux/feature/auth/authSlice";
import { VerifyToken } from "../../utils/VerifyToken";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();
  let user;

  if (token) {
    user = VerifyToken(token);
  }

  console.log(user, "iam user bro");

  if (!user) {
    if (token) {
      dispatch(logOut());
      return <Navigate to="/login" replace={true} />;
    }

    return <Navigate to="/login" replace={true} />;
  }

  // Check for role mismatch
  if (role !== undefined && role !== user.role) {
    dispatch(logOut());
    return <Navigate to="/unauthorized" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
