import React from "react";
import { ElementoLista } from "./ElementoLista.jsx";

const Lista = (props) => {
    const { elementos } = props;

    let lista = <ul className="no-data"></ul>;

    if (elementos) {
        let lis = elementos.results.map(
            item => <ElementoLista key={item.id} {...item}/>
        );

        lista = <ul>{ lis }</ul>;
    }

    return (
        <div className="lista">
            <h2>Personajes</h2>
            { lista }
        </div>
    );
}

export { Lista };
