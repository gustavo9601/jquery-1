(function (){

    var actual = 0; /*Cual es el slide que estoy viendo*/
    var ancho = 600;

    /*Variable que captura el div y los ul*/
    var slideShow = $('div.slideShow ul');

    /*Variable que busca dentro del ul todos los li y con length los cuenta*/
    var slides = slideShow.find('li').length;

    
    /*Creamos una variable intervalo que se encargara de hacer mover automoticamente el slide
    set interval es porpio de jquery
    le pasamos una funcion que llamara a la funcion mover a la cual le pasamos el parametro siguiente
    */
    var IntervaloPaseIamgenes = setInterval(function(){
       
        mover("siguiente");
        
    },2000);//1700 tiempo en actuar

    /*Funcion que hara la magia*/
    function mover( direccion , dioClick)
    {
        
        if(dioClick){ //dioClick es un boolean y si se da click // restaurara el intervalo en minutos 
            clearInterval( IntervaloPaseIamgenes );
        }
        
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
            }else if( actual <= (slides* -1))
                {
                    actual = 0;
                }

        var margen = actual * ancho ; /*actual * 600*/

        
        
        /*Animacion con Jquery*/
        
        /*
        slideShow.animate({ /*animara el slide de acuerdo al margen dado es decir si es negativo o positivo/

            marginLeft: margen
        },450);
        */
        
        
        
        
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


})();