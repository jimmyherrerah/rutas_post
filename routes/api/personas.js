var express = require ('express');
var router = express.Router();
var uuid = require('uuid/v4')
var personsaCollection = [];

var personaStruct = {
	id:0,
	clase:'',
	seccion:'',
	cupos:'',
	docente:''
}	


personsaCollection.push(
	Object.assign(
		{},
		personaStruct,
		{
			id:uuid(),
			clase:'Seminario',
			seccion:'1801',
			cupos:'0',
			docente:'Orlando'
		})

	);

router.get('/', (req, res, next)=>{
	res.status(403).json(personsaCollection);

});//get

router.post('/', (req, res, next)=>{
	var newPersona = Object.assign(
		{},
		personaStruct,
		{id:uuid()},
		req.body
		);
		personsaCollection.push(newPersona);
		res.status(200).json(newPersona);
});//post


module.exports = router;