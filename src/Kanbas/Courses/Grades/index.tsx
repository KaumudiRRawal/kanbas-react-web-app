import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillGearFill, BsFunnel } from 'react-icons/bs';
import { BiSolidFileExport, BiSolidFileImport } from 'react-icons/bi';

import assignmentsData from '../../Database/assignments.json';
import enrollmentsData from '../../Database/enrollments.json';
import gradesData from '../../Database/grades.json';
import usersData from '../../Database/users.json';

type Assignment = {
  _id: string;
  title: string;
  course: string;
};

type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

type Grade = {
  _id: string;
  student: string;
  assignment: string;
  grade: string;
};

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
};

export default function GradesFunction() {
  const [students, setStudents] = useState<Enrollment[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Setting data from imported JSON files
    setStudents(enrollmentsData);
    setAssignments(assignmentsData);
    setGrades(gradesData);
    //setUsers(usersData);
    const transformedUsers = usersData.map(user => ({
      ...user,
      _id: user._id.$oid,
    }));
    setUsers(transformedUsers);
  }, []);

  const getAssignmentsForCourse = (course: string) => {
    const filteredAssignments = assignments.filter(a => a.course === course);
    console.log(`Assignments for course ${course}:`, filteredAssignments);
    return filteredAssignments;
  };

  const getGradesForStudent = (studentId: Object, assignmentId: string) => {
    const gradeEntry = grades.find(g => g.student === studentId && g.assignment === assignmentId);
    if (!gradeEntry) {
      console.warn(`Grade not found for student ${studentId} and assignment ${assignmentId}`);
    }
    return gradeEntry ? gradeEntry.grade : 'N/A';
  };

  const getFullName = (userId: string) => {
    const user = users.find(u => u._id === userId);
    if (!user) {
      console.warn(`User not found for userId ${userId}`);
    }
    return user ? `${user.firstName} ${user.lastName}` : 'Unknown User';
  };

  const course = "RS101"; // Example course ID, change this as needed

  const studentsInCourse = students.filter(student => {
    const user = users.find(user => user._id === student.user);
    console.log(`Checking user: ${user}`);
    return student.course === course && user && user.role === 'STUDENT';
  });

  const assignmentsForCourse = getAssignmentsForCourse(course);

  console.log("All Students:", students);
  console.log("All Users:", users);
  console.log("Students in course:", studentsInCourse);
  console.log("Assignments for course:", assignmentsForCourse);
  console.log("Grades:", grades);

  return (
    <div id="wd-grades" className="container mt-4">
      <h2 className="d-flex justify-content-between align-items-center mb-3">
        Grades
      </h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
          <BiSolidFileImport className="me-2 fs-5" /> Import
        </button>
        <div className="dropdown me-2">
          <button className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <BiSolidFileExport className="me-2 fs-5" /> Export
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item">Export as CSV</button></li>
            <li><button className="dropdown-item">Export as Excel</button></li>
          </ul>
        </div>
        <button className="btn btn-outline-secondary d-flex align-items-center">
          <BsFillGearFill className="fs-5" />
        </button>
      </div>
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="search-students" className="form-label fw-bold">Student Names</label>
          <input id="search-students" className="form-control" placeholder="🔍 Search Students" />
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignments" className="form-label fw-bold">Assignment Names</label>
          <input id="search-assignments" className="form-control" placeholder="🔍 Search Assignments" />
        </div>
      </div>
      <div className="d-flex mb-3">
        <button className="btn btn-outline-secondary d-flex align-items-center">
          <BsFunnel className="me-2 fs-3" /> Apply Filters
        </button>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Student Name</th>
            {assignmentsForCourse.map(assignment => (
              <th key={assignment._id} className="px-5">{assignment.title} <br /> Out of 100</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsInCourse.map(student => (
            <tr key={student.user}>
              <td className="text-danger">{getFullName(student.user)}</td>
              {assignmentsForCourse.map(assignment => (
                <td key={assignment._id} className="text-center">{getGradesForStudent(student.user, assignment._id)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}