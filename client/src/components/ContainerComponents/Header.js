import React, { useState, useEffect } from 'react'
// import { Link, useHistory } from "react-router-dom";
import { Title, ButtonWord, ButtonSymbol } from "../UtilityComponents/index"
// import { FlexContainer } from "./index"
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../actions/userActions';

const Header = (props) => {

  // const history = useHistory()

  const header_styles = {
    gridArea: "header",
    backgroundColor: "#55678a",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "15px",
    listStyleType: "none",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    position: "fixed",
    right: "0",
    left: "0",
    zIndex: "999",
    top: "0"
  }

  // const dispatch = useDispatch();

  const openMenu = () => {
    const sidebar = document.querySelector(".sidebar")
    console.log(sidebar.classList.value)
    if (sidebar.classList.value === "sidebar open") {
      document.querySelector(".sidebar").classList.remove("open");
    }
    else if (sidebar.classList.value === "sidebar") {
      document.querySelector(".sidebar").classList.add("open");
    }

  }


  const [show_hide_create_note_state, set_show_hide_create_note_state] = useState({
    name: "Create New Note",
    display: "none"
  })
  const [show_hide_master_state, set_show_hide_master_state] = useState({
    name: "Hide Todo Master",
    display: "block"
  })
  const [show_hide_dump_state, set_show_hide_dump_state] = useState({
    name: "Hide Todo Dump",
    display: "block"
  })

  const [show_hide_notes_state, set_show_hide_notes_state] = useState({
    name: "Show Notes",
    display: "block"
  })

  const [show_hide_calender_state, set_show_hide_calender_state] = useState({
    name: "Hide Calender",
    display: "block"
  })

  const show_hide_calender = () => {
    console.log("show_hide_calender")

    if (show_hide_calender_state.display === "none") {
      set_show_hide_calender_state({ ...show_hide_calender_state, name: "Hide Todo Calender", display: "block" })
    }
    else if (show_hide_calender_state.display === "block") {
      set_show_hide_calender_state({ ...show_hide_calender_state, name: "Show Todo Calender", display: "none" })
    }
  }

  const show_hide_master = () => {
    console.log("show_hide_master")

    if (show_hide_master_state.display === "none") {
      set_show_hide_master_state({ ...show_hide_master_state, name: "Hide Todo Master", display: "block" })
    }
    else if (show_hide_master_state.display === "block") {
      set_show_hide_master_state({ ...show_hide_master_state, name: "Show Todo Master", display: "none" })
    }
  }


  const [sidebar_state, set_sidebar_state] = useState(false)

  const show_hide_notes = () => {
    if (sidebar_state) {
      document.querySelector(".note_container").classList.remove("open");
      set_sidebar_state(false)
      set_show_hide_notes_state({ ...show_hide_notes_state, name: "Show Notes", display: "none" })

    }
    else {
      document.querySelector(".note_container").classList.add("open");
      set_sidebar_state(true)
      set_show_hide_notes_state({ ...show_hide_notes_state, name: "Hide Notes", display: "block" })
    }
  }

  const show_hide_dump = () => {

    if (show_hide_dump_state.display === "none") {
      set_show_hide_dump_state({ ...show_hide_dump_state, name: "Hide Todo Dump", display: "block" })
    }
    else if (show_hide_dump_state.display === "block") {
      set_show_hide_dump_state({ ...show_hide_dump_state, name: "Show Todo Dump", display: "none" })
    }
  }

  const [note_state, set_note_state] = useState({
    title: "",
    body: "",
    folder_id: "",
    list_id: "Dump",
    priority: "Low",
    category_id: "",
    scheduled: false,
    scheduled_date: "",
    scheduled_time: "",
    completed: false,
    date_created: "",
    date_modified: "",
  })

  const show_create_note_container = () => {
    if (show_hide_create_note_state.display === "none") {
      // set_create_note_state("block")
      set_show_hide_create_note_state({ ...show_hide_create_note_state, name: "Hide New Note", display: "block" })
      // set_new_note_button_state("Discard Changes")
      set_note_state({
        title: "",
        body: "",
        folder_id: "",
        list_id: "Dump",
        priority: "Low",
        category_id: "",
        scheduled: false,
        scheduled_date: "",
        scheduled_time: "",
        completed: false,
        date_created: "",
        date_modified: "",
      })
      document.querySelector(".title_field").defaultValue = ""
      document.querySelector(".text_field").defaultValue = ""
      document.querySelector(".priority_input").defaultValue = "Low"
      document.querySelector(".list_id_input").defaultValue = "Dump"
      document.querySelector(".folder_id_input").defaultValue = ""
      document.querySelector("#checkbox_input").checked = false
    }
    else if (show_hide_create_note_state.display === "block") {
      set_show_hide_create_note_state({ ...show_hide_create_note_state, name: "Create New Note", display: "none" })
      // set_create_note_state("none")
      // set_new_note_button_state("New Note")
    }
  }

  return (
    <header style={header_styles} id="overlay">
      <Title styles={{ margin: "0px", fontSize: "50px" }}>TheList</Title>
      <ButtonWord styles={{ margin: "20px" }} on_click_function={openMenu} >{show_hide_notes_state.name}</ButtonWord>
      <ButtonWord styles={{ margin: "20px" }} on_click_function={show_create_note_container} >{show_hide_create_note_state.name}</ButtonWord>
      <ButtonWord styles={{ margin: "20px" }} on_click_function={show_hide_master} >{show_hide_master_state.name}</ButtonWord>
      <ButtonWord styles={{ margin: "20px" }} on_click_function={show_hide_dump} >{show_hide_dump_state.name}</ButtonWord>
      <ButtonWord styles={{ margin: "20px" }} on_click_function={show_hide_calender} >{show_hide_calender_state.name}</ButtonWord>
    </header >
  );
}

export default Header;
