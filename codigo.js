// $(document).ready(function () {
//     $("#Tabla").dynamicTable({

//         columns: [{
//             text: "Codigo",
//             key: "cod"
//         },
//         {
//             text: "Nombre",
//             key: "name"
//         },
//         {
//             text: "Descripción",
//             key: "desc"
//         },
//         {
//             text: "Fecha",
//             key: "fecha"
//         },
//         {
//             text: "Tipo",
//             key: "tipo"
//         }

//         ],

//         buttons: {
//             addButton: '<input type="button" value="Nuevo" class="btn btn-outline-success"  id="btnGuardar" onclick="guardar()"/>',
//             cancelButton: '<input type="button" value="Cancelar" class="btn btn-outline-danger" />',
//             deleteButton: '<input type="button" value="Borrar" class="btn btn-outline-danger" />',
//             editButton: '<input type="button" value="Editar" class="btn btn-outline-primary" />',
//             saveButton: '<input type="button" value="Guardar" class="btn btn-outline-primary" />',
//         },
//         showActionColumn: true,

//         getControl: function (columnKey) {
//             if (columnKey == "cod") {
//                 return '<input type="number" class="form-control" id="codigo"/>';
//             }
//             if (columnKey == "name") {
//                 return '<input type="text" class="form-control" id="nombre"/>';
//             }
//             if (columnKey == "desc") {
//                 return '<input type="text" class="form-control" id="desripcion"/>';
//             }

//             if (columnKey == "fecha") {
//                 return '<input type="date" class="form-control" id="fecha"/>';

//             }
//             if (columnKey == "tipo") {
//                 return '<select class="form-control" id="tipo"><option value="Investigacion">Investigación</option><option value="Extension">Extensión</option></select>';
//             }

//             return '<input type="text" class="form-control" />';
//         }

//     });
// });


var proyectos = []
var contador = 1;


const btn = document.getElementById('btnGuardar');

function guardar() {
    let informacion = {
        id: null,
        codigo: null,
        nombres: null,
        descripcion: null,
        fecha: null,
        tipo: null
    }

    informacion.id = contador;
    informacion.codigo = document.getElementById('codigo').value
    informacion.nombres = document.getElementById('nombre').value
    informacion.descripcion = document.getElementById('desripcion').value
    informacion.fecha = document.getElementById('fecha').value
    informacion.tipo = document.getElementById('tipo').value
    contador++;

    proyectos.push(informacion);
    console.log(informacion);
    console.log(proyectos);
    limpiar();
    mostrar();
}

function mostrar() {
    $('#cuerpo').html('');
    for (let i = 0; i < proyectos.length; i++) {
        $('#cuerpo').append('<tr>'
            + '<th>' + proyectos[i].codigo + '</th>'
            + '<th>' + proyectos[i].nombres + '</th>'
            + '<th>' + proyectos[i].descripcion + '</th>'
            + '<th>' + proyectos[i].fecha + '</th>'
            + '<th>' + proyectos[i].tipo + '</th>'
            + '<th>'
            + '<input type="button" value="Editar" class="btn btn-outline-primary" onclick="trasladar(' + i + ');" />'
            + '<input type="button" value="Borrar" class="btn btn-outline-danger" />'
            + '</th>'
            + '</tr>');
    }
}

function limpiar(i) {
    $('#codigo').val('');
    $('#nombre').val('');
    $('#desripcion').val('');
    $('#fecha').val('');
    $("#tipo").val("Investigacion");
}

function trasladar(i) {
    $('#codigo').val(proyectos[i].codigo);
    $('#nombre').val(proyectos[i].nombres);
    $('#desripcion').val(proyectos[i].descripcion);
    $('#fecha').val(proyectos[i].fecha);
    $('#tipo').val(proyectos[i].tipo);
}

function validar(contador) {
    let salida = false;
    for (let i = 0; i < proyectos.length; i++) {
        if (proyectos[i].id == contador) {
            salida = true;
        }
    }
    return salida;
}

function editar(i) {
    proyectos[i].codigo = document.getElementById('codigo').value;
    proyectos[i].nombres = document.getElementById('nombre').value;
    proyectos[i].descripcion = document.getElementById('desripcion').value;
    proyectos[i].fecha = document.getElementById('fecha').value;
    proyectos[i].tipo = document.getElementById('tipo').value;
    mostrar();
}

function eliminar(i){
    
}




