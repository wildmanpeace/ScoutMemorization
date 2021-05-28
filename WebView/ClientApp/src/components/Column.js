import React from "react";
import {List, RootRef, Typography} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import ListItemCustom from "./ListItemCustom";

const Column = ({column}) => {
    return (
        <div>
            <Typography varient={"h4"} >{column.id}</Typography>
            <Draggable droppableId={column.id}>
                {(provided) => (
                    <RootRef rootRef={provided.innerRef}>
                        <List>
                            {column.list.map((itemObject, index) =>{
                            return <ListItemCustom index={index} itemObject={itemObject}></ListItemCustom>})}
                            {provided.placeHolder}
                        </List>
                    </RootRef>
                )}
            </Draggable>
        </div>
    )
}

export default Column;