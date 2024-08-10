import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import GradesFunction from "./Grades/index";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';
import PeopleDetails from './People/Details';

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:id" element={<AssignmentEditor />} />
                <Route path="/Grades" element={<GradesFunction />} />
                <Route path="/People" element={<PeopleTable />} />
                <Route path="People/:uid" element={<PeopleTable />} />

              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
