// React
import React, { useRef } from "react";
// Styles
import './editor_input.css'


const EditorInput = (props) => {

  const inputRef = useRef()
  // console.log(inputRef.current.value)

  // "this.style.width = ((this.value.length + 1) * 8) + 'px';"

  const adjust_input_size = (e) => {
    console.log(e.target.value)
    e.target.style.width = ((e.target.value.length + 1) * 8) + 'px'
    // e.style.width = ((e.value.length + 1) * 8) + 'px'
  }


  return (
    <div style={{ width: "100%" }}>
      <input
        ref={inputRef}
        onKeyPress={e => adjust_input_size(e)}
        defaultValue={props.value}
        // onBlur={e => props.on_change_function(e)}
        className="input_editor"
        size={e => e.target.value.length}
        style={props.styles}
        id={props.id}
        placeholder={props.placeholder}
        name={props.name} />
    </div>
  );
}

export default EditorInput;

