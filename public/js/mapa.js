var map;
var marker;
var lat_x;
var lng_y;
var infowindow;
var connect, form, response, result,user, pass, sesion, opcion;
var directionsService;
var directionsDisplay;
function initMap(e) 
{
  
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(objPosition)
    {
        mapear(objPosition);
    }, function(objPositionError)
    {
      switch (objPositionError.code)
      {
        case objPositionError.PERMISSION_DENIED:
          // alert("No se ha permitido el acceso a la posición del usuario.");
          $.alert({
              title: 'Alerta!',
              content: 'No se ha permitido el acceso a la posición del usuario.',
              icon: 'fa fa-rocket',
              animation: 'zoom',
              closeAnimation: 'zoom',
              buttons: {
                  okay: {
                      text: 'OK',
                      btnClass: 'btn-blue'
                  }
              }
          });
        break;
        case objPositionError.POSITION_UNAVAILABLE:
          // alert("No se ha podido acceder a la información de su posición.");
          $.alert({
              title: 'Alerta!',
              content: 'No se ha podido acceder a la información de su posición. Active su GPS',
              icon: 'fa fa-rocket',
              animation: 'zoom',
              closeAnimation: 'zoom',
              buttons: {
                  okay: {
                      text: 'OK',
                      btnClass: 'btn-blue'
                  }
              }
          });
        break;
        case objPositionError.TIMEOUT:
          // alert("El servicio ha tardado demasiado tiempo en responder.");
          $.alert({
              title: 'Alerta!',
              content: 'El servicio ha tardado demasiado tiempo en responder.',
              icon: 'fa fa-rocket',
              animation: 'zoom',
              closeAnimation: 'zoom',
              buttons: {
                  okay: {
                      text: 'OK',
                      btnClass: 'btn-blue'
                  }
              }
          });
        break;
        default:
          // alert("Error desconocido.");
          $.alert({
              title: 'Alerta!',
              content: 'Error desconocido.',
              icon: 'fa fa-rocket',
              animation: 'zoom',
              closeAnimation: 'zoom',
              buttons: {
                  okay: {
                      text: 'OK',
                      btnClass: 'btn-blue'
                  }
              }
          });
      }
    }, {
      maximumAge: 100000,
      timeout: 60000,
      enableHighAccuracy: true
    });

  }
  else
  {
    // alert('tu navegador no soporta la geolocalizacion');
    $.alert({
              title: 'Alerta!',
              content: 'tu navegador no soporta la geolocalizacion',
              icon: 'fa fa-rocket',
              animation: 'zoom',
              closeAnimation: 'zoom',
              buttons: {
                  okay: {
                      text: 'OK',
                      btnClass: 'btn-blue'
                  }
              }
          });
  }

}

function mapear(position)
{
  lat_x = position.coords.latitude;
  lng_y = position.coords.longitude;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: lat_x, lng: lng_y}
  });
  directionsDisplay.setMap(map);
  // directionsDisplay.setPanel(document.getElementById('right-panel'));
  
   
  marcador(lat_x, lng_y);
  // Moviendo el marcador ..
  marker.addListener( 'dragend', function (event)
  {
    lat_x = this.getPosition().lat();
    lng_y = this.getPosition().lng();
  });
}
function marcador(x, y)
{
  marker = new google.maps.Marker({
   
    map: map,
    draggable: true,
    title: 'Mi Ubicacion',
    animation: google.maps.Animation.DROP,
    position: {lat: x, lng: y}
  });

 
  infowindow = new google.maps.InfoWindow({
    content: 'Mi Ubicacion actual'

  });

  infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

function buscar(urli, urli2, urlFacturas)
{
  $.confirm({
    title: 'Codigo:',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<label>Ingreso el numero de cuenta del usuario</label>' +
    '<input type="text" placeholder="codigo numerico" class="cuenta form-control" required />' +
    '</div>' +
    '</form>',
    type: 'blue',
     animation: 'zoom',
                          closeAnimation: 'zoom',
    buttons: {
        formSubmit: {
            text: 'Buscar',
            btnClass: 'btn-blue',
            action: function () {
                var cuenta = this.$content.find('.cuenta').val();
                if(!cuenta)
                {
                    $.alert('Cuenta invalida');
                    return false;
                }

                // $.alert('La cuenta es ' + cuenta);
                urli = urli.replace(":cuenta", cuenta);
                
                 $.ajax({
                  type: "GET",
                  url: urli,
                  success: function (data) {
                    if(!data)
                    {
                      //registrar la consulta
                      urli2 = urli2.replace(":criterio", cuenta);
                      urli2 = urli2.replace(":resultado", 'Busqueda sin resultado');
                      urli2 = urli2.replace(":ip", 'null');
                      urli2 = urli2.replace(":coordenadas", inicio);
                      urli2 = urli2.replace(":navegador", navegador());
                      
                      $.ajax({
                        type: "GET",
                        url: urli2,
                      });

                      $.confirm({
                          title: 'Sin Resultados',
                          content: 'No se encontro el medidor solicitado <br> Conoces su Ubicacion ?',
                          icon: 'fa fa-rocket',
                          animation: 'zoom',
                          closeAnimation: 'zoom',
                          type: 'red',
                          buttons: {
                              okay: {
                                  text: 'SI',
                                  btnClass: 'btn-blue'
                              },
                              cancel: {
                                text: 'NO',
                              }
                          }
                      });
                    }else
                    {
                      urlFacturas = urlFacturas.replace(":cuenta", cuenta);
                      $.alert({
                        title: 'Datos del Medidor:',
                         icon: 'fa fa-rocket',
                         animation: 'zoom',
                          closeAnimation: 'zoom',
                           type: 'blue',
                          content: '' +
                          '<form action="" class="formName">' +
                          '<div class="form-group">' +
                          '<p>Cuenta: '+data.Codigo+'</p>'+
                          '<p>Nombre: '+data.Consumidor+'</p>'+
                          '<p>Direccion: '+data.Dirección+'</p>'+
                          '<p>Serie: '+data.Serie+'</p>'+
                          '<hr>'+
                          '<p><a class="btn btn-primary btn-xs" href="'+urlFacturas+'">Facturas</a> <a class="btn btn-primary btn-xs" href="'+urlFacturas+'">Estruc. RED</a></p>'+
                          '</div>' +
                          '</form>',
                          buttons: {
                              okay: {
                                  text: 'OK',
                                  btnClass: 'btn-blue'
                              }
                          }
                      });
                      var inicio = lat_x+', '+lng_y;
                      var fin = data.y+', '+data.x;
                      
                      //registrar la consulta
                      urli2 = urli2.replace(":criterio", cuenta);
                      urli2 = urli2.replace(":resultado", 'Busqueda Exitosa');
                      urli2 = urli2.replace(":ip", 'null');
                      urli2 = urli2.replace(":coordenadas", inicio);
                      urli2 = urli2.replace(":navegador", navegador());
                
                      $.ajax({
                        type: "GET",
                        url: urli2,
                      });
                      
                      calculateAndDisplayRoute(directionsService, directionsDisplay, inicio, fin, data.y, data.x);
                    }
                      
                  },
                  error: function (data) {
                      console.log('Error:', data);
                  }
              });
            }
        },
        cancel: function () {
            //close
        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
});


}

function calculateAndDisplayRoute(directionsService, directionsDisplay, inicio, fin, x, y) 
{
  directionsService.route({
    origin: inicio,
    destination: fin,
    // waypoints: [{location: inicio}, {location: fin}],
    travelMode: 'DRIVING'
  }, function(response, status) 
  {
    if (status === 'OK') 
    {

      directionsDisplay.setDirections(response);
      
    } else 
    {
      // window.alert('No exite la direccion solicitada.  ' + status);
      $.confirm({
          title: 'Sin ruta',
          content: 'El sistema no puedo enruta la direccion de la busqueda. <a href="#">Deseas Geolocalizarlo ?</a>',
          icon: 'fa fa-rocket',
          animation: 'zoom',
          closeAnimation: 'zoom',
          type: 'red',
          buttons: {
              okay: {
                text: 'SI',
                btnClass: 'btn-blue',
                action: function () 
                {
                x =  parseFloat(x);
                y =  parseFloat(y);
                 marcador(x, y);
                }
              },
              cancel: {
                   text: 'NO'
              }
          }
      });

    }
  });

}

function navegador()
{
    var agente = window.navigator.userAgent;
    var navegadores = ["Chrome", "Firefox", "Safari", "Opera", "Trident", "MSIE", "Edge"];
    for(var i in navegadores){
        if(agente.indexOf( navegadores[i]) != -1 ){
            return navegadores[i];
        }
    }
}