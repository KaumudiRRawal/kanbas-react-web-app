import React from "react";
import "./index.css";
import ModulesControls from "../Modules/ModulesControls";
import { BsFileText, BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BiFileFind } from "react-icons/bi";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          id="wd-search-assignment"
          className="form-control"
          placeholder="🔍 Search..."
          style={{ width: "300px" }}
        />
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
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-green">

              <BsGripVertical className="me-2 fs-3" />
              <BsFileText className="me-2 fs-3" />
               <div>
               <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
              A1 
            </a>
                <br />
              <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am | <br /> Due May 13 at 11:59pm | 100 pts 
              </div>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-green">

              <BsGripVertical className="me-2 fs-3" />
              <BsFileText className="me-2 fs-3" />
               <div>
               <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
              A2
            </a>
                <br />
              <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am | <br /> Due May 20 at 11:59pm | 100 pts 
              </div>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-green">

              <BsGripVertical className="me-2 fs-3" />
              <BsFileText className="me-2 fs-3" />
               <div>
               <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
              A3
            </a>
                <br />
              <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am | <br /> Due May 27 at 11:59pm | 100 pts 
              </div>
                <LessonControlButtons />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
