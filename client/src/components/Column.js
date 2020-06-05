import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Hero from './Hero';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
`;

const HeroList = styled.div`
  padding: 10px;
  flex-grow: 1;
  min-height: 100px;
`;
const Column = (props) => {
  console.log({ Column: props.heroes })

  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column._id}>
        {provided => (
          <HeroList innerRef={provided.innerRef} {...provided.droppableProps}>
            {props.heroes ? props.heroes.map((hero, index) => (
              // console.log({ hero: hero._id })
              <Hero key={hero._id} hero={hero} index={index} />
            )) : "No Heros"}
            {provided.placeholder}
          </HeroList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column
