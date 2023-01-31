import React , {Component, Fragment} from 'react' ;


class Courselist extends Component{
   state={
     isEdit: false
   }
  //   function renderCourse
  renderCourse =() =>{
      return(
        <li>
        <span>{this.props.list.name}</span>
        <button onClick={()=>{this.toggleState()}}>Edit Course</button>
        <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete Course</button>
       </li>
      )
   
  }
   // funtion toggleState
   toggleState =() =>{
    let {isEdit} = this.state ;
    this.setState({
      isEdit: !isEdit
    })
  }
  //  function updateCourseItem
  updateCourseItem=(e)=>{
  e.preventDefault();
  this.props.editCourse(this.props.index , this.input.value);
  this.toggleState();
  }
  // function renderUpdate
  renderUpdateForm=()=>{
    return(
      <form onSubmit={this.updateCourseItem}>
        <input type= 'text' defaultValue={this.props.list.name} ref={(v)=> {this.input = v}} />
        <button>update Course</button>
      </form>
    )
  }
 
  render(){
    let {isEdit} = this.state ;
    return(
       <Fragment>
        { isEdit ? this.renderUpdateForm()  : this.renderCourse() }
       </Fragment>
    );
  }
}
export default Courselist;