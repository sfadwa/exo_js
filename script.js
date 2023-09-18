let button = document.querySelector('.myButton');
let button2 = document.querySelector('#back')


button.addEventListener("click", function () {
    let champ1 = document.getElementById("ligne1");

    champ1.style.display = "none";


    let champ3 = document.getElementById("ligne3");

    champ3.style.display = "none";

    let champ4 = document.getElementById("ligne4");

    champ4.style.display = "none";


    let champ6 = document.getElementById("ligne6");

    champ6.style.display = "flex";

    button.style.display = "none";

    button2.style.display = "flex";

    let input1 = document.getElementById("User").value;


    let input2 = document.getElementById("name").value;


    let input3 = document.getElementById("doc").value;


    let input4 = document.getElementById("doss").value;


    let scp = `scp -r /${input3}/installer.php ${input1}@ssh.cluster030.hosting.ovh.net:~/${input4} && scp -r /${input3}/${input2} ${input1}@ssh.cluster030.hosting.ovh.net:~/${input4}`

    document.getElementById("doss").value = scp;


});

button2.addEventListener("click", function () {
    window.location.reload();
    history.back();

})


