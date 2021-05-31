import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Container, Paper } from "@material-ui/core"

const OathLists = () => [
  { id: "id-3", text: "To do duty" },
  { id: "id-8", text: "to keep myself" },
  { id: "id-2", text: "I will do my best" },
  { id: "id-4", text: "To God" },
  { id: "id-1", text: "On my honor" },
  { id: "id-11", text: "and morally straight" },
  { id: "id-5", text: "And my country" },
  { id: "id-10", text: "mentally awake" },
  { id: "id-9", text: "physically strong" },
  { id: "id-6", text: "To obey the Scout Law" },
  { id: "id-7", text: "To help other people at all time" }
];

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
          originalList: OathLists(),
          counter: 0
        };
        this.onDragEnd = this.onDragEnd.bind(this)
        this.checkOrder = this.checkOrder.bind(this)
      }

      onDragEnd(result){
        if(!result.destination) return;

        const originalList = reorder(
          this.state.originalList,
          result.source.index,
          result.destination.index
        )

        this.setState({
          originalList,
          counter: this.state.counter + 1
        });

        //check order
        if(this.checkOrder(this.state.originalList)){
          console.log("finished")
        }
        //if order is correct display happy message :)

      }
      
      checkOrder(list){
        const correctOrder = ["1","2","3","4","5","6","7","8","9","10","11"];
        const listIDs = list.map((item => item.id = item.id.replace("id-", "")));
        
        if(correctOrder.values === listIDs.values){
          return true;
        }else{
          return false;
        }

      }
    
      render () {
        return (
          <>
          <h2>Scout Oath</h2>
          <p>The Scout Oath is out of order! Move the cards and place them in the correct order</p>
          <Container>
          <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {this.state.originalList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index} >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Paper elevation={6}>{item.text}</Paper>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <br />
        <div>Counter: {this.state.counter}</div>
        </Container>

        </>
          )
      };
    }