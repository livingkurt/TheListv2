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
export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <HeroList innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.heroes.map((hero, index) => (
                <Hero key={hero.id} hero={hero} index={index} />
              ))}
              {provided.placeholder}
            </HeroList>
          )}
        </Droppable>
      </Container>
    );
  }
}


// import React, { useState } from 'react';
// import data from '../Data';
// import Column from '../Column';
// import Hero from '../Hero/index';
// import styled from 'styled-components';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// const Title = styled.div`
//   text-align: center;
//   margin-top: 5px;
//   padding: 10px;
// `;

// const App = () => {
//   // state = data;

//   const [state, setstate] = useState(data)
//   // render() {
//   return (
//     <div>
//       <Title>
//         <text>Avengers Infinity War</text>
//       </Title>
//       <DragDropContext>
//         {state.columnsort.map(columnId => {
//           const column = state.columns[columnId];
//           const heroes = column.heroId.map(heroId => state.heroes[heroId]);
//           return <Column key={Column.id} column={column} heroes={heroes} />;
//         })}
//       </DragDropContext>
// {/* <Droppable droppableId={this.props.column.id}>
//         {(provided) => (
//           <div
//             className="Hero-List"
//             innerRef={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             {this.props.heroes.map((hero, index) => (
//               <Hero key={hero.id} hero={hero} index={index} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable> */}
// {/* </div>
//   );
//   // }
// }

// export default App; * /}