import React, { useState } from 'react';
import {Grid, makeStyles,} from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const App = () => {

    const OathLists = {
        ScabbledOath: {
          id: "Scabbled Oath",
        list:[
          {id: 1, text: "On my honor"},
        {id: 2, text: "I will do my best"},
        {id: 3, text: "To do duty"},
        {id: 4, text: "To God"},
        {id: 5, text: "And my country"},
        {id: 6, text: "To obey the Scout Law"},
        {id: 7, text: "To help other people at all time"},
        {id: 8, text: "to keep myself"},
        {id: 9, text: "physically strong"},
        {id: 10, text: "mentally awake"},
        {id: 11, text: "and morally straight"}
      ]
    },
        FinalOath: {
          id: "Final Oath",
          list:[]
        }
    };

    const [columns, setColumns] = useState(OathLists);

    const onDragEnd = ({ source, destination}) => {
        if(destination === undefined || destination === null){
            return null
        }

        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        ){
            return null;
        }

        const start = columns[source.droppableId];
        const end = columns[destination.droppableId];

        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            const newList = start.list.filter((_, idx) => idx !== source.index);
      
            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index]);
      
            // Then create a new copy of the column object
            const newCol = {
              id: start.id,
              list: newList
            };

            setColumns((state) => ({ ...state, [newCol.id]: newCol }));
            return null;
        }
        else {

            const newStartList = start.list.filter((_, idx) => idx !== source.index);

            // Create a new start column
            const newStartCol = {
              id: start.id,
              list: newStartList
            };
      
            // Make a new end list array
            const newEndList = end.list;
      
            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.list[source.index]);
      
            // Create a new end column
            const newEndCol = {
              id: end.id,
              list: newEndList
            };
      
            // Update the state
            setColumns((state) => ({
              ...state,
              [newStartCol.id]: newStartCol,
              [newEndCol.id]: newEndCol
            }));
            return null;
          
        };

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid container direction={"row"} justify={"center"}>
            {Object.values(columns).map((column) => {
              console.log(column);
              return (
                <Grid item>
                  <Column column={column} key={column.id} />
                </Grid>
              );
            })}
          </Grid>
        </DragDropContext>
      );
    };
    
    export default App;
    
    const useStyles = makeStyles((theme) => ({}));