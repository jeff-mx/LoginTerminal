var stage = 0;

document.addEventListener('keydown', function (event) {

    let element;
    let textContent;

    if ( stage === 0 ){   
        element = document.getElementById ('userSpan');
    }else if ( stage === 1 ){
        element = document.getElementById ('passSpan');
    }

    textContent = element.textContent;
    
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90)){
        
        if ( stage === 0 ){
            element.textContent = textContent + event.key;
        }else if ( stage === 1){
            element.textContent = textContent + "*";
        }
    
    }else if ( event.key === "Enter" ){

        if ( stage === 0 ){
            document.getElementById ('passInput').classList.toggle('hiden');
            stage = 1;
        }else if ( stage === 1 ){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = '<p>login attemp failed</p>';
            document.body.appendChild(newDiv);

            setTimeout ( function (){

                resetForm ();

            } , 2000 );
        }

    }else if ( event.key === "Escape" ){

        resetForm ();
        
    }

    //user.remove ( document.getElementById ('cursor') );

});

function resetForm (){

    document.getElementById ('userSpan').textContent="";
    document.getElementById ('passSpan').textContent="";
    stage = 0;
    document.getElementById ('passInput').classList.add('hiden');

}