document.addEventListener('keydown', function (event) {


    const user = document.getElementById ('userSpan');

    let textContent = user.textContent;

    user.textContent = "*" + textContent;

    if ( event.key === "Enter" ){

        alert ("enter");

    }

});