require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;

var url = process.env.url2;
var arrayCantCasos = [];
var arrayCantMuertos = [];
var arrayCantEdad1 = [];
var arrayCantEdad2 = [];
var arrayCantEdad3 = [];
var SexoF = [];
var SexoM = [];

let collections =
  ["Amazonas",
    "Antioquia",
    "Arauca",
    "ArchipiélagodeSanAndrésProvidenciaySantaCatalina",
    "Atlántico",
    "Bogotá",
    "Bolívar",
    "Boyacá",
    "Caldas",
    "Caquetá",
    "Casanare",
    "Cauca",
    "Cesar",
    "Chocó",
    "Cundinamarca",
    "Córdoba",
    "Guainía",
    "Guaviare",
    "Huila",
    "LaGuajira",
    "Magdalena",
    "Meta",
    "Nariño",
    "NortedeSantander",
    "Putumayo",
    "Quindío",
    "Risaralda",
    "Santander",
    "Sucre",
    "Tolima",
    "ValledelCauca",
    "Vaupés",
    "Vichada"];

MongoClient.connect(url, { useUnifiedTopology: true }, dataProcessing);

function dataProcessing(err, db) {
  if (err) throw err;
  var dbo = db.db("COVID_COLOMBIA");
  collections.forEach(c => {
    var d = dbo.collection(c).find({});
    arrayCantCasos.push(d.count());
    var d = dbo.collection(c).find({ Estado: "Fallecido" });
    arrayCantMuertos.push(d.count());
    var d = dbo.collection(c).find({ Edad: { $lt: "31" } });
    arrayCantEdad1.push(d.count());
    var d = dbo.collection(c).find({ $and: [{ Edad: { $gt: "30" } }, { Edad: { $lt: "61" } }] });
    arrayCantEdad2.push(d.count());
    var d = dbo.collection(c).find({ Edad: { $gt: "60" } });
    arrayCantEdad3.push(d.count());
    var d = dbo.collection(c).find({ Sexo: "F" });
    SexoF.push(d.count());
    var d = dbo.collection(c).find({ Sexo: "M" });
    SexoM.push(d.count());
  });
  arrayCantMuertos.forEach(element => {
    element.then(d => {
      console.log(d);
    });
  });
  db.close();
}

