import React from 'react'
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function ProtectedRoute({ children }) {
  const user = useMemo(() => localStorage.getItem("user"), []);
  const navigate = useNavigate();
  console.log('Protected route check here') 

  if (!user) {
    navigate("/login");
  }

  return <>{children}</>;
}

export default ProtectedRoute