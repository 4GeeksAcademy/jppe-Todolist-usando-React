import React from "react";

//include images into your bundle
import Tareas from "./tareas";

//create your first component
const Home = () => {
	
	return (
		<><div className="container row flex-row justify-content-center col-sm-12 cajaPrincipal">
				<div  className="col-sm-12" id="TodoList">
			
			<h1>
				To do list
			</h1>
			
			
			<Tareas id='Tareas'/>
			
		</div>
		<div className="col-sm-11" id='linea1'>
	
		
	  </div>
	  <div className="col-sm-10" id='linea2'>
	  
	  </div>

		</div>
		
		</>

		
	);
};

export default Home;
