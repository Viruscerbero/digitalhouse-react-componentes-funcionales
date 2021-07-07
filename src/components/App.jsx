import React, { useState, useEffect } from "react";
import { Lista } from './Lista.jsx';
import { Encabezado } from './Encabezado.jsx';
import { PieDePagina } from './PieDePagina.jsx';
import "./app.scss";

const App = () => {

	const [elementos, setElementos] = useState(null);

	const URL_API = 'https://rickandmortyapi.com/api/character/';

	useEffect(
		() => {
			fetch(URL_API)
			.then(response => response.json())
			.then(datos => setElementos(datos))
		},
		[]
	);

	return (
		<div className="app">
			<Encabezado />
			<Lista elementos={elementos} />
			<PieDePagina />
		</div>
	);
};
  
export default App;
