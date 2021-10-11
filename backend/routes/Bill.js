const router = require("express").Router();
let Bill = require("../models/Bill.model");

router.route("/").get((req, res) => {
    Bill.find()
        .then((Bill) => res.json(Bill))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const CusID = req.body.CusID;
    const Firstname = req.body.Firstname;
    const Lastname = req.body.Lastname;
    const Billdate = req.body.Billdate;
    const Billamount = req.body.Billamount;
    const Bank = req.body.Bank;
    const Branch = req.body.Branch;
    const Contactno = req.body.Contactno;
    const Email = req.body.Email;

    const newBill = new Bill({
        CusID,
        Firstname,
        Lastname,
        Billdate,
        Billamount,
        Bank,
        Branch,
        Contactno,
        Email,
    });

    newBill
        .save()
        .then(() => res.json("Payment Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Bill.findById(req.params.id)
        .then((Bill) => res.json(Bill))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Bill.findById(req.params.id)
        .then((Bill) => {
            Bill.CusID = req.body.CusID;
            Bill.Firstname = req.body.Firstname;
            Bill.Lastname = req.body.Lastname;
            Bill.Billdate = req.body.Billdate;
            Bill.Billamount = req.body.Billamount;
            Bill.Branch = req.body.Branch;
            Bill.Contactno = req.body.Contactno;
            Bill.Email = req.body.Email;

            Bill.save()
                .then(() => res.json("Payment updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Bill.findByIdAndDelete(req.params.id)
        .then(() => res.json("Payment deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;