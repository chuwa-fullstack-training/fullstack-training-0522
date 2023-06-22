const router = require('express').Router();
const Employee = require('../models/Employee');
const Company = require('../models/Company');

router.get('/employees', (req, res) => {
    Employee.find().then((employees) => {
        res.status(200).json(employees);
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    });
});

router.get('/employees/:id', (req, res) => {
    Employee.findById(req.params?.id).then((employee) => {
        res.status(200).json(employee);
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    });
});

router.get('/companies/:id/employees', (req, res) => {
    Employee.find({ company: req.params?.id }).then((employees) => {
        res.status(200).json(employees);
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    });

});

router.post('/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        let company = null;
        if (employee.company) {
            company = await Company.findById(employee.company);
        }
        await employee.save();
        if (company) {
            company.employees.push(employee._id);
            await company.save();
            // TODO: keep employees of company updated during employee update/delete
        }
        res.status(201).json({ message: 'Employee created' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.put('/employees/:id', (req, res) => {
    Employee.findById(req.params?.id).then((employee) => {
        if (employee) {
            for (prop in req.body) {
                employee[prop] = req.body[prop];
                // TODO: avoid updating props that should not be directly updated (eg employees)
            }
            return employee.save().then(() => {
                res.status(200).json(employee);
            });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    })
});

router.delete('/employees/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params?.id).then(() => {
        res.status(204).json({ message: 'Employee deleted' });
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    })
});

module.exports = router;
