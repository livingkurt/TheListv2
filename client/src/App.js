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
  const notes_read = useSelector(state => state.notes_read);
  const lists_read = useSelector(state => state.lists_read);
  const lists_read_order = useSelector(state => state.lists_read_order);

  const { loading: loading_notes, success: success_notes, notes } = notes_read;
  const { loading: loading_lists, success: success_lists, lists } = lists_read;
  const { loading: loading_order, success: success_order, order } = lists_read_order;

  const [notes_state, set_notes_state] = useState(notes)
  const [lists_state, set_lists_state] = useState(lists)
  const [order_state, set_order_state] = useState(order)



  // useEffect(() => {
  //   dispatch(get_notes());
  //   dispatch(get_notes());
  // }, [])

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(get_notes());
    dispatch(get_lists());
    dispatch(get_list_order());
    if (loading_notes && loading_lists && loading_order) {
    }
    else {
      console.log("Hello")
      set_notes_state(notes)
      set_lists_state(lists)
      set_order_state(order)
      //   var result = {};
      //   for (var i = 0; i < lists.length; i++) {
      //     // console.log({ notes })
      //     result[notes[i].key] = notes[i].value;
      //     console.log({ result })
      //   }
      //   console.log({ result })
    }

  }, [])



  useEffect(() => {
    if (notes) {
      var notes_result = {};
      for (var i = 0; i < notes.length; i++) {
        // console.log({ notes })
        notes_result[notes[i]._id] = notes[i];

        // console.log(notes[i]._id)
      }
      console.log({ notes_result })
      set_notes_state(notes_result)
    }
    if (lists) {
      var lists_result = {};
      for (var i = 0; i < lists.length; i++) {
        // console.log({ lists })
        lists_result[lists[i]._id] = lists[i];

        // console.log(lists[i]._id)
      }
      console.log({ lists_result })
      set_lists_state(lists_result)
    }
    if (order) {
      var order_result = [];
      order_result = order[0].lists;
      console.log({ order_result })
      set_order_state(order_result)
    }
    const new_data = { heroes: notes_result, columns: lists_result, columnsort: order_result }
    console.log(new_data)
    setState(new_data)
  }, [loading_notes, loading_lists, loading_order])




  // console.log({ notes_state })
  // console.log({ lists_state })
  // console.log({ order_state })

  // if (!loading_notes && !loading_lists && !loading_order) {
  //   console.log("Hello")
  //   set_notes_state(notes)
  //   set_lists_state(lists)
  //   set_order_state(order)
  // }



  // console.log(all_lists)

  // console.log(order)
  // console.log({ notes, lists, order })
  // const database = { notes, lists, order }




  // const 


  const [state, setState] = useState(data)
  // const [notes_state, set_notes_state] = useState(notes)

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
      {loading_notes && loading_lists && loading_order
        ?
        "Loading Data"
        :
        <div>
          <Title>
            <text>Avengers Infinity War</text>
          </Title>
          <DragDropContext onDragEnd={onDragEnd}>
            <Container>
              {/* {console.log(state.columnsort)} */}
              {!state.columnsort ? "loading" : state.columnsort.map(columnId => {
                const column = state.columns[columnId];
                const hero = state.heroes
                console.log(hero)

                const heroes = !column.notes ? [] : column.notes.map(note => hero[note]);
                console.log(heroes)


                // console.log(column.notes)
                // const heroes = !column.notes ? [] : column.notes.map(note => console.log(note));
                // const arr = []
                // const heroes = !column.notes ? [] : column.notes.map(note => console.log(state.notes._id[note]));
                // const heroes = column.notes.map(heroId => state.heroes[heroId]);
                // console.log(Column.id)
                return <Column key={Column.id} column={column} heroes={heroes} />;
              })}
            </Container>
          </DragDropContext>
        </div>
      }
    </div>
  );
}

export default App;


