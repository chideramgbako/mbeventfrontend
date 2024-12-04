import React from "react";
import {
  MdOutlineCalendarMonth,
  MdHelpOutline,
  MdOutlineLogout,
} from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const UserProfileMenu = ({ setIsLoggedIn }) => {
  const links = [
    {
      id: 1,
      content: "Your Events",
      icon: <MdOutlineCalendarMonth className="text-dark" />,
      to: "/your-events",
    },
    {
      id: 2,
      content: "Profile",
      icon: <IoPersonOutline className="text-dark" />,
      to: "/your-events",
    },
    {
      id: 3,
      content: "Help",
      icon: <MdHelpOutline className="text-dark" />,
      to: "/error",
    },
  ];
  const redirect = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("mb-token");
    localStorage.removeItem("user");
    //redirect to login page
    redirect("/login");
  };
  return (
    <div
      className="rounded-2 shadow-lg p-2 bg-white pt-3"
      style={{ width: "210px" }}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            to={link.to}
            className="d-flex gap-2 align-items-center border-bottom border-1 border-secondary-subtle text-decoration-none mb-3 text-secondary pb-2 fs-6"
          >
            {link.icon}
            {link.content}
          </Link>
        );
      })}
      <button
        onClick={handleLogout}
        className="w-100 bg-transparent border-0 d-flex gap-2 align-items-center border-bottom border-1 border-secondary-subtle text-decoration-none mb-3 text-secondary pb-2 fs-6"
      >
        <MdOutlineLogout className="text-danger" />
        logout
      </button>
    </div>
  );
};

export default UserProfileMenu;
