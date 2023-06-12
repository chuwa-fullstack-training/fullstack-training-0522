module.exports = {
    getAllUsers: (req, res) => {
      let type1 = req.query.query1;
      let type2 = req.query.query2;
      console.log(type1);
      res.json(type1+type2);
    }
  };