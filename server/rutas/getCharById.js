const axios = require('axios')


const getCharById = (req, res) => {
     let id = req.params.id
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-LuloSammartino`)
     .then(({data}) => { return res.status(200).json(data)})
    
    // return res.writehead(200, {"Content-type" : "application/json"}).end(JSON.stringify)
    .catch( (error) => {
        return res.status(500).send(error.message)
    })
}

module.exports={
    getCharById
}