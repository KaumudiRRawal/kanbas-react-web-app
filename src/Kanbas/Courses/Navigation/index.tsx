import { useLocation, useParams } from 'react-router';
import './index.css';

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const isActive = (path: string) => pathname.includes(path);

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      <a id="wd-course-home-link" href={`#/Kanbas/Courses/${cid}/Home`} className={`list-group-item ${isActive('Home') ? 'active' : 'text-danger'} border-0`}> Home </a>
      <a id="wd-course-modules-link" href={`#/Kanbas/Courses/${cid}/Modules`} className={`list-group-item ${isActive('Modules') ? 'active' : 'text-danger'} border-0`}> Modules </a>
      <a id="wd-course-piazza-link" href={`#/Kanbas/Courses/${cid}/Piazza`} className={`list-group-item ${isActive('Piazza') ? 'active' : 'text-danger'} border-0`}> Piazza </a>
      <a id="wd-course-zoom-link" href={`#/Kanbas/Courses/${cid}/Zoom`} className={`list-group-item ${isActive('Zoom') ? 'active' : 'text-danger'} border-0`}> Zoom </a>
      <a id="wd-course-quizzes-link" href={`#/Kanbas/Courses/${cid}/Assignments`} className={`list-group-item ${isActive('Assignments') ? 'active' : 'text-danger'} border-0`}> Assignments </a>
      <a id="wd-course-assignments-link" href={`#/Kanbas/Courses/${cid}/Quizzes`} className={`list-group-item ${isActive('Quizzes') ? 'active' : 'text-danger'} border-0`}> Quizzes </a>
      <a id="wd-course-grades-link" href={`#/Kanbas/Courses/${cid}/Grades`} className={`list-group-item ${isActive('Grades') ? 'active' : 'text-danger'} border-0`}> Grades </a>
      <a id="wd-course-people-link" href={`#/Kanbas/Courses/${cid}/People`} className={`list-group-item ${isActive('People') ? 'active' : 'text-danger'} border-0`}> People </a>
    </div>
  );
}