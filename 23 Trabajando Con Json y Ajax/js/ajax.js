(function(){
    /*Una peticion AJAX
    
    Es un lalmado asincrono a un servidor o servicio externo y dicha peticion retorna algo de informaicon ,un archivo json un archivo plano etc.
    
    Asincrono = Ejecuta la funcion y hay termina*/
    
    //selecciono a jquery $
    //selecciono una perticion ajax
    //le paso por parametro las caracterirsticas de la peticion AJAX
    $.ajax({
        //type: que tipo de peticion es
        //GET : obetener
        //POST : enviar
        type: 'GET',
        //url: le paso la ubicacion del archivo que le voy a pasar (OBETNER O ENVIAR SEGUN SEA)
        url: 'http://www.json-generator.com/api/json/get/cpxGomxQLC?indent=2',
        //le pasamos el formato
        dataType: 'json'
    })  //donde es si se efectua la peticion correctamente
        .done(function( data ){ //en la variable por parametro capturamos todo el contenido capturado
        
        var person = data; //Caputuro todo el contenido en la variable person
        console.log( person ); //imprimo todo el objeto
        
        //asigno de acuerdo a lo que contenga lo que me trae la peticion ajax a los elemntos HTML con jquery
        $('img#picFoto').attr( 'src' ,person.foto );
        $('input#txtNombre').val( person.nombre );
        $('input#txtDireccion').val( person.direccion );
        $('input#txtTelefono').val( person.Telefono );
        $('input#txtGenero').val( person.Genero );
        
        
        
        
        console.log("Hecho correctamente !");
    })//fail si falla la peticion
        .fail(function(){
        console.log("Ha Fallado !!");
    })//always simepre va a hacer falle o no
        .always(function(){
        console.log("Completado !!!");
    });
    
    
})();


/*
INTRUCCIONES CREACION JSON ONLINE
http://www.json-generator.com/
1 ingresamos al url, pegamos nuestros arreglo o json ya escrito y le damos generate
2 nos genera al lado derecho el codigo en json 
3 damos click en update
4 damos click en copy url
5 copiamos el url y lo pegamos el el url de la llamada a la peticion ajax, 
de esta forma podemos obetener informacion desde la web

*/