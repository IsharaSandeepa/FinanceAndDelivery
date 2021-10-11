const router = require("express").Router();
let Employee = require("../models/Employee.model");

router.route("/").get((req, res) => {
    Employee.find()
        .then((Employee) => res.json(Employee))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const EmpID = req.body.EmpID;
    const Empname = req.body.Empname;
    const Amount = req.body.Amount;
    const Date = req.body.Date;
    const Contactno = req.body.Contactno;
    const Email = req.body.Email;
  

    const newEmployee = new Employee({
        EmpID,
        Empname,
        Amount,
        Date,
        Contactno,
        Email,
      
    });

    newEmployee
        .save()
        .then(() => res.json("Employee Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Employee.findById(req.params.id)
        .then((Employee) => res.json(Employee))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Employee.findById(req.params.id)
        .then((Employee) => {
            Employee.EmpID = req.body.EmpID;
            Employee.Empname = req.body.Empname;
            Employee.Amount = req.body.Amount;
            Employee.Date = req.body.Date;
            Employee.Contactno = req.body.Contactno;
            Employee.Email = req.body.Email;
           

            Employee.save()
                .then(() => res.json("Employee updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json("Employee deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;