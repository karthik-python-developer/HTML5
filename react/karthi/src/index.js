import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Functional from './components/functional';
import { Task,Task1, Task2, Task3} from './components/sub';
import Props from './components/props';
import Events from './components/events';
import Events1 from './components/events1';
import Forms from './components/forms';
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';
import Homepage from './Router/homepage';
import Contact from './Router/contact';
import About from './Router/about';
import Mistake from './Router/error';
import Course from './Router/course';
import Java from './Router/java';
import Python from './Router/python';

let rootid = document.getElementById('root');

const root =ReactDOM.createRoot(rootid)         
// props :

    // let name = prompt("enter your name") 
    // let age = prompt("enter your age")
    // let add = prompt("enter your add")

    // let text = prompt("enter ur txt")
    // let link = prompt("enter ur linkname")



root.render(
  <React.StrictMode> 
      {/* <App/>
    <Functional/>
      <Task/>
      <Task1/>
      <Task2/>
      <Task3/>   */}
      {/* <Props name={name}  age={age}  address={add}/> */}
      {/* <Props txt={text} linked={link} /> */}
      {/* <Events/> */}
      {/* <Events1/> */}
      {/* <Forms/> */}

      {/* <BrowserRouter>
        <Link to="/"> Homepage</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/course"> Course </Link>

        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/*' element={< Mistake/>}/>
          <Route path='/course' element={< Course/>}>
            <Route path='java' element={<Java/>}/>
            <Route path='python' element={<Python/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
 */}



      
  </React.StrictMode> 
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
