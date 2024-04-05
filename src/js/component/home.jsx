import React from "react";

//include images into your bundle
import Tareas from "./tareas";

//create your first component
const Home = () => {
	
	return (
		<>
		<div id="TodoList">
			<h1>
				To do list
			</h1>
			<Tareas id='Tareas'/>
			
		</div>
		<div id='linea1'>
	
		
	  </div>
	  <div id='linea2'>
	  
	  </div>
		</>

		
	);
};

export default Home;
