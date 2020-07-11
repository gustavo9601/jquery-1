(function(){

    // uardamos la variable de la caja
    var cajaRoja = $('div.cajaRoja');
    var contador = 0;

    // seleccionamos el boton
    // evento on click y le pasmoas una funcion
    $('button#btnTamano').on('click',function(){
        //selecinmoas la caja y le moficamos el aniamte
        // en forma de objeto le moficamos el css en forma de animacion
        contador++;
        cajaRoja.animate({
            width: "+=100px",
            height: "+=100px"
        },1000,function(){//controlamos la velocidad y le pasamos otra funcion
            console.log(" Se dispara una nueva funcion");
            //una nueva animacion
            cajaRoja.animate({
                top: "-=100px"
            })
                .css({// le modifcamos el css
                backgroundColor: "black"
            })
        });
        
        if( contador >= 3)
            {
                cajaRoja.animate({
                    top: "0px",
                    width: "100px",
                    height: "100px",
                })
            }
        
        
        
    });



})();