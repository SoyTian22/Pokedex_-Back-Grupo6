const express = require('express');
const { types } = require('pg');
const router = express.Router();
const pokemonQueries = require('../controllers/pokemon')
const pokeMovesQueries = require('../controllers/pokemon_moves')


router.get('/' , async (req, res) => {
    const pokemon = await pokemonQueries.getAllItems();
    res.json(pokemon)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    await pokemonQueries.getItemById(id).then(response=> {return res.json({pokemon:response})})
    .catch (error=> {return res.status(400).json({error:error})
})
   
   
})
router.post('/' , async (req, res) => {
    const body = req.body
    await pokemonQueries.createItem(body).then(response=> {return res.json({response:response})})
    .catch (error=> {return res.status(400).json({error:error})

})
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    await pokemonQueries.updateItem(id, body)
    .then(response=> {res.json({response:response})})
    .catch (error=> {return res.status(400).json({error:error})
    
})
})


router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    await pokemonQueries.deleteItem(id)
    .then(response=> {res.json({response:response})})
    .catch (error=> {return res.status(400).json({error:error})
   
})
})

module.exports = router;