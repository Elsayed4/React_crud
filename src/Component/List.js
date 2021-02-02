import React, { Component } from 'react';
 class List extends Component {

  state={
    istoggle:false
  }

  renderCourse = () =>{
   return(
    <li>
    {this.props.details.name} 
    <button onClick={() => this.toggleClass()}>Edit Course</button>
    <button onClick={() =>{this.props.deleteCourse(this.props.index)}}> Delete </button> 
   </li>
   )
  }

  toggleClass = () => {
    let {istoggle} = this.state;
   this.setState({
     istoggle : !istoggle
   })
  }

  handlSubmitUpdate = (e) =>{
    e.preventDefault();
    this.props.updatetext(this.props.index, this.input.value);
    this.toggleClass();
  }

  renderUpdateCourse = () =>{
    return(
     <form onSubmit={this.handlSubmitUpdate}>
       <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
       <button>Update Courses</button>
     </form>
    )
   }
  
  render() {
    let {istoggle} = this.state;
    return (
      <React.Fragment>
       {istoggle ? this.renderUpdateCourse() : this.renderCourse()}
      </React.Fragment>
    )
  }
}

export default List;