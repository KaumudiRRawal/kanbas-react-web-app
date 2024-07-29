import React from "react";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database"; // Ensure this path is correct
import "./index.css";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsFileText, BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input id="wd-search-assignment" className="form-control" placeholder="🔍 Search..." style={{ width: "300px" }} />
        <div>
          <button id="wd-groups-btn" className="btn btn-lg btn-secondary me-1" type="button">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Groups
          </button>
          <button id="wd-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
        </div>
      </div>
      <div id="wd-modules">
        <br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Assignments
              <div className="float-end">
                <button id="wd-40-btn">40% of Total</button>
                <FaPlus />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {filteredAssignments.map((assignment) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-green">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsFileText className="me-2 fs-3" />
                  <div>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-dark">
                      {assignment.title}
                    </Link>
                    <br />
                    <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am | <br /> Due May 13 at 11:59pm | 100 pts
                  </div>
                  <FaTrash/>
                  <LessonControlButtons />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}