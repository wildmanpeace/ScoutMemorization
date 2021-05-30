import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

    export class Oath extends Component {
      static displayName = Oath.name;

      constructor(props){
        super(props);
        this.state = {
          originalList: OathLists.ScabbledOath.list
        };
        this.onDragEnd = this.onDragEnd.bind(this)
      }

      onDragEnd(result){
        if(!result.destination)
        return;

        const originalList = reorder(
          this.state.originalList,
          result.source.index,
          result.destination.index
        )

        this.state({originalList});
      }      
    
      render () {
        return (
          <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.originalList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
          )
      };
    }