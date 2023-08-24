import React, { Component } from 'react'

export default class ListStudents extends Component {
  render() {
    let {renderStudents} = this.props;
    console.log("--------------------");
    console.log(renderStudents);
    console.log("--------------------");
    let elementStudent = renderStudents.map((student,index)=>{
        return<>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
            </tr>
        </>
    })
    return (
      <div>
        <h2>Dữ liệu học sinh</h2>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {elementStudent}
            </tbody>
        </table>
      </div>
    )
  }
}
