import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Todo from './TodoComponents/Todo/Todo';
// import './style.css';

const Container = styled.div`
  display: flex;
`;

// const Container = styled.div`
//   border: 1px solid lightgrey;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 10px;
//   background-color: whitesmoke;
// `;

const Hero = (props) => {
  return (
    <Draggable draggableId={props.hero._id} index={props.index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          {/* {props.hero.title} */}
          {/* <Todo></Todo> */}
          <Todo
            // category_state={category_state}
            // show_create_note_container={show_create_note_container}
            // get_all_notes_by_list_id={get_all_notes_by_list_id}
            index={props.hero._id}
            // note={props.hero}
            id={props.hero._id}
            key={props.hero._id}>{props.hero.title}</Todo>
        </Container>
      )}
    </Draggable>
  );
}

export default Hero