import { useState } from "react";
import Banner from "./componentes/banner/Banner";
import FormContent from "./componentes/Form-content";



function App() {
  
  const [employees, setEmployees ] = useState([])

  const newEmployee = (employee) => {
    console.log(employee)
  }

  return (
    <div className="App">
      <Banner />
      <FormContent newEmployee={employee => newEmployee(employee)}/>
    
    </div>
  );
}

export default App;
