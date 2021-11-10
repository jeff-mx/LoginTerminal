var stage = 0;
var enableFlag = true;

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
        
        if ( textContent.length < 10 ){

            if ( stage === 0 ){
                element.textContent = textContent + event.key;
            }else if ( stage === 1){
                element.textContent = textContent + "*";
            }
        
        }
    
    }else if ( event.key === "Enter" && textContent.length > 0 ){

        if ( stage === 0 ){
            
            document.getElementById ('passInput').classList.toggle('hiden');
            document.getElementById ("cursor").remove();

            createCursor( "passInput" );

            stage = 1;

        }else if ( stage === 1 && enableFlag ){
            
            enableFlag = false;
            document.getElementById ("cursor").remove();

            let newDiv = document.createElement("div");
            newDiv.setAttribute ("id", "alert");
            newDiv.innerHTML = '<p>Login attempt failed</p>';
            document.body.appendChild(newDiv);

            setTimeout ( function (){

                resetForm ();
                document.getElementById ("alert").remove();
                createCursor( "userInput" );

                enableFlag = true;

            } , 2000 );

        }

    }else if ( event.key === "Escape" ){

        resetForm ();
        
    }

});

function resetForm (){
    
    stage = 0;
    document.getElementById ('userSpan').textContent="";
    document.getElementById ('passSpan').textContent="";
    document.getElementById ('passInput').classList.add('hiden');

}

function createCursor( elementID ){

    let newSpan = document.createElement("span");
    let txt = document.createTextNode("█");

    newSpan.setAttribute ("id", "cursor");
    newSpan.appendChild (txt);

    document.getElementById ( elementID ).appendChild( newSpan );

}