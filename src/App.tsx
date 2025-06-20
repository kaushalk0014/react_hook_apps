import React from 'react';

import './App.css';
import DisplayList from './components/DisplayList';
import EmployeeDetails from './components/EmployeeDetails';
import ReactLifeCycle from './components/ReactLifeCycle';
import ClassComponent from './components/ClassComponentMounting';
import ClassComponentUpdate from './components/ClassComponentUpdate';
import ClassComponentUnMounting from './components/ClassComponentUnMounting';
import MemoParentComponent from './components/useMemo/MemoParentComponent';

function App() {
  return (
    <div>
        {/* <DisplayList />
        <EmployeeDetails></EmployeeDetails> */}
      {/* <ReactLifeCycle ></ReactLifeCycle> */}
      {/* <ClassComponent color="white"></ClassComponent> */}
      {/* <ClassComponentUpdate color="white"></ClassComponentUpdate> */}
      {/* <ClassComponentUnMounting color="white" deleteUser={true}></ClassComponentUnMounting> */}

      
      <MemoParentComponent/>
    </div>
  );
}

export default App;
