const router = require('express').Router();
const Company = require('../models/Company');

router.get('/companies', (req, res) => {
    Company.find().then((companies) => {
        res.status(200).json(companies);
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    });
});

router.get('/companies/:id', (req, res) => {
    Company.findById(req.params?.id).then((company) => {
        res.status(200).json(company);
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    });
});

router.post('/companies', (req, res) => {
    const company = new Company(req.body);
    company.save().then(() => {
        res.status(201).json({ message: 'Company created' });
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    });
});

router.put('/companies/:id', (req, res) => {
    Company.findById(req.params?.id).then((company) => {
        if (company) {
            for (prop in req.body) {
                company[prop] = req.body[prop];
                // TODO: avoid updating props that should not be directly updated (eg employees)
            }
            return company.save().then(() => {
                res.status(200).json(company);
            });
        } else {
            res.status(404).json({ message: 'Company not found' });
        }
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    })
});

router.delete('/companies/:id', (req, res) => {
    Company.findByIdAndDelete(req.params?.id).then(() => {
        res.status(204).json({ message: 'Company deleted' });
    }).catch(err => {
        res.status(500).json({ message: 'Server Error' });
    })
});

module.exports = router;
