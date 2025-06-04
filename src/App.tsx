import React from 'react';

import './App.css';
import DisplayList from './components/DisplayList';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div>
      <DisplayList/>
       <EmployeeDetails></EmployeeDetails>
    </div>
  );
}

export default App;
