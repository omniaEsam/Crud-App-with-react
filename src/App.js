import React , {Component} from 'react' ;
import Courseform from './components/Courseform';
import Courselist from './components/Courselist';


class App extends Component{
  state={
    courses:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'javascript'}
    ] ,
    current : ''
  }
  // function updateCourse
  updateCourse = (e) =>{
      this.setState({
        current : e.target.value
       })
    
    
  }
  // function addCourse
  addCourse = (e) =>{
    e.preventDefault();
      if(this.state.current === '' ){
        return false
      }
      else{
        let current = this.state.current ;
        let courses = this.state.courses ;
        courses.push({name: current});
        this.setState(
          {courses ,
            current: ''
          } 
           );
      }
     
    }
    
  
  // function deleteCourse
  deleteCourse = (index)=>{
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses
    })
  }
  // function editCourse
  editCourse =(index ,value)=>{
    let courses = this.state.courses;
    let course = courses[index];
    course.name = value ;
    this.setState({
      courses
    })
  }
  render(){
    const {courses} = this.state ;
    let length = courses.length;
     
    const courselist = length ?(
      courses.map((course , index)=>{
        return( 
         
        <Courselist  list={course} key={index} index={index}  deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
        )
          
      })
    ) : (
      <p>There is no courses to show</p>
    )
    return(
       <section className='App'>
         <h2>Add Course</h2>

         <Courseform current={this.state.current} updateCourse={this.updateCourse}   addCourse={this.addCourse}/>

         <ul>{courselist}</ul>
       </section>
    );
  }
}
export default App;
