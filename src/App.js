import React, { Component } from 'react';
import Form from './Component/form';
import List from './Component/List';

class App extends Component {
  state={
    courses:[{name:'Html'},{name:'css'},{name:'Javascript'}],
    current:''
  
  }
  
  handleUpdate = (e) =>{
    this.setState({
      current : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
   const current = this.state.current;
    let courses = this.state.courses;
    
    courses.push({name:current})
    this.setState({
      courses,
      current:''
    })   
  }

  deleteCourse = (index) => {
    console.log(index);
    let courses = this.state.courses;

    courses = courses.filter((course,idx) =>{
      return index !== idx
    });

     this.setState({
       courses
     })

   }

   updatetext = (index,value) =>{
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
   }

  render() {
  const {courses} = this.state;
  const courslist = courses.map((course,index) =>{
    return <List details={course} updatetext={this.updatetext} handleUpdate={this.handleUpdate} deleteCourse={this.deleteCourse}
     key={index} index={index} />
  })

    return (
      <div> 
        <Form handleUpdate={this.handleUpdate} current={this.state.current} handleSubmit={this.handleSubmit}/>
        <ul> {courslist}</ul>
      </div>
    )
  }
}

export default App;