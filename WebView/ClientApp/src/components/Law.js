import React, { Component } from 'react';
import { Reorder } from './Reorder/Reorder';


const LawList = () => [
    { id: "id-9", text: "Thrifty" },
    { id: "id-5", text: "Curtious" },
    { id: "id-2", text: "Loyal" },
    { id: "id-10", text: "Clean" },
    { id: "id-4", text: "Friendly" },
    { id: "id-1", text: "Trustworthy" },
    { id: "id-3", text: "Helpful" },
    { id: "id-11", text: "Brave" },
    { id: "id-6", text: "Kind" },
    { id: "id-7", text: "Obedient" },
    { id: "id-12", text: "Reverent" },
    { id: "id-8", text: "Cheerful" },
];

    export class Law extends Component {
      
      render () {
        return (
                <Reorder name={"Scout Law"} list={LawList()}></Reorder>
        )
      };
    }