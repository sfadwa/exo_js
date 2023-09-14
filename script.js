let button = document.querySelector('.myButton');
let button2 = document.querySelector('#back')


button.addEventListener("click", function () {
    let champ1 = document.getElementById("ligne1");
    console.log(champ1);
    champ1.style.display = "none";


    let champ3 = document.getElementById("ligne3");
    console.log(champ3);
    champ3.style.display = "none";

    let champ4 = document.getElementById("ligne4");
    console.log(champ4);
    champ4.style.display = "none";


    let champ6 = document.getElementById("ligne6");
    console.log(champ6);
    champ6.style.display = "flex";

    button.style.display = "none";

    button2.style.display = "flex";



});

