/* function obtenerArea() {
  var areaResultado = document.getElementById("areaResultado");
  var textResultado = document.getElementById("textarea1");
  var b = parseInt(document.getElementById("base").value);
  var h = parseInt(document.getElementById("altura").value);
  var area = (b * h) / 2;
  areaResultado.innerHTML = "" + area;
  textResultado.value = area;
}
 */

function capturar(e) {
  /* function calcular(dt1, dt2, dt3, resultado) {
    this.dt1 = dt1;
    this.dt2 = dt2;
    this.dt3 = dt3;
    this.resultado = resultado;
  } */
  let bace = document.getElementById("bace").value;
  let altura = document.getElementById("altura").value;

  let result = (parseFloat(altura) * parseFloat(bace)) / 2;
  /* let obje = new calcular(tiempo, distacia, result);
  console.log(obje); */

  const imprimir = document.getElementById("result");
  imprimir.textContent = `El area es: ${result}`;
}
