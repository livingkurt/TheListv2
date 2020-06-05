import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
// import './style.css';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: whitesmoke;
`;

const Hero = (props) => {
  return (
    <Draggable draggableId={props.hero._id} index={props.index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          {props.hero.title}
        </Container>
      )}
    </Draggable>
  );
}

export default Hero