import React, { useState } from 'react'
// import { Link, useHistory } from "react-router-dom";
// import { Title, ButtonWord } from "../../UtilityComponents/index"
// import { FlexContainer } from "../index"
// import { useDispatch, useSelector } from 'react-redux';
import "./sidebar.css"
// import { logout } from '../../../actions/userActions';

const Sidebar = (props) => {

  // const history = useHistory()

  // const header_styles = {
  //   gridArea: "header",
  //   backgroundColor: "#333333",
  //   color: "#ffffff",
  //   display: "flex",
  //   alignItems: "center",
  //   padding: "15px",
  //   listStyleType: "none",
  //   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  //   position: "fixed",
  //   right: "0",
  //   left: "0",
  //   zIndex: "999"
  // }

  // const cart = useSelector(state => state.cart);

  // const { cartItems } = cart;

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch(logout());
  //   closeMenu()
  //   history.push("/login");

  // }

  // const icon_styles = {
  //   position: "absolute",
  //   right: "10px",
  //   top: "8px",
  //   "-webkitTransform": "rotate(-180deg)"
  // }

  return (
    <aside className="sidebar">

    </aside>

  );
}

export default Sidebar;
