import React from 'react';
import './App.css';
import Courses from './Courses';

class App extends React.Component {

  constructor(props){ 
    super(props)
    this.courses=[
      'React',
      'Angular',
      'Java 8',
      'Spring',
      'Hibernate'
    ];
    this.handleCourseClick = this.handleCourseClick.bind(this);
  }
  
  handleCourseClick(event){
    console.log('came inside the parent method of handle click ', event.target.id);
  }
  render(){ 
    return (
        <div>
          <Courses data={this.courses} handleClick={this.handleCourseClick}/>
        </div>
    );
  }
}

export default App;