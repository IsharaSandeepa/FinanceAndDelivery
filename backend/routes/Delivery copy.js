const router = require("express").Router();
let Delivery = require("../models/Delivery.model copy");

router.route("/").get((req, res) => {
    Delivery.find()
        .then((Delivery) => res.json(Delivery))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const Fisrtname = req.body.Fisrtname;
    const Lastname = req.body.Lastname;
    const Address = req.body.Address;
    const Birthday = req.body.Birthday;
    const Gender = req.body.Gender;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    

    const newDelivery = new Delivery({
        Fisrtname,
        Lastname,
        Address,
        Birthday,
        Gender,
        Email,
        PhoneNumber,

       
      
    });

    newDelivery
        .save()
        .then(() => res.json("Delivery Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Delivery.findById(req.params.id)
        .then((Delivery) => res.json(Delivery))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Delivery.findById(req.params.id)
        .then((Delivery) => {
            Delivery.Fisrtname = req.body.Fisrtname;
            Delivery.Lastname = req.body.Lastname;
            Delivery.Address = req.body.Address;
            Delivery.Birthday = req.body.Birthday;
            Delivery.Gender = req.body.Gender;
            Delivery.Email = req.body.Email;
            Delivery.PhoneNumber = req.body.PhoneNumber;

            Delivery.save()
                .then(() => res.json("Delivery updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Delivery.findByIdAndDelete(req.params.id)
        .then(() => res.json("Delivery deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;