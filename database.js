require('dotenv').config();

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = process.env.url2
let departamentos = ["Amazonas",
  "Antioquia",
  "Arauca",
  "Archipiélago de San Andrés Providencia y Santa Catalina",
  "Atlántico",
  "Barranquilla D.E.",
  "Bogotá D.C.",
  "Bolívar",
  "Boyacá",
  "Buenaventura D.E.",
  "Caldas",
  "Caquetá",
  "Cartagena D.T. y C.",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Cundinamarca",
  "Córdoba",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "Santa Marta D.T. y C.",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada"]

MongoClient.connect(url, { useUnifiedTopology: true }, dataProcessing);

function dataProcessing(err, db) {
  if (err) throw err;
  var dbo = db.db("CovidInfo");
  casosDept = [];
  for (let i = 0; i < departamentos.length; i++) {
    const element = departamentos[i];
    dbo.collection("personInfo").find({ nombre_depa: element }).count()
      .then(casos => {
        casosDept[i] = parseInt(casos);
        console.log("Número de casos en " + element + " es: ", casos);
      }).catch((e) => {
        console.log('handle error here: ', e.message);
      });
  }
  for (let i = 0; i < departamentos.length; i++) {
    const element = departamentos[i];
    dbo.collection("personInfo").find({'Fecha_muerte':''}).count()
      .then(muertos => {
        console.log(muertos)
        console.log("Número de Muertos en " + element + " es: ", casosDept[i] - muertos);
      }).catch((e) => {
        console.log('handle error here: ', e.message);
      });
  }
  db.close();
};

