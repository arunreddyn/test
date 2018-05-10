import React from 'react';
import ReactDOM from 'react-dom';
import {Drag} from './Drag';
const tasks = ['take out the trash','shovel the driveway','walk the dog'];
const element = <div>
    <h1> Task List</h1>
    <ol>
    {tasks.map((task,index)=> <li key = {index}>{task}</li> )}
    </ol>
    </div>
// class List extends component{

// }


//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Drag/>, document.getElementById('root'));