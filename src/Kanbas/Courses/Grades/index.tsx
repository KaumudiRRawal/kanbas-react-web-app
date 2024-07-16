import React from 'react';
import { FaFileImport, FaFileExport } from 'react-icons/fa';
import { Route } from 'react-router-dom';

const Grades = () => {
  return (
    <div id="grades" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Grades</h2>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaFileImport className="me-2" />
            Import
          </button>
          <div className="btn-group">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport className="me-2" />
              Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Export as CSV</a></li>
              <li><a className="dropdown-item" href="#">Export as Excel</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="search-students" className="form-label">Student Names</label>
          <input id="search-students" className="form-control" placeholder="Search Students" />
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignments" className="form-label">Assignment Names</label>
          <input id="search-assignments" className="form-control" placeholder="Search Assignments" />
        </div>
      </div>
      <button className="btn btn-secondary mb-3">Apply Filters</button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP<br />Out of 100</th>
              <th>A2 HTML<br />Out of 100</th>
              <th>A3 CSS<br />Out of 100</th>
              <th>A4 BOOTSTRAP<br />Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-primary">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" defaultValue="88.03%" className="form-control" />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


