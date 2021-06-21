import React, { Component } from 'react';
import { Reorder } from './Reorder/Reorder';


const OathLists = () => [
  { id: "id-3", text: "To do my duty" },
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

    export class Oath extends Component {
      
      render () {
        return <Reorder name={"Scout Oath"} list={OathLists()}></Reorder>
      };
    }