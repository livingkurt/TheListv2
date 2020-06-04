import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import data from './data';
import Column from './components/Column';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { get_notes } from "./actions/note_actions"
import { get_lists, get_list_order } from './actions/list_actions';

const Title = styled.div`
    text-align: center;
    margin-top: 5px;
    padding: 10px;
`;

const Container = styled.div`
  display: flex;
`

const App = () => {

  useEffect(() => {
    dispatch(get_notes());
    dispatch(get_notes());
  }, [])

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(get_notes());
    dispatch(get_lists());
    dispatch(get_list_order());
  }, [])

  const notes_read = useSelector(state => state.notes_read);
  // console.log(all_notes)
  const { loading, success, notes } = notes_read;
  console.log(notes)

  const lists_read = useSelector(state => state.lists_read);
  // console.log(all_lists)
  const { lists } = lists_read;
  console.log(lists)

  const lists_read_order = useSelector(state => state.lists_read_order);

  // console.log(all_lists)
  const { order } = lists_read_order;
  console.log(order)
  console.log({ notes, lists, order })
  const database = { notes, lists, order }


  // const 


  const [state, setState] = useState(data)
  const [notes_state, set_notes_state] = useState(notes)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId && destination.index === source.index
    ) {
      return;
    }

    const begin = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];


    if (begin === end) {
      const newHeroIds = Array.from(begin.heroIds);
      newHeroIds.splice(source.index, 1);
      newHeroIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...begin,
        heroIds: newHeroIds,
      };
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
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
      ...state,
      columns: {
        ...state.columns,
        [newBegin.id]: newBegin,
        [newEnd.id]: newEnd,
      },
    };
    setState(newState)
  };
  return (
    <div>
      <Title>
        <text>Avengers Infinity War</text>
      </Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {state.columnsort.map(columnId => {
            const column = state.columns[columnId];
            const heroes = column.heroIds.map(heroId => state.heroes[heroId]);
            // console.log({ heroes })
            return <Column key={Column.id} column={column} heroes={heroes} />;
          })}
        </Container>
      </DragDropContext>
    </div>
  );
}

export default App;


