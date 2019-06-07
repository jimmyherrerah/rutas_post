// Cargar modulos y crear nueva aplicacion
var express = require("express"); 
var router = express.Router();
var app = express();
var personaCollection = [];
var personaStruct = {
	id:0,
	nombre:'',
	correo:'',
	telefono:''
}

router.get('/', (req, res, next)=>{
	res.status(403).json({msg: "not implemented"});

});

router.post('/', (req, res, next)=>{
	res.status(403).json({msg: "not implemented"});
});