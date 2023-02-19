import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import './PlaceList.css'

const PlaceList = props =>{
    if(props.items.length === 0){
        return <div className="place-list center"> 
        <Card>

            <h2>No places to display.Maybe add one</h2>
            <button>Share Places</button>
        </Card>
        </div>
    }

    return (
        <ul className="place-list">
            {props.items.map(places => <PlaceItem key={places.id} id={places.id} image={places.imageURL} title={places.title} description={places.description} address={places.address} creatorID={places.creatorID} coordinates={places.location}/>)}
        </ul>
    )
}


export deafult PlaceList;