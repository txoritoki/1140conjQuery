$(function () {

    $("#ejemploTabs").tabs().tabs({
        fx: {
            opacity: "toggle",
            duration: "slow"
        },
        collapsible:true
    });
    $("#acordeon").accordion().accordion({ event: "mouseover" });
    $("#miDialogo").dialog({ autoOpen: false });
    $("#rojo, #verde, #azul").slider({
        min: 0,
        max: 250,
        step: 1,
        slide : cambiaMarcador

    });
    $("#fecha").datepicker({
        appendText: "dd/mm/yy",
        maxDate: "22/10/1994",
        changeMonth: true,
        dateFormat: "D/mm/y",
        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"],
        nextText: "siguiente",
        previousText:"anterior"
    });
    $("#autocompletar").autocomplete({
        source:["casa","coche","moto","avion","puta","puta de lujo"]

    });
    var listaPalabras=["casa", "coche", "moto", "avion", "puta", "puta de lujo"];
    $("#autocompletar2").autocomplete({
        source: function (peticion, respuesta) {
            var coincide = new RegExp("^" + $.ui.autocomplete.escapeRegex(peticion.term), "i");
            respuesta($.grep(listaPalabras, function (item) {
                return coincide.test(item);
            }));
        }

    });
    $("#radio").buttonset();

    $("#progreso").progressbar({
        
    });
});

function cambiaMarcador() {
    jQuery(function () {
        $("#deslizador").text(
            $("#miDeslizador").slider("value")
            );
        var rojo = $("#rojo").slider("value");
        var azul = $("#azul").slider("value");
        var verde = $("#verde").slider("value");
        var cadenaRGB = ["rgb(", rojo, ",", verde, ",", azul, ")"].join("");
        $("#cajaColor").css({backgroundColor:cadenaRGB});
    });
    $("#deslizador").text(cadenaRGB);
}
function deshabilita(numeroTab) {
    jQuery(function () {
        $("#ejemploTabs").tabs({
            disabled: [numeroTab,numeroTab+1]
        });
    });


}
function muestraDialogo() {
    jQuery(function () {
        $("#miDialogo").dialog({
            autoOpen: true, maxWidth: 400, maxHeight: 280, resizable: true, draggable: true,
            buttons:{
                OK:function(){(this).dialog("close");}
            }
        });
                
    });
}
function ponUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("add","","un nuevo Tab");
    });
}

function quitaUnTabMas() {
    jQuery(function () {
        $("#ejemploTabs").tabs("remove",1);
    });
}