



(function(){

    var botonAgregar = $('button#bntAgregar');
    var botonQuitar = $('button#btnQuitar');
    var espacioTrabajo = $('div#espacioTrabajo');
    var juegoCajas = $('div#juegoCajas');
    var cajaNueva = $('div.cajaNueva');
    var contador = 0; //variable acumulativa





    /*Funcion de quitar cajas*/
    botonQuitar.on('click',function(){
        juegoCajas.empty(); //empry me quita todos lo elemntos
        contador = 0;
    });

    /*Funcion de agragar cajas*/
    botonAgregar.on( 'click' , function() {

        contador += 1;
        $('<div>',{
            class: 'cajaNueva', // le pasamos una clase moficada en el css
            html: '<h3>Caja '+contador+'</h3>' //le pasamos el contenido en el html
        }).appendTo(juegoCajas); // las agregamos dentro de el div espacioTrabajo
    });


    /*Funcioens de control de movimientos*/    


    $('button.control').on( 'click', function (){


        // creamos variable y le asginamos el atributo id de cada boton que se va seleccionando
        var identificador = $(this).attr('id');
        console.log(identificador);

        switch( identificador ){
            case 'btnArriba':

                $('div.cajaNueva').animate({
                    top: "-=10px"
                })  

                break;

            case 'btnAbajo' :
                $('div.cajaNueva').animate({
                    top: "+=10px"
                })
                break;
            case 'btnIzquierda' :
                $('div.cajaNueva').animate({
                    left: "+=10px"
                })
                break;
            case 'btnDerecha' :
                $('div.cajaNueva').animate({
                    left: "-=10px"
                })
                break;
            case 'grande' :
                $('div.cajaNueva').animate({
                    height: "+=10px",
                    width: "+=10px"
                })
                break;
            case 'pequeno' :
                $('div.cajaNueva').animate({
                    height: "-=10px",
                    width: "-=10px"
                })
                break;
                //segun btn multiples
            case 'btnMultiples' :
                $('div.cajaNueva').animate({
                    height: "10px", //le cambio el tamaño
                    width: "10px"
                },200).animate({//control la velocidad
                    height: "100px",//vuevlo a cambiar el tamaño
                    width: "100px"
                },600).css({//controlo la velocidad y le agego unos estilso
                    backgroundColor: "black",
                    border: "3px dashed red",
                    transform: "rotateX(150deg)"
                });
                break;
            default: 
                $('div.cajaNueva').animate({
                    top: "0px",
                    left: "0px",
                    width: "100px",
                    height: "100px"
                },1000).css({
                    backgroundColor: "darkred",
                    border: "1px solid white",
                    transform: "rotateX(0deg)"
                })  

        }


    });   






})();