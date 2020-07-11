(function(){

    /*convertimos la funcion como plugin*/
    $.bigBox = function( opciones )
    {
        /*Al parametro de paso al llamar la funcion*/
        //la extiendo y le paso mas parametros y le asgino valores por defecto que cambiaran cuando invoque esta funcion ya que se apsan los valores por referencia
        opciones = $.extend({
            fa: "fa-blind",
            titulo: undefined,
            texto: undefined,
            textBoton: "Aceptar",
            url: "#"
        }, opciones );//llamo a opciones

        if( opciones.titulo === undefined ) {
            alert("Por favor digite el tiitulo");
            return; // return para que termine todo el cofigo
        }


        if( opciones.texto === undefined){
            alert("Por favor digite el Texto");
            return;//return para que temrine todo el codigo
        }

        /*Le asginamos la etiqueta html todo el contenido html*/
        var contenido ="";
        contenido += '<div class="bigBox-Fondo" align="center"></div>';
        contenido += '<div class="bigBox-contenedor">';
        contenido += '<div class="bigBox-Cerrar">';
        contenido += '<i class="fa fa-times"></i>';
        contenido += '</div>'
        contenido += '<div class="bigBox-Circulo"><i class="fa  '+ opciones.fa + ' fa-2x"></i></div>'
        contenido += '<div class="bigBox-Contenido">';
        contenido += '<span class="bixBox-Titulo">'+ opciones.titulo +'</span>';
        contenido += '<span class="bigBox-Texto">'+ opciones.texto +'</span>';
        contenido += '</div>';
        contenido += '<button class="bigBox-Boton"><a id="enlace" href="' + opciones.url +'" target="_blank">' + opciones.textBoton + '</a></button>';
        contenido += '</div>';




        //selecciono el body
        //append //ingrese de ultimas lo que le paso por parametro
        //le paso contenido que contiene las etiqetas html
        $('body').append( contenido );

        //llamada a la funcion
        animar_entrada();



        console.log("Vamos bien");
    }




    // Evento al dar click sobre el boton CERRAR

    $('body').on('click','div.bigBox-Cerrar',function(){
        cerarTodo(); 
    });


    // Evento al dar click sobre el boton bigBox Boton principal
    $('body').on('click','button.bigBox-Boton',function(){

        cerarTodo();


    });





    //anima la entrada con la libreria greensock y timeline
    function animar_entrada()
    {



        var fondo = $('div.bigBox-Fondo');
        var bigBox = $('div.bigBox-contenedor');

        //obteniendo el ancho de la ventana
        var anchoVentana = $(window).width();
        var altoVentana = $(window).height();
        console.log("Ventana Ancho = ", anchoVentana ," Alto = ", altoVentana);

        //obteniendo el ancho del bigBox
        var anchoBigBox = $(bigBox).width();
        var altoBigBox = $(bigBox).height();
        console.log("Big Box ancho = ",anchoBigBox," Alto = ", altoBigBox);


        //modificando la posicon del BigBox con el css

        bigBox.css({
            top: (altoVentana / 2) - (altoBigBox / 2),
            left: (anchoVentana / 2) - (anchoBigBox / 2)
        })



        /*Con jquery
        //selecionamos la variable
        //fadeIn //indica la entrada
        //paso por parametro en milisegundos cuento se demora
        fondo.fadeIn( 500 );

        */


        /*Con el greensock*/
        var tl = new TimelineMax(); //declaramos la varibable

        bigBox.show(); //show() muestro si esta escondido
        fondo.show(); 
        //seleccionamos la variable tl
        // to le decimos que quermos moficar
        // le pasamos fondo
        // le pasamos en segundos cuando tarda la animacin
        // le pasamos un objeto con las propiedades css
        tl.to( fondo, 0.8 , {  
            backgroundColor: "rgba(0,0,0,.7)"
        } ).to( bigBox, 0.8, {
            opacity: 1

            /*From
            de donde inicia la animacion
            //le apsamos el objeto a cambiar la posicon inical
            // el tiempo
            // en objeto el css en x , y = ""

            */
        } ).from( bigBox, 0.8 , 
                 {
            y: "-30",

        }, "-=0.8");//siginifica que inicia en -0.8 s es decir igual que la animacion
    };


    /*Funcion anumacion de cerrar Todo*/
    function cerarTodo()
    {
        var fondo = $('div.bigBox-Fondo');
        var bigBox = $('div.bigBox-contenedor');

        /*Con jquery
        //selecionamos la variable
        //fadeIn //indica la entrada
        //paso por parametro en milisegundos cuento se demora
        fondo.fadeIn( 500 );

        */


        /*Con el greensock*/
        var tl = new TimelineMax(); //declaramos la varibable

        //seleccionamos la variable tl
        // to le decimos que quermos moficar
        // le pasamos fondo
        // le pasamos en segundos cuando tarda la animacin
        // le pasamos un objeto con las propiedades css
        tl.to( fondo, 0.4 , {  
            display: "none"
        } ).to( bigBox, 0.4, {
            opacity: 0,
            display: "none"
        } );


        console.log("Me espichan");
    }

})();