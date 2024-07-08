export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br></br>
          <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assignment-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-assignment-group">
                  <option>ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
            <br></br>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade">Display Grade As</label>
              </td>
              <td>
                <select id="wd-display-grade">
                  <option>Percentage</option>
                </select>
              </td>
            </tr>
            <br></br>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option>Online</option>
                </select>
              </td>
            </tr>
            <br></br>
            <tr>
              <td align="right" valign="top">
                <label>Online Entry Options</label>
              </td>
              <td>
                <div className="checkbox-group">
                  <label><input type="checkbox" /> Text Entry</label><br></br>
                  <label><input type="checkbox" /> Website URL</label><br></br>
                  <label><input type="checkbox" /> Media Recordings</label><br></br>
                  <label><input type="checkbox" /> Student Annotation</label><br></br>
                  <label><input type="checkbox" /> File Uploads</label>
                </div>
              </td>
            </tr>
            <br></br>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
              </td>
              <td>
                <select id="wd-assign-to">
                  <option>Everyone</option>
                </select>
              </td>
            </tr>
            <br></br>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due">Due</label>
              </td>
              <td>
                <input type="date" id="wd-due" />
              </td>
            </tr>
            <br></br>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input type="date" id="wd-available-from" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Until</label>
              </td>
              <td>
                <input type="date" id="wd-available-until" />
              </td>
            </tr>
            <br></br>
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save</button>
        </table>
      </div>
  );}
  