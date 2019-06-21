import React from 'react'
import ReactDom from 'react-dom';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';


ReactDom.render(
<BrowserRouter>


<Route path="/" exact render ={
    ()=>{
        return (<h1>This is home page</h1>)

    }
}/>

<Route path="/add" exact render ={
    ()=>{
        return (<h1>This is Add Course page</h1>)

    }
}/>

<Route path="/details" exact render ={
    ()=>{
        return (<h1>This is Course details page</h1>)

    }
}/>
<App/>

</BrowserRouter>,
document.getElementById('root'));
