import React from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database'; // Adjust the path to your Database
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import GreenCheckmark from './GreenCheckmark';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  console.log("Course ID:", cid); // Debug log to check the extracted course ID
  console.log("Modules:", modules); // Debug log to check the modules array

  const filteredModules = modules.filter((module) => module.course === cid);

  console.log("Filtered Modules:", filteredModules); // Debug log to check the filtered modules

  return (
    <div id="wd-modules">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {filteredModules.map((module) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
              <div className="float-end">
                <GreenCheckmark />
                <FaPlus />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
