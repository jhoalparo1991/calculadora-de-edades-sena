let btnCalcular = document.querySelector("#calcular");
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



btnCalcular.addEventListener('click', e => {
    e.preventDefault()

    analisarDatos(age01.value,age02.value,age03.value,age04.value,age05.value,age06.value,age07.value,age08.value,age09.value,age10.value);

})


function analisarDatos(age01,age02,age03,age04,age05,age06,age07,age08,age09,age10){
    age01 = Number(age01)
    age02 = Number(age02)
    age03 = Number(age03)
    age04 = Number(age04)
    age05 = Number(age05)
    age06 = Number(age06)
    age07 = Number(age07)
    age08 = Number(age08)
    age09 = Number(age09)
    age10 = Number(age10)

    arrAge = [age01,age02,age03,age04,age05,age06,age07,age08,age09,age10]

    for(let i = 0; i < arrAge.length; i++){
        if(arrAge[i] < 1 || arrAge[i] > 120){
            console.log('La edad debe estar entre 1 y 120 años');
            return;
        }
    }

    arrAge.sort((a,b) => a - b)

    let menoresEdad = arrAge.filter( x => x < 18).length
    let mayoresEdad = arrAge.filter( x => x >= 18 && x < 60).length
    let adultoMayor = arrAge.filter( x => x >= 60).length

    let edadMasBaja = arrAge[0]
    let edadMasAlta = arrAge[arrAge.length-1]


    console.log("menores ", menoresEdad);
    console.log("mayores ", mayoresEdad);
    console.log("adultos ", adultoMayor);
    console.log("menor edad ", edadMasBaja);
    console.log("mayor edad ", edadMasAlta);

    promedio = calcularPromedio(arrAge)
    console.log('Promedio ', promedio);

}

function calcularPromedio(arr){
    return arr.reduce((a,b)=> a+b) / arr.length
}

