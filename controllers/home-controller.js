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

    // createOneLiner : async (req, res) => {
    //     const addOneLiner = new quotes(
    //         {
    //             quote: req.body.quote,
    //             name: req.body.name
    //         }
    //     )
    //     try {
    //         await addOneLiner.save()
    //         console.log(addOneLiner)
    //         res.redirect('/')
    //     } catch (err) {
    //         if (err) return res.status(500).send(err)
    //         res.redirect('/')
    //     }
    //     }

}