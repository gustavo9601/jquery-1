(function (){

    var actual = 0; /*Cual es el slide que estoy viendo*/
    var ancho = 600;

    /*Variable que captura el div y los ul*/
    var slideShow = $('div.slideShow ul');

    /*Variable que busca dentro del ul todos los li y con length los cuenta*/
    var slides = slideShow.find('li').length;

    //variable puntos que captura a todos los div que generan el moviimiento
    var puntos = $('div.slideShowButtons');



    /*Para que inicie con el primer ciruclo coloreado*/
    //seleccionamos puntos
    //buscamos todos sus div
    //selecciomaos el primer div con eq(0)
    //moficamos su css
    puntos.find('div')
        .eq(0)
        .css({
        backgroundColor: "rgba(59, 33, 168, 0.91)" 
    });


    /*Creamos una variable intervalo que se encargara de hacer mover automoticamente el slide
    set interval es porpio de jquery
    le pasamos una funcion que llamara a la funcion mover a la cual le pasamos el parametro siguiente
    */
    var IntervaloPaseIamgenes = setInterval(function(){

        //invocando la funcion mover
        mover( "siguiente" );

    },1700);//1700 tiempo en actuar








    /*Funcion que hara la magia*/
    function mover( direccion , dioClick)
    {



        if( direccion === "siguiente" ){
            actual--; /*Si es igual a sisguiente se descuenta a actual*/
            console.log('Slide que sigue en actual = ',actual);


        }else{
            actual++;
            console.log('Slide que sigue en actual = ',actual);
        }



        if (actual > 0 ) //si posicicion actual es > 0
        {
            actual = ( slides - 1 ) * -1;
        }else if( actual <= (slides * -1))
        {
            actual = 0;
        }






        var margen = actual * ancho ; /*actual * 600*/
        /*Animacion con Greensonk*/


        var tl = new TimelineMax(); //variable propia de la libreria


        //accdemos a la variable tl
        //to le pasamos algo
        // el slide show
        // en 1.2 segundos
        // le modificamos la porpiedad margin left
        // y le apsamos el eefecto propio de la libreria
        tl.to(slideShow , 1.2, {
            marginLeft: margen,
            ease: Elastic.easeOut.config(1, 0.9) //propiedad de efecto propio de la libreria
        } );


        //invocando a la fucion mover_por_punto actual y le pasamos el parametro o posicion actual
        mover_por_punto( actual );
    }




    /*Funcion que capturaa la captura del click sobre algun boton*/

    $('button.btnSlide').on('click',function(){
        /*Capturamos la direccion capturando el id de cada boton oprimido*/
        var direccion = $(this).attr('id');
        console.log(direccion); //mostramos la direccion por consola




        /*Llamamos la funcion moverde arriba*/
        //le pasamos la direccion y un true para que valide que si espicho
        mover( direccion , true );

    });








    /**********************************************/
    /*Configuracion de botones que respondan al click del slide*/

    function mover_por_punto ( actual , dioClick ) //recibira una variable que contenga la posicion a la cual ir
    {

        if(dioClick){ //dioClick es un boolean y si se da click // restaurara el intervalo en minutos 
            clearInterval( IntervaloPaseIamgenes );
        }


        var margen = actual * ancho ; /*actual * 600*/
        var index  =actual * -1;


        var seleccionarPuntoActual = puntos //selecciomamos puntos
        .find('div')    //buscmaos los div
        .eq( index ); //capturamos el valor del div clickequedo

        var puntosDeselecionar = puntos
        .find('div')
        .not( seleccionarPuntoActual ); //le decimos que no selecione el punto clickeado pero si los demas div



        var tl = new TimelineMax(); //variable propia de la libreria


        //accdemos a la variable tl
        //to le pasamos algo
        // el slide show
        // en 1.2 segundos
        // le modificamos la porpiedad margin left
        // y le apsamos el eefecto propio de la libreria
        tl.to(slideShow , 1.2, {
            marginLeft: margen,
            ease: Elastic.easeOut.config(1, 0.75) //propiedad de efecto propio de la libreria
        })
            .to( seleccionarPuntoActual , 0.5 , { //le pasamos el punto seleccionado 
            backgroundColor: "rgba(59, 33, 168, 0.91)"  //le modificamos el css
        } , "-=1.2") //le decimos que inicie en -1.2 segundos 
            .to( puntosDeselecionar, 0.5, {
            backgroundColor: "#a1a1a1" 
        } , "-=1.2");

    }


    /*Evento cuando de click sobre un div*/
    $('div.slideButton').on( 'click' , function(){

        var index = $(this).attr('id');//variable que captura el id del boton capturado
        index = index * -1; //vovliendo negativo el index
        console.log("Me capturo el boton numero ",index);

        //invocamos la funcion le pasamos el boton espichado y un true
        mover_por_punto( index , true );
    });


})();