import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillGearFill, BsFunnel } from 'react-icons/bs';
import { BiSolidFileExport, BiSolidFileImport } from 'react-icons/bi';

export default function GradesFunction() {
  console.log("GradesFunction rendered");

  return (
    <div id="wd-grades" className="container mt-4">
      <h2 className="d-flex justify-content-between align-items-center mb-3">
        Grades
      </h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
          <BiSolidFileImport className="me-2 fs-5" />Import
        </button>
        <div className="dropdown me-2">
          <button className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <BiSolidFileExport className="me-2 fs-5" />Export
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Export as CSV</a></li>
            <li><a className="dropdown-item" href="#">Export as Excel</a></li>
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
          <BsFunnel className="me-2 fs-3" />Apply Filters
        </button>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
        <tr>
            <th className="align-content-center">Student Name</th>
            <th className="px-5">A1 SETUP <br /> Out of 100</th>
            <th className="px-5">A2 HTML <br /> Out of 100</th>
            <th className="px-5">A3 CSS <br /> Out of 100</th>
            <th className="px-5">A4 BOOTSTRAP <br /> Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-danger">Jane Adams</td>
            <td className="text-center"><input type="text" className="form-control" defaultValue="100%" /></td>
            <td className="text-center">96.67%</td>
            <td className="text-center">98.67%</td>
            <td className="text-center">92.18%</td>
          </tr>
          <tr>
            <td className="text-danger">Christina Allen</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
          </tr>
          <tr>
            <td className="text-danger">Samreen Ansari</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
          </tr>
          <tr>
            <td className="text-danger">Han Bao</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">88.03%</td>
            <td className="text-center">98.99%</td>
          </tr>
          <tr>
            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
            <td className="text-center">100%</td>
            <td className="text-center">96.67%</td>
            <td className="text-center">98.37%</td>
            <td className="text-center">100%</td>
          </tr>
          <tr>
            <td className="text-danger">Siran Cao</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
            <td className="text-center">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
