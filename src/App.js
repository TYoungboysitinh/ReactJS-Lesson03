import React, { Component } from 'react'
import "./App.css"
import ListStudents from './Components/ListStudents';
import SearchInput from './Components/ListControl';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students:[
        {studentId: "SV001", studentName: "Nguyễn Văn A", age: 20},
        {studentId: "SV002", studentName: "Nguyễn Văn B", age: 21},
        {studentId: "SV003", studentName: "Nguyễn Văn C", age: 22},
        {studentId: "SV004", studentName: "Nguyễn Văn D", age: 23}
      ],
      searchQuery:'',
      searchResults: []
    }
  }

  handleSearch = () =>{
    const {searchQuery, students} = this.state;
    const searchResults = students.filter(student => student.studentName.toLowerCase().includes(searchQuery.toLowerCase()))
    this.setState({
      searchResults
    });
  }

  handleInputChange = (event) => {
    this.setState({
      searchQuery:event.target.value
    });
  }

  render() {
    const {searchQuery, searchResults} = this.state;
    return (
      <div className="container mt-3">
        <SearchInput value={searchQuery} onChange={this.handleInputChange} onSearch={this.handleSearch} />
        <ul className="search">
          {searchResults.map((student,index) =>(
            <li key={index} >ID: {student.studentId} - Name: {student.studentName} - Age: {student.age}</li>
          ))}
        </ul>
        <ListStudents renderStudents={this.state.students} />
      </div>
    )
  }
}
