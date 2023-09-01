const fs = require("fs"); //TODO: ver la otra forma con imports
const path = "./data/inventors.json";



//escribir archivos
let inventors = read();


//create


console.log(inventors.filter((inventor) => inventor.first == "Albert"));


// Ejercicio
// TODO: CRUD Inventors Create Read Update Delete (o el ABM)
function read(){
   

    // cadena de texto
    let inventorsStr = fs.readFileSync(path, "utf-8");
    
    // array de objetos
    let inventors = JSON.parse(inventorsStr);
    return inventors
}

function write(){
    fs.writeFileSync(path, JSON.stringify(inventors, null, " "));
}

function crear(inventor, inventors){
    return inventors.push(inventor);
}

function actualizar(inventor, inventors){
return inventors[inventors.findIndex(i=> i._id== inventor._id)] = inventor;
}

function borrar(id, inventors){
    let index = inventors.findIndex(inventor => inventor._id== id);
    return inventors.splice(index, 1);
}

//console.log(inventors.filter(inventor => inventor.first == 'Albert'));