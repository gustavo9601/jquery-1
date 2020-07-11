
/*Funcion anonima*/
(function(){




    /*UTILIZANDO LA LIBRERIA TWENN DE GRENSOCK*/
    /*uN TIMLINE ES UNA LINEA DE ANIMACIONES*/

    var cajaAzul = $('div.cajaAzul');//captura del elemento en una vairable

    // asignamos variable al div
    var cajaRoja = $('div.cajaRoja');

    var tl = new TimelineMax(); //TimeLineMax - lista de eventos de plugin




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


                /*to es porpio del plugin*/
                //selecionnamos la variable tl que es el timelinea
                // le pasamos el to = haga esto
                // 1er parametro = objeto a modificar
                // 2do parametro = tiempo en segundos
                // 3er parametro posicion en x o en y que se va a efectuar
                tl.to( cajaAzul, 0.45, { y:"-=100"} );
                break;
            case "btnAbajo":
                cajaRoja.animate({
                    top: "+=50px" 
                });

                tl.to(cajaAzul, 0.45, { y:"+=100" } );
                break;
            case "btnIzquierda":
                cajaRoja.animate({
                    left: "-=50px" 
                });

                tl.to(cajaAzul, 0.45, { x:"-=100" } );
                break;
            case "btnDerecha":
                cajaRoja.animate({
                    left: "+=50px" 
                });

                tl.to(cajaAzul, 0.45, { x:"+=100"} );
                break;

            case "btnDiagonalDerechaRapida":
                cajaRoja.animate({
                    top: "+=300px",
                    left: "+=300px"
                },200);// la, siguienifica que le pasamos el siguiente parametro que es la velocidad en milisegundos

                tl.to( cajaAzul,0.50,{ x:"+=100", y:"+=100"} );
                break;
                //por defecto este sera la funcion del reset
            case "btnResetear":
                // o en top y left ya que son las posicion qu emodificamos y al ser position Relative
                cajaRoja.animate({
                    top: "0px",
                    left: "0px",
                    width: "100px",
                    height: "100px"
                },1000);


                tl.to( cajaAzul,1,{
                    x:"0",
                    y:"0",
                    width: "100",
                    height: "100",
                    transform: "rotateX(0)"
                });
                
                /*El default se ovea y no es ncesario*/

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

        var acumuladorGrados = 0;
    
    $('button#btnAncho').on('click',function(){
        
        
        //ira incrementando en 200
        acumuladorGrados += 200;
        
        cajaRoja.animate({
            width: "+=100px",
            height: "+=100px"
        },250);
        
        tl.to( cajaAzul, 0.25, {
            width: "+=100",
            height: "+=100"
        } ).to( cajaAzul, 0.2, { //concatenmaos y le pasamos denuevo el to
            transform: "rotateX("+ acumuladorGrados +"deg)"  //soprota animaciones css3
        });
        
    });



















})();