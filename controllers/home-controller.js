const food = require('../models/food')

module.exports = {
    getIndex : async (req, res) => {
        try{
            const fooditem = await
            food.find()
            res.render('index.ejs', { food: fooditem })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },

    createFoodItem : async (req, res) => {
        const addFoodItem = new food(
            {
                title: req.body.title
            }
        )
        try {
            await addFoodItem.save()
            console.log(addFoodItem)
            res.redirect('/')
        } catch (err) {
            if (err) return res.status(500).send(err)
            res.redirect('/')
        }
        }

}