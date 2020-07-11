
/*Funcion anonima*/
(function(){

    // asignamos variable al div
    var cajaRoja = $('div.cajaRoja');

    // funcion que recivira por parametro el id de cada bootn 
    function mover( direccion ){

        // selecionamos la caja roja 
        // clearQueuque siginifica que actuara solo en su contenedor y no por fuera
        cajaRoja.clearQueue();

        switch( direccion ){
                //segun lo que pasamos por parametro
            case "btnArriba":
                //seleccionaos la caja y le pasamos la porpeidad ANIMATE
                // a animate le pasamos un objeto de caracteristisas
                cajaRoja.animate({
                    top: "-=50px" //-= siginifica restele a su actual 
                });
                break;
            case "btnAbajo":
                cajaRoja.animate({
                    top: "+=50px" 
                });
                break;
            case "btnIzquierda":
                cajaRoja.animate({
                    left: "-=50px" 
                });
                break;
            case "btnDerecha":
                cajaRoja.animate({
                    left: "+=50px" 
                });
                break;

            case "btnDiagonalDerechaRapida":
                cajaRoja.animate({
                    top: "+=300px",
                    left: "+=300px"
                },200);// la, siguienifica que le pasamos el siguiente parametro que es la velocidad en milisegundos
                break;
                //por defecto este sera la funcion del reset
            default:
                // o en top y left ya que son las posicion qu emodificamos y al ser position Relative
                cajaRoja.animate({
                    top: "0px",
                    left: "0px"
                },1000);
        }
    }




    /*Funcion que va a acturar con las TECLAS DEL TECLADO*/
    // le apsamos el document
    // evento on keypress = captura cualquier tecla precionada
    // y en la funcion se le debe pasar una variable que reciba lo tecleado
    $(document).on('keypress',function(TeclaPrecionada){
        // variable que capture lo tecleado
        var tecla = TeclaPrecionada.keyCode;
        // mostramos la tecla precionada
        console.log( tecla );



        //Switch que invoca a la funcion de arriba 
        switch (tecla){
            case 119 :
                // invocamos a la funcion de arriba
                // y le pasamos por parametro el valor de arriab
                mover("btnArriba");
                break;
            case 115 : 
                mover("btnAbajo");
                break;
            case 97 : 
                mover("btnIzquierda");
                break;
            case 100 :
                mover("btnDerecha");
                break;
                // en default le pasamos cualquie rparametro para que el reset en la otra funcion la tome com oinvalido y sea default
            default :
                mover("noImportaElParametroS");
                
        }



    })

    //function que capura el evento click para todos los btones
    $('button').on( 'click' , function(){
        //variable que captura el artibuto del boton clicqueado
        var dir = $(this).attr('id');
        console.log(dir);

        mover(dir);
    });

})();