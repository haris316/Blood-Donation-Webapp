 const mysql = require('mysql');
const express = require('express');
const jwt = require('jsonwebtoken');
var app = express();
var cors = require('cors');
app.use(cors());
const bodyparser = require('body-parser');
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Majinvegeta316',
    database: 'webapp',
    multipleStatements: true

});
mysqlConnection.connect((err) => {
    if (!err) {
        console.log('database is working fine')
    }
    else
        console.log(err, + JSON.stringify(err, undefined, 2));
});
app.listen(4000, () => console.log('Express server is running at port 4000'));


app.get("/types", (req, res) => {
    mysqlConnection.query("Select * from usertype", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });
  
  app.post("/asdf", (req, res) => {
    let emp = req.body;
    var sql = "INSERT INTO type(UserRoleID,UserName) VALUES (?,?);";
    mysqlConnection.query(
      sql,
      [emp.UserRoleID, emp.UserName],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.post("/loginauth", (req, res) => {
    let emp = req.body;
  
    mysqlConnection.query(
      "SELECT * FROM user WHERE Email=? and Password =?",
      [emp.Email, emp.Password],
      (err, rows, fields) => {
        if (rows.length > 0) {
          res.send("Success");
        } else {
          res.send("Fail");
        }
      }
    );
  });
  
  app.post("/reservation", (req, res) => {
    let emp = req.body;
    mysqlConnection.query(
      "INSERT INTO request(UserID,BloodTag,Status,Location,Donorcount,Dateofrequest,Cause,Blood_type) VALUES(?,?,?,?,?,?,?,?)",
      [
        emp.UserID,
        emp.BloodTag,
        emp.Status,
        emp.Location,
        emp.Donorcount,
        emp.Dateofrequest,
        emp.Cause,
        emp.Bloodtype,
        [emp.Email],
      ],
      (err, rows, fields) => {
        if (!err) {
          res.send("Success");
        } else {
          console.log(err);
        }
      }
    );
  });
  
  app.post("/showall", (req, res) => {
    let emp = req.body;
  
    mysqlConnection.query(
      "SELECT * FROM request where Status = 'Incomplete'",
      [emp.BloodTag],
      (err, rows, fields) => {
        if (rows.length > 0) {
          console.log(rows);
          res.send(rows);
        } else {
          res.send("No blood type found");
        }
      }
    );
  });
  
  app.post("/show", (req, res) => {
    let emp = req.body;
    sql = "SELECT * FROM request WHERE BloodTag Like ? AND Status = 'Incomplete'";
  
    mysqlConnection.query(sql, emp.BloodTag + "%", (err, rows, fields) => {
      if (rows.length > 0) {
        res.send(rows);
      } else {
        res.send("No blood type found");
      }
    });
  });
  //Registration
  
  app.post("/signupp", (req, res) => {
    let emp = req.body;
    var sql =
      "INSERT INTO user(FirstName,LastName,Gender,BloodTag,Age,Address,ContactNo,Email,Password) VALUES (?,?,?,?,?,?,?,?,?);";
    mysqlConnection.query(
      sql,
      [
        emp.FirstName,
        emp.LastName,
        emp.Gender,
        emp.BloodTag,
        emp.Age,
        emp.Address,
        emp.ContactNo,
        emp.Email,
        emp.Password,
      ],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.post("/log", (req, res) => {
    let emp = req.body;
  
    mysqlConnection.query(
      "SELECT * FROM user WHERE Email=? and Password =?",
      [emp.Email, emp.Password],
      (err, row, fields) => {
        if (row.length > 0) {
          var a = row[0].UserID;
          var b = row[0].FirstName;
          if (row[0].UserRoleID == 23) {
           
            const user = {
              id: row[0].UserID,
              email: emp.email,
              name: row[0].FirstName,
            };
            jwt.sign({ user }, "secretkey", (err, token) => {
              var status1 = "customer";
              res.json({ token, status1, a,b });
            });
          } else if (row[0].UserRoleID == 0) {
            console.log(row);
            const user = {
              id: row[0].UserID,
              email: emp.email,
              name: row[0].FirstName,
            };
            jwt.sign({ user }, "adminkey", (err, token) => {
              var status1 = "Admin";
              res.json({ token, status1, a,b});
            });
          }
        } else {
          console.log(emp.email);
          console.log(emp.password);
          var status1 = "false";
          res.json(status1);
        }
      }
    );
  });
  
  function verifytoken(req, res, next) {
    const bearerheader = req.headers["authorization"];
    if (typeof bearerheader !== "undefined") {
      const arr = bearerheader.split(" ");
      req.token = arr[1];
      next();
    } else res.sendStatus(403);
  }
  app.post("/authen", verifytoken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, dataa) => {
      if (!err) {
        res.json({
          statement: "Accesss Granted",
          dataa,
        });
      } else {
        res.sendStatus(403);
      }
    });
  });
  app.get("/profile", (req, res) => {
    mysqlConnection.query("Select * from user", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });
  
  app.post("/userdetails", (req, res) => {
    let emp = req.body;
  
    mysqlConnection.query(
      "SELECT * FROM user where UserID =?",
      [emp.id],
      (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          if (rows.length > 0) {
            console.log(rows);
            res.send(rows);
          } else {
            console.log(emp.id);
            res.send("No blood type found");
          }
        }
      }
    );
  });
  app.get("/adminemp", (req, res) => {
    mysqlConnection.query(
      "Select * from employee",
      [req.params.code],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.delete("/deladminemp/:id", (req, res) => {
    mysqlConnection.query(
      "Delete from employee where EmpID = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.post("/addemp", (req, res) => {
    let emp = req.body;
    var sql = "INSERT INTO employee(Name,EmpCode,Salary) VALUES (?,?,?);";
    mysqlConnection.query(
      sql,
      [emp.Name, emp.EmpCode, emp.Salary],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  app.put("/updateemp", (req, res) => {
    let emp = req.body;
    var sql = "Update employee SET Name=?,EmpCode=?,Salary=? Where EmpID=?";
    mysqlConnection.query(
      sql,
      [emp.Name, emp.EmpCode, emp.Salary, emp.id],
      (err, rows, fields) => {
        if (!err) {
          console.log(emp.Name);
          console.log(emp.id);
          console.log(rows);
          res.send(rows);
        } else console.log(err);
      }
    );
  });
  
  //AdminRequest
  
  app.get("/adminreq", (req, res) => {
    mysqlConnection.query(
      "Select * from request",
      [req.params.code],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.delete("/deladminreq/:id", (req, res) => {
    mysqlConnection.query(
      "Delete from request where BloodrequestID = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.post("/addreq", (req, res) => {
    let emp = req.body;
    var sql =
      "INSERT INTO request(BloodTag,Status,Location, Donorcount, Dateofrequest) VALUES (?,?,?,?,?);";
    mysqlConnection.query(
      sql,
      [emp.BloodTag, emp.Status, emp.Location, emp.Donorcount, emp.Dateofrequest],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.put("/updatereq", (req, res) => {
    let emp = req.body;
    var sql =
      "Update request SET BloodTag=?,Status=?,Location=?, Donorcount=?, Dateofrequest = ? Where BloodrequestID=?";
    mysqlConnection.query(
      sql,
      [
        emp.BloodTag,
        emp.Status,
        emp.Location,
        emp.Donorcount,
        emp.Dateofrequest,
        emp.BloodrequestID,
      ],
      (err, rows, fields) => {
        if (!err) {
          //console.log(emp.Name);
          //console.log(emp.id);
          console.log(rows);
          res.send(rows);
        } else console.log(err);
      }
    );
  });
  
  //Admin User
  app.get("/adminuser", (req, res) => {
    mysqlConnection.query(
      "Select * from user",
      [req.params.code],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.delete("/deladminuser/:id", (req, res) => {
    mysqlConnection.query(
      "Delete from user where UserID = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.post("/adduser", (req, res) => {
    let emp = req.body;
    var sql =
      "INSERT INTO user(UserRoleID,BloodTag,Address, Age, Status, FirstName, LastName, Gender, ContactNo, Email, Password) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
    mysqlConnection.query(
      sql,
      [
        emp.UserRoleID,
        emp.BloodTag,
        emp.Address,
        emp.Age,
        emp.Status,
        emp.FirstName,
        emp.Lastname,
        emp.Gender,
        emp.ContactNo,
        emp.Email,
        emp.Password,
      ],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.put("/updateuser", (req, res) => {
    let emp = req.body;
    var sql =
      "Update user SET UserRoleID=?,BloodTag=?,Address=?, Age=?, Status=?, FirstName=?, LastName = ?, Gender=?, ContactNo=?, Email = ?, Password = ? Where UserID=?";
    mysqlConnection.query(
      sql,
      [
        emp.UserRoleID,
        emp.BloodTag,
        emp.Address,
        emp.Age,
        emp.Status,
        emp.FirstName,
        emp.LastName,
        emp.Gender,
        emp.ContactNo,
        emp.Email,
        emp.Password,
        emp.UserID,
      ],
      (err, rows, fields) => {
        if (!err) {
          //console.log(emp.Name);
          //console.log(emp.id);
          console.log(rows);
          res.send(rows);
        } else console.log(err);
      }
    );
  });
  
  //yourreq
  app.get("/yourreq", (req, res) => {
    mysqlConnection.query(
      "Select a.BloodTag , a.Status, a.Location, a.Donorcount, a.Cause, a.Dateofrequest, a.Blood_type from request a where a.UserID = (Select UserID from user where Email = ? )",
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.post("/apnireq", (req, res) => {
    let emp = req.body;
    sql ="Select a.BloodTag , a.Status, a.Location, a.Donorcount, a.Cause, a.Dateofrequest, a.Blood_type, a.UserID, a.BloodrequestID from request a where a.UserID = (Select UserID from user where Email = ? )";
    mysqlConnection.query(sql, emp.Email, (err, rows, fields) => {
      if (rows.length>0) {
        res.send(rows);
      } else {
        res.send("No blood type found");
      }
    });
  });
  
  app.post("/reqcomp/:id", (req, res) => {
    mysqlConnection.query(
      "Update request Set Status = 'Complete' where BloodrequestID = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  app.put("/updateprofile", (req, res) => {
    let emp = req.body;
    var sql =
      "Update user SET Address=?, Age=?, FirstName=?, Gender=?, ContactNo=?, Email = ?, Password = ? Where UserID=?";
    mysqlConnection.query(
      sql,
    [
        emp.Address,
        emp.Age,
        emp.FirstName,
        emp.Gender,
        emp.ContactNo,
        emp.Email,
        emp.Password,
        emp.UserID,
      ],
      (err, rows, fields) => {
        if (!err) {
          console.log(emp.Name);
          console.log(emp.id);
          console.log(rows);
          res.send(rows);
        } else console.log(err);
      }
    );
  });