import React, { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogOutIcon = () => {
  const { logout } = useContext(AuthContext); // Виклик функції logout з контексту
  const navigate = useNavigate(); // Для переадресації користувача після логування

  const handleLogout = () => {
    logout(); // Виклик функції logout з контексту
    navigate("/"); // Переадресація на сторінку логіну
  };

  return (
    <a href="#" onClick={handleLogout}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path d="M16 13V11H7V8L2 12L7 16V13H16Z" fill="black" />
          <path
            d="M20 3H11C9.897 3 9 3.897 9 5V9H11V5H20V19H11V15H9V19C9 20.103 9.897 21 11 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3Z"
            fill="black"
          />
        </g>
      </svg>
      Log Out
    </a>
  );
};

export default LogOutIcon;
