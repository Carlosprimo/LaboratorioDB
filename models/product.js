const connection = require('./connection');

const init = async () => {
  const db = await connection(); // obtenemos la conexión
  await db.collection('user').find();
};

init();