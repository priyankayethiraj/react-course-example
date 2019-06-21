import React from 'react';

class Courses extends React.Component {
   
    constructor(props){
        super(props);
        //this.handleCourseClick = this.handleCourseClick.bind(this);
    }


    render(){
        console.log(this.props);
        return (
            <div>
                {
                    this.props.data.length > 0 ? (
                        <ul>
                        {
                            this.props.data.map(course => <li id={course}
                                    key={course} 
                                    onClick={(event)=> this.props.handleClick(event)}>{course}</li>)
                        }
                        </ul>
                    ): <h1> There are no Courses for Display </h1>
                }
            </div>  
        );
    }
}

export default Courses;