
(function(){
    //selecciono una peticion tipo ajax
    $.ajax({
        type: "GET",//tipo GET = OBETENER
        url: "http://www.json-generator.com/api/json/get/cpCZgyeIte?indent=2", //la url
        dataType: "json" //tipo de archivo
    }).done( function( valores ){ //done si fue satisfactoria, y valores captura con el contenido del json
        console.log("ACEPTADA");
        
        /*Hace que el div se muestre por 500 milisegundos y transcurrido el tiempo se desaparecera*/
        $('div.cargando').fadeOut(1000,function(){
            /*invocando a la funcion*/
            modificarHtml( valores );
        });

    }).fail( function(){// fail si fallo
        console.log("FALLIDA");
    }).always( function(){//simepre va a hacer
        console.log("COMPLETADA");
    })




    /*Funcion que moficiara el html de acuerdo a lo que pasemos por parametro*/
    function modificarHtml ( valores )
    {
        var personas = valores;//capturo lo qu eme devolvio la perticion ajax
        console.log( personas );

        /*For que recorrera todos los arreglos que tenga el objeto que me paso la peticion*/
        for( var i = 0; i < personas.length ; i++ )
        {

            var personaActual = personas[i]; //capturo todo el objeto a array actual
            var tagsDePersona = "";

            /*For que recorrera cada objeto por individual y recorrera los tags ya que son un array*/
            for( var j = 0; j <  personaActual.Tags.length ; j++ )
            {
                tagsDePersona +=  personaActual.Tags[j] + " , "; /*Ira concatenando cada valor que posea cada array*/
            }



            var html = "";
            html += '<tr>';
            html += '    <td>' + personas[i].nombre + '</td>';
            html += '    <td>' + personas[i].Edad + '</td>';
            html += '    <td>' + tagsDePersona + '</td>';
            html += '</tr>';

            /*Hago la insercion de cada tabla*/
            
            $('table#miTabla').append( html );
        }
    }

    /*Funcion de modificacion de html*/


})();