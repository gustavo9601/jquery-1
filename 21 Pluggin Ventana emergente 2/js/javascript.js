(function(){
    /*Mi funcion como pluggin de jquery*/
    $.smallBox = function( opciones ){
        //selecciono el parametro
        //le extiendo sus propiedades en forma de objeto
        opciones = $.extend({
            titulo : undefined,
            subtitulo : undefined,
            contenido : undefined,
            fa : "fa-envelope-o",
            img: undefined,
            color: "#82b800",
            tiempoSalida: 3000
        }, opciones );


        /*Atrapamos los datos en variables*/
        var titulo = opciones.titulo;
        var subtitulo = opciones.subtitulo;
        var contenido = opciones.contenido;
        var fa = opciones.fa;
        var img = opciones.img;
        var color = opciones.color;
        var tiempoSalida = opciones.tiempoSalida;

        //variable que conteine todo el html a ingresar
        var html = "";
        html += '<div class="smallBox-contenedor">';
        html += '<div class="smallBox-foto">';
        html += '<img src="'+ img +'" alt="">';
        html += '</div>';
        html += '<div class="smallBox-pico"></div>';
        html += '<div class="smallBox-contenido">';
        html += '<div class="smallBox-textoContendor">';
        html += '<span class="smallBox-titulo">'+ titulo +'</span>';
        html += '<span class="smallBox-subTitulo">'+ subtitulo +'</span>';
        html += '</div>';
        html += '<div class="smallBox-cajaColor">';
        html += '<div class="smallBox-colorTexto">';
        html += '<i class="fa '+ fa +'"></i>'+ contenido +'';
        html += '</div>';
        html += '<div class="smallBox-colorIcon fa fa-envelope-o fa-2x">';
        html += '</div>';
        html += '</div>'
        html += '<div class="smallBox-sombra">';
        html += '</div>';
        html += '</div>';
        html += '</div>';






        //seleccionamos el <body>
        //append = agregue
        // le paso el html
        $("body").append ( html );

        //modificando el color
        $('div.smallBox-cajaColor').css({
            backgroundColor : color 
        });

        //invoco a la funcon de movimiento de entrda
        animar_entrada();


        
        //modificar el tiempo que estara visible el ementto
        setTimeout( function(){
            animar_salida(); //invoca a la funcion
        } , tiempoSalida  ); //toma por parametro el tiempo que pasmeos


    };





    //funcion queanimara la salida
    function animar_salida ()
    {
        //variable que contendra el contenedor del smallbox div.
        var smallBox = $('div.smallBox-contenedor');

        //creo la variable propia del timelinemax
        var tl = new TimelineMax();


        tl.to ( smallBox, 1, {
            x:"+=310px",
        }  ).to( smallBox , 1, { //vuelvo a seleccionar el smallbox y le pongo una opacidad
            opacity: 0,
            onComplete: remover_smallBox  //llamo a la funcion
        } , "-=1");//le indico que se anime al tiempo en 1s
    }
    
    
    function remover_smallBox()
    {
        var smallBox = $('div.smallBox-contenedor');
        smallBox.remove();//remuevo el contenedr
    }



    //funcion de animacion de entrada
    function animar_entrada()
    {   
        //variable que contendra el contenedor del smallbox div.
        var smallBox = $('div.smallBox-contenedor');

        //creo la variable propia del timelinemax
        var tl = new TimelineMax();

        //selecciono la variable tl
        //from = siginifica que ubicare una posicion antes de aparecer en el html, dando el efecto de entrada
        tl.from( smallBox, 1.3, {
            x:"+=310px",
            ease: Bounce.easeOut  //propio de greensok
        }  ).from(smallBox , 1.5, { //vuelvo a seleccionar el smallbox y le pongo una opacidad
            opacity: 0
        } , "-=1.3");//le indico que se anime al tiempo en 1.3s

    }






})();