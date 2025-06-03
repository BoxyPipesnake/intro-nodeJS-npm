const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas

planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Tipo: ${planeta.tipo}`);
  console.log(`Distancia desde la Tierra: ${planeta.distanciaDesdeLaTierra}`);
  console.log(`Temperatura promedio: ${planeta.temperaturaPromedio}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});