const foodChoice = require('../models/food')

module.exports = {
    getEdit : (req, res) => {
        const id = req.params.id
        foodChoice.find({}, (err, oneItem) => {
            res.render('edit.ejs', {foodChoice: oneItem, idfood: id})
        })
    },
    deleteFood : (req,res) => {
        const id = req.params.id
        foodChoice.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect('/')
        })
    },
    updateFood : (req,res) => {
        const id = req.params.id
        foodChoice.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                date: req.body.date
            },
            err => {
                if(err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}