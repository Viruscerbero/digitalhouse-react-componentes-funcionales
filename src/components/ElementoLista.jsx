import React, { useState } from "react";

const ElementoLista = (props) => {
    const { id, image, name, species, status }  = props;

    return (
        <li id={id}>
            <img src={image} width="100" height="auto"/>
            <div>
                <p> <b>Nombre:</b> {name} </p>
                <p> <b>Especie:</b> {species} </p>
                <p> <b>Estado:</b> {status} </p>
            </div>
        </li>
    );
};

export { ElementoLista };
