import React, {Component} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Container, Paper, makeStyles, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) =>
({
  paper: {
    margin: 10,
    padding:10,
    
  },
  button: {
    backgroundColor: "secondary",
    color: "white"
  }
}))

const reorder = (list, startIndex, endIndex) => {
    var result = Array.from(list);
    var [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };


export class Reorder extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: Array.from(props.list),
            counter: 0,
            name: props.name
        };

        this.onDragEnd = this.onDragEnd.bind(this)
        this.checkOrder = this.checkOrder.bind(this)
    }

    onDragEnd(result){
    if(!result.destination) return;

    var originalList = reorder(
        this.state.list,
        result.source.index,
        result.destination.index
    )

    this.setState({
        list: originalList,
        counter: this.state.counter + 1,
        isFinished: this.checkOrder(originalList)
    });
    }
    
    checkOrder(list){

    var listIDs = list.map((item => item.id));

    var ids = listIDs.map((item => item = parseInt(item.replace("id-", ""))));
    
    if(!!ids.reduce((n, item) => n && item >= n && item)){
        return true;
    }

    return false;
    }

    render () {
        if(this.state.isFinished){
            return (
            <>
                <h1>Finished!</h1>
                <h3>With a count of: {this.state.counter}</h3>
            </>)
        }
        return (
        <>
        <br />
        <h2>{this.props.name}</h2>
        <p>The {this.props.name} is out of order! Move the cards and place them in the correct order</p>
        <Container>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        >
                        {this.state.list.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index} >
                        {(provided) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            >
                            <Paper elevation={6} className={useStyles().paper}>{item.text}</Paper>
                            </div>
                        )}
                        </Draggable>
                    )
                    )}
                {provided.placeholder}
                </div>
            )}
        </Droppable>
        </DragDropContext>
        <br />
        <div>Counter: {this.state.counter}</div>
        <Button component={Link} to="/Oath">Reset</Button>
        </Container>

        </>
        )
    };
}