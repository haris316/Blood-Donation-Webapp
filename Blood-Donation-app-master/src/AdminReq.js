import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Modal, { div } from "react-modal";
import AdminHead from "./AdminHead";
import AddEmp from "./AddEmp";
import { Link } from "react-router-dom";
import UpdateEmp from "./UpdateEmp";
import AdminRequest from "./AdminRequest";
import AdminUser from "./AdminUser";
import Header from "./AdminHead";

class AdminReq extends Component {
  state = {
    employees: [],
  };

  async componentDidMount() {
    if (localStorage.getItem("type") != "Admin") {
      this.props.history.push("/Login");
    }
    await axios
      .get("http://localhost:4000/adminemp")
      .then((res) => this.setState({ employees: res.data }));
  }

  delete(EmpID) {
    axios.delete(`http://localhost:4000/deladminemp/${EmpID}`).then((res) =>
      this.setState({
        employees: [
          ...this.state.employees.filter(
            (employee) => employee.EmpID !== EmpID
          ),
        ],
      })
    );
  }

  render() {
    console.log(this.state.employees);
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n    body {\n        color: #566787;\n\t\tbackground: #f5f5f5;\n\t\tfont-family: \'Varela Round\', sans-serif;\n\t\tfont-size: 13px;\n\t}\n\t.table-wrapper {\n        background: #fff;\n        padding: 20px 25px;\n        margin: 30px 0;\n\t\tborder-radius: 3px;\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    }\n\t.table-title {        \n\t\tpadding-bottom: 15px;\n\t\tbackground: #435d7d;\n\t\tcolor: #fff;\n\t\tpadding: 16px 30px;\n\t\tmargin: -20px -25px 10px;\n\t\tborder-radius: 3px 3px 0 0;\n    }\n    .table-title h2 {\n\t\tmargin: 5px 0 0;\n\t\tfont-size: 24px;\n\t}\n\t.table-title .btn-group {\n\t\tfloat: right;\n\t}\n\t.table-title .btn {\n\t\tcolor: #fff;\n\t\tfloat: right;\n\t\tfont-size: 13px;\n\t\tborder: none;\n\t\tmin-width: 50px;\n\t\tborder-radius: 2px;\n\t\tborder: none;\n\t\toutline: none !important;\n\t\tmargin-left: 10px;\n\t}\n\t.table-title .btn i {\n\t\tfloat: left;\n\t\tfont-size: 21px;\n\t\tmargin-right: 5px;\n\t}\n\t.table-title .btn span {\n\t\tfloat: left;\n\t\tmargin-top: 2px;\n\t}\n    table.table tr th, table.table tr td {\n        border-color: #e9e9e9;\n\t\tpadding: 12px 15px;\n\t\tvertical-align: middle;\n    }\n\ttable.table tr th:first-child {\n\t\twidth: 60px;\n\t}\n\ttable.table tr th:last-child {\n\t\twidth: 100px;\n\t}\n    table.table-striped tbody tr:nth-of-type(odd) {\n    \tbackground-color: #fcfcfc;\n\t}\n\ttable.table-striped.table-hover tbody tr:hover {\n\t\tbackground: #f5f5f5;\n\t}\n    table.table th i {\n        font-size: 13px;\n        margin: 0 5px;\n        cursor: pointer;\n    }\t\n    table.table td:last-child i {\n\t\topacity: 0.9;\n\t\tfont-size: 22px;\n        margin: 0 5px;\n    }\n\ttable.table td a {\n\t\tfont-weight: bold;\n\t\tcolor: #566787;\n\t\tdisplay: inline-block;\n\t\ttext-decoration: none;\n\t\toutline: none !important;\n\t}\n\ttable.table td a:hover {\n\t\tcolor: #2196F3;\n\t}\n\ttable.table td a.edit {\n        color: #FFC107;\n    }\n    table.table td a.delete {\n        color: #F44336;\n    }\n    table.table td i {\n        font-size: 19px;\n    }\n\ttable.table .avatar {\n\t\tborder-radius: 50%;\n\t\tvertical-align: middle;\n\t\tmargin-right: 10px;\n\t}\n    .pagination {\n        float: right;\n        margin: 0 0 5px;\n    }\n    .pagination li a {\n        border: none;\n        font-size: 13px;\n        min-width: 30px;\n        min-height: 30px;\n        color: #999;\n        margin: 0 2px;\n        line-height: 30px;\n        border-radius: 2px !important;\n        text-align: center;\n        padding: 0 6px;\n    }\n    .pagination li a:hover {\n        color: #666;\n    }\t\n    .pagination li.active a, .pagination li.active a.page-link {\n        background: #03A9F4;\n    }\n    .pagination li.active a:hover {        \n        background: #0397d6;\n    }\n\t.pagination li.disabled i {\n        color: #ccc;\n    }\n    .pagination li i {\n        font-size: 16px;\n        padding-top: 6px\n    }\n    .hint-text {\n        float: left;\n        margin-top: 10px;\n        font-size: 13px;\n    }    \n\t/* Custom checkbox */\n\t.custom-checkbox {\n\t\tposition: relative;\n\t}\n\t.custom-checkbox input[type="checkbox"] {    \n\t\topacity: 0;\n\t\tposition: absolute;\n\t\tmargin: 5px 0 0 3px;\n\t\tz-index: 9;\n\t}\n\t.custom-checkbox label:before{\n\t\twidth: 18px;\n\t\theight: 18px;\n\t}\n\t.custom-checkbox label:before {\n\t\tcontent: \'\';\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: text-top;\n\t\tbackground: white;\n\t\tborder: 1px solid #bbb;\n\t\tborder-radius: 2px;\n\t\tbox-sizing: border-box;\n\t\tz-index: 2;\n\t}\n\t.custom-checkbox input[type="checkbox"]:checked + label:after {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tleft: 6px;\n\t\ttop: 3px;\n\t\twidth: 6px;\n\t\theight: 11px;\n\t\tborder: solid #000;\n\t\tborder-width: 0 3px 3px 0;\n\t\ttransform: inherit;\n\t\tz-index: 3;\n\t\ttransform: rotateZ(45deg);\n\t}\n\t.custom-checkbox input[type="checkbox"]:checked + label:before {\n\t\tborder-color: #03A9F4;\n\t\tbackground: #03A9F4;\n\t}\n\t.custom-checkbox input[type="checkbox"]:checked + label:after {\n\t\tborder-color: #fff;\n\t}\n\t.custom-checkbox input[type="checkbox"]:disabled + label:before {\n\t\tcolor: #b8b8b8;\n\t\tcursor: auto;\n\t\tbox-shadow: none;\n\t\tbackground: #ddd;\n\t}\n\t/* Modal styles */\n\t.modal .modal-dialog {\n\t\tmax-width: 400px;\n\t}\n\t.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n\t\tpadding: 20px 30px;\n\t}\n\t.modal .modal-content {\n\t\tborder-radius: 3px;\n\t}\n\t.modal .modal-footer {\n\t\tbackground: #ecf0f1;\n\t\tborder-radius: 0 0 3px 3px;\n\t}\n    .modal .modal-title {\n        display: inline-block;\n    }\n\t.modal .form-control {\n\t\tborder-radius: 2px;\n\t\tbox-shadow: none;\n\t\tborder-color: #dddddd;\n\t}\n\t.modal textarea.form-control {\n\t\tresize: vertical;\n\t}\n\t.modal .btn {\n\t\tborder-radius: 2px;\n\t\tmin-width: 100px;\n\t}\t\n\t.modal form label {\n\t\tfont-weight: normal;\n\t}\t\n',
          }}
        />

        <div className="App">
          <AdminHead></AdminHead>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <div className="container">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-sm-6">
                          <h2>
                            Manage <b>Employees</b>
                          </h2>
                        </div>
                        <div className="col-sm-6">
                          <Link
                            to="/emp/add"
                            className="btn btn-success"
                            data-toggle="modal"
                          >
                            <i className="material-icons"></i>{" "}
                            <span>Add New Employee H</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Emp id</th>
                          <th>Name</th>
                          <th>EmpCode</th>
                          <th>Salary</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.employees.map((employees) => (
                          <tr key={employees.EmpID}>
                            <td>
                              <span className="custom-checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox1"
                                  name="options[]"
                                  defaultValue={1}
                                />
                                <label htmlFor="checkbox1" />
                              </span>
                            </td>
                            <td>{employees.EmpID}</td>
                            <td>{employees.Name}</td>
                            <td>{employees.EmpCode}</td>
                            <td>{employees.Salary}</td>
                            <td>
                              <Link
                                to={{
                                  pathname: "/emp/update",
                                  state: {
                                    id: employees.EmpID,
                                    name: employees.Name,
                                    empcode: employees.EmpCode,
                                    salary: employees.Salary,
                                  },
                                }}
                                href="#editEmployeeModal"
                                className="edit"
                                data-toggle="modal"
                              >
                                <i
                                  className="material-icons"
                                  data-toggle="tooltip"
                                  title="Edit"
                                >
                                  
                                </i>
                              </Link>
                              <a
                                href="#deleteEmployeeModal"
                                className="delete"
                                data-toggle="modal"
                                onClick={this.delete.bind(
                                  this,
                                  employees.EmpID
                                )}
                              >
                                <i
                                  className="material-icons"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  
                                </i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          />
        </div>
      </div>
    );
  }
}

export default AdminReq;
