import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import data from './data';
import Column from './components/Column';
import styled from 'styled-components';

const Title = styled.div`
    text-align: center;
    margin-top: 5px;
    padding: 10px;
`;

const Container = styled.div`
  display: flex;
`

class App extends Component {
  state = data;
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const begin = this.state.columns[source.droppableId];
    const end = this.state.columns[destination.droppableId];

    if (begin === end) {
      const newHeroIds = Array.from(begin.heroIds);
      newHeroIds.splice(source.index, 1);
      newHeroIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...begin,
        heroIds: newHeroIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState);
      return;
    }
    const beginHeroIds = Array.from(begin.heroIds);
    beginHeroIds.splice(source.index, 1);
    const newBegin = {
      ...begin,
      heroIds: beginHeroIds
    };
    const endHeroIds = Array.from(end.heroIds);
    endHeroIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...end,
      heroIds: endHeroIds
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newBegin.id]: newBegin,
        [newEnd.id]: newEnd,
      },
    };
    this.setState(newState)
  };
  render() {
    return (
      <div>
        <Title>
          <text>Avengers Infinity War</text>
        </Title>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnsort.map(columnId => {
              const column = this.state.columns[columnId];
              const heroes = column.heroIds.map(heroId => this.state.heroes[heroId]);
              return <Column key={Column.id} column={column} heroes={heroes} />;
            })}
          </Container>
        </DragDropContext>
      </div>
    );
  }
}

export default App;


