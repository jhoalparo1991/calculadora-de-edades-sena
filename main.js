let btnCalcular = document.querySelector("#calcular");
let alerta = document.querySelector("#alert");
let age01 = document.querySelector("#age01");
let age02 = document.querySelector("#age02");
let age03 = document.querySelector("#age03");
let age04 = document.querySelector("#age04");
let age05 = document.querySelector("#age05");
let age06 = document.querySelector("#age06");
let age07 = document.querySelector("#age07");
let age08 = document.querySelector("#age08");
let age09 = document.querySelector("#age09");
let age10 = document.querySelector("#age10");

let seccionResultados = document.querySelector("#resultados");

// let menoresEdad = document.querySelector("#menores");
// let mayoresEdad = document.querySelector("#mayores");
// let adultosMayores = document.querySelector("#adultos");
// let edadBaja = document.querySelector("#menor_edad");
// let edadAlta = document.querySelector("#mayor_edad");
// let promedioEdades = document.querySelector("#promedio");

mostrarResultados([0, 0, 0, 0, 0, 0]);

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  analisarDatos(
    age01.value,
    age02.value,
    age03.value,
    age04.value,
    age05.value,
    age06.value,
    age07.value,
    age08.value,
    age09.value,
    age10.value
  );
});

function analisarDatos(
  age01,
  age02,
  age03,
  age04,
  age05,
  age06,
  age07,
  age08,
  age09,
  age10
) {
  age01 = Number(age01);
  age02 = Number(age02);
  age03 = Number(age03);
  age04 = Number(age04);
  age05 = Number(age05);
  age06 = Number(age06);
  age07 = Number(age07);
  age08 = Number(age08);
  age09 = Number(age09);
  age10 = Number(age10);

  arrAge = [
    age01,
    age02,
    age03,
    age04,
    age05,
    age06,
    age07,
    age08,
    age09,
    age10,
  ];

  for (let i = 0; i < arrAge.length; i++) {
    if (arrAge[i] < 1 || arrAge[i] > 120) {
      alerta.style.display = "block";
      alerta.innerText = "La edad debe estar entre 1 y 120 años";
      setTimeout(() => {
        alerta.style.display = "none";
      }, 3000);
      return;
    }
  }

  arrAge.sort((a, b) => a - b);

  let menoresEdad = arrAge.filter((x) => x < 18).length;
  let mayoresEdad = arrAge.filter((x) => x >= 18 && x < 60).length;
  let adultoMayor = arrAge.filter((x) => x >= 60).length;

  let edadMasBaja = arrAge[0];
  let edadMasAlta = arrAge[arrAge.length - 1];

  promedioEdad = calcularPromedio(arrAge);

  //   menoresEdad.value = "Menores de edad : " + menoresEdad;
  //   mayoresEdad.value = "Mayores de edad : " + mayoresEdad;
  //   adultosMayores.value = "Adultos mayores : " + adultoMayor;
  //   edadBaja.value = "La edad mas baja : " + edadMasBaja;
  //   edadAlta.value = "La edad mas alta : " + edadMasAlta;
  //   promedioEdades.value = "Promedio : " + promedioEdad;
  mostrarResultados([
    menoresEdad,
    mayoresEdad,
    adultoMayor,
    edadMasBaja,
    edadMasAlta,
    promedioEdad,
  ]);
  console.log("menores ", menoresEdad);
  console.log("mayores ", mayoresEdad);
  console.log("adultos ", adultoMayor);
  console.log("menor edad ", edadMasBaja);
  console.log("mayor edad ", edadMasAlta);
  console.log("promedio ", promedioEdad);
}

function calcularPromedio(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

function mostrarResultados(data = []) {
  seccionResultados.innerHTML = "";

  let pMenores = document.createElement("p");
  pMenores.id = "menores";
  pMenores.innerText = "Número de personas menores de edad " + data[0];
  let pMayores = document.createElement("p");
  pMayores.id = "mayores";
  pMayores.innerText = "Número de personas mayores de edad " + data[1];
  let pAdultos = document.createElement("p");
  pAdultos.id = "adultos";
  pAdultos.innerText = "Número de adultos mayores " + data[2];
  let pMenorEdad = document.createElement("p");
  pMenorEdad.id = "menor_edad";
  pMenorEdad.innerText = "La edad más baja es de " + data[3] + " años";
  let pMayorEdad = document.createElement("p");
  pMayorEdad.id = "mayor_edad";
  pMayorEdad.innerText = "La edad más alta es de " + data[4] + " años";
  let pPromedioEdades = document.createElement("p");
  pPromedioEdades.id = "promedio";
  pPromedioEdades.innerText = "el promedio de edad es " + data[5] + " años";

  seccionResultados.appendChild(pMenores);
  seccionResultados.appendChild(pMayores);
  seccionResultados.appendChild(pAdultos);
  seccionResultados.appendChild(pMenorEdad);
  seccionResultados.appendChild(pMayorEdad);
  seccionResultados.appendChild(pPromedioEdades);
}
