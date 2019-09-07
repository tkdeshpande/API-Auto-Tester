import React from 'react';

import { Project } from "../elements";

const projects = [
    new Project('FrontEnd', 'Font end tests', 30),
    new Project('Backend', 'Back end tests', 40),
    new Project('FrontEnd', 'Font end tests', 50),
];
const projectList = projects.map(({name, description, testcount}) => 
<tr>
  <td><a href="#">{name}</a></td>
  <td><a>{description}</a></td>
  <td><a>{testcount}</a></td>
</tr>
);



export const MainPage = (
<div>
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <button>New Project...</button>
        <a href="#contact">username123</a>
        <a href="#about">Settings</a>
    </div>
    <table>
        <tr>
            <th>Project name</th>
            <th>Tests</th>
            <th>Last Run</th>
        </tr>
        {projectList}
    </table>
</div>
)
