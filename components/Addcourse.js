import React from 'react';

class AddCourse extends React.Component {

    render(){
        return (
            <div className="row">
                <div className="col-md-6">
                <form>
                        <div className="form-group">
                            <label for="name">Course Name</label>
                            <input type="text" className="form-control" id="courseName" aria-describedby="courseName" placeholder="Enter Course Name"/>
                        </div>
                        <div className="form-group">
                            <label for="price">Course Price </label>
                            <input type="text" class="form-control" id="price" placeholder="Price"/>
                        </div>
                        <div className="form-group">
                            <label for="duration">Course Duration </label>
                            <input type="text" class="form-control" id="duration" placeholder="Price"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form> 
                </div>
            </div>
        );
    }
}

export default AddCourse