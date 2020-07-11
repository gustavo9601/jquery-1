(function ()
 {

    var ancho = 1024;
    var liInicial = 0;
    var slideShowUl = $('ul.ulSlide').find('li').length; //variable que captura a todos los li y su tamaño
    var botoneraSlide = $('div.botonera'); //sleecion de la botonera
    var slideShow = $('div.slidePrincipal ul');
    
    var intervalo = setInterval(function() //variable que se ejecutara automaticamete
                                {

        movimientoSlide( "btnSiguiente" ); //invocamos a la funcion y le pasamos el parametro sigueinte para que empiece la animacion

    }, 2000) //tiempo em miisegundos



    /*Variable que inicializa el primer ciruclo colorado*/
    var selecion = 
        $('div.botonera')
    .find('div') //busque todos los div
    .eq(0) //seleccione el primero
    .css({ //modifque el css
        backgroundColor: "rgba(0,0,0,.9)",
        border: "2px solid white"
    });



    /*Funcion de control de moviminetos*/
    function movimientoSlide( seleccion  )
    {



        if( seleccion === "btnSiguiente")
        {
            liInicial--; //decrementeamos en 1

        }else if( seleccion === "btnAtras" )
        {
            liInicial++; //incrementamos en 1
        }


        if( liInicial > 0 )
        {
            liInicial = ( slideShowUl - 1) * -1;
            console.log("Sali if1 1");

        }else if( liInicial <= (  slideShowUl * -1 ) )
        {
            liInicial = 0;
            console.log("Sali if1 2");
        }


        var calculo = ancho * liInicial ;  //convertimos a negativo ya que necesitamos que se desplace negativamente
        var slide = $('ul.ulSlide li'); //seleccion del li
        console.log("Calculo = ",calculo);

        slide.animate({
            left: calculo + "px"   
        }, 1000)


    }
    
    /*Funcion que controlara el movimineto de acuerdo a los puntos ciruclos DIV*/
    function movimineto_por_punto ( posicionActual , click )
    {
        
        if(click)
            {
                clearInterval( intervalo );
            }
        
        
        
        var lefTotal = posicionActual * ancho; /*posicion * 1024*/
        var seleccion = posicionActual * -1;
        
        var slidelI = $('ul.ulSlide li'); //sleecion de los li 
        
        var seleccionPuntoActual = botoneraSlide //selecciona la botomera
                                    .find('div') //busque todos los div  
                                    .eq( seleccion ); //seleccione el que pasamos al llamar la funcion
        
        var puntoDeselecionar = botoneraSlide
                                    .find('div') //busque todos los div
                                    .not( seleccionPuntoActual ); //le decimos qu eno seleccione el punto actual

        
        
       var tl = new TimelineMax(); //variable propia de la libreria


        //accdemos a la variable tl
        //to le pasamos algo
        // el slide show
        // en 1.2 segundos
        // le modificamos la porpiedad margin left
        // y le apsamos el eefecto propio de la libreria
        tl.to(slideShow , 1.2, {
            marginLeft: lefTotal,
            ease: Elastic.easeOut.config(1, 0.75) //propiedad de efecto propio de la libreria
        })
            .to( seleccionPuntoActual , 0.5 , { //le pasamos el punto seleccionado 
            backgroundColor: "rgba(0,0,0,.9)"  //le modificamos el css
        } , "-=1.2") //le decimos que inicie en -1.2 segundos 
            .to( puntoDeselecionar, 0.5, {
            backgroundColor: "rgba(255,255,255,0.7)" 
        } , "-=1.2");
       
    }


    /*Evento al dar click en algun boton de movimineto*/
    $('div.btnMovimiento').on('click', function(){


        var btnSeleccionado = $(this).attr('id');//captura el id
        console.log("Btn Seleecionado = ",btnSeleccionado);//muestra el id

        movimientoSlide( btnSeleccionado );//invoca la funcion


    });



    /*Evento al dar click en algun boton multiple de seleccion*/
    $('div.btnSeleccionActual').on('click' , function(){
        var circuloSeleccionado = $(this).attr('alt'); //capturamos el alt que es el identificador entre los ciruclos  div
        console.log(" circulo seleccionado = ",circuloSeleccionado);
        
        
        movimineto_por_punto ( circuloSeleccionado , true ); //invocando a la funcion de movimineto por punto
    });

    

})();




























