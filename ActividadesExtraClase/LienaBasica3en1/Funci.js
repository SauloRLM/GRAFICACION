//desarrollo de Fincionamiento 
//Graficacion
//Alumno: Lopez Mercado Saulo Ramon

//para limpiar pizzarra
var canvas = document.getElementById("lienzo");
//obtenemos el contexto 2d del lienzo
var contexto = canvas.getContext("2d");

function actualizar() { contexto.clearRect(0, 0, canvas.width, canvas.height); }
//-------------------------------------------------------------------------------------
var opc1;
var opc2;
var opc3;

var col;
opc1 = document.getElementById("1").checked;
//opc2 = document.getElementById("2").checked;
//opc3 = document.getElementById("3").checked;
if (opc1 == true) {
    window.alert("Usando Algoritmo Basico");
    col = "blue";
}

function selccionarMetodo() {
    opc1 = document.getElementById("1").checked;
    opc2 = document.getElementById("2").checked;
    opc3 = document.getElementById("3").checked;

    if (opc1 == true) {
        window.alert("Usando Algoritmo Basico");
        col = "blue";
    }

    if (opc2 == true) {
        window.alert("Usando Algoritmo DDA");
        col = "red";
    }

    if (opc3 == true) {
        window.alert("Usando Algoritmo Bresenham");
        col = "green";
    }
}
//-----------------------------------------------------------------------------------

function PintarPixel(contexto, x, y, color) { //Pintar un punto
    contexto.fillStyle = color;
    // Grosor de línea los ultimos dos digitos            
    contexto.fillRect(x, y, 2, 2);
}

//Para pintar una recta esta función deberá ser ejecutada una vez
//la primera vez captura las coordenadas del punto incial de la recta
//y lo grafica sobre el lienzo. al momento de soltar el click  esta tomara el segundo punto
//del segundo punto y pinta la línea llamando a la función lineaEcuacionRecta.

//accedemos al lienzo de dibujo
var xi = 0;
var yi = 0;
//Si es el primer clic, se lee el primer punto de la línea
function click(event) {
    xi = event.offsetX; //Guardamos la abscisa (x0)
    yi = event.offsetY; //guardamos la ordenada (y0)                                                
    //ponemos el punto inicial en azul
    PintarPixel(contexto, xi, yi, col);
    //Para poner la coordenada del punto
    //contexto.fillText( "(" + xi + "," + yi + ")", xi+4, yi);
}

function unclick(event) {

    //accedemos al lienzo de dibujo
    //var canvas = document.getElementById("lienzo");        
    //obtenemos el contexto 2d del lienzo
    //var contexto = canvas.getContext("2d");                                             

    //Si es el se solto el clic, pintamos la línea con los valores xi, yi
    //y la posición del último clic del ratón (event.offsetX, event.offsetY)
    //comparar  el valor del ultimo click para ver si es mayor o menor en el eje de las x
    //poner coordenada del punto
    //contexto.fillText( "(" + event.offsetX + "," + event.offsetY + ")", event.offsetX+4, event.offsetY);

    if (opc1 == true) {
        //window.alert("Usando Algoritmo Basico");   
        CalculosDePuntosBasico(xi, yi, event.offsetX, event.offsetY, contexto, col);
    }

    if (opc2 == true) {
        //window.alert("Usando Algoritmo DDA");
        CalculosDePuntosDDA(xi, yi, event.offsetX, event.offsetY, contexto, col);
    }

    if (opc3 == true) {
        //window.alert("Usando Algoritmo Bresenham");
        CalculosDePuntosBresenham(xi, yi, event.offsetX, event.offsetY, contexto, col);
    }

    //CalculosDePuntos(xi, yi, event.offsetX, event.offsetY, contexto, "blue");                
}

var canvas = document.getElementById("lienzo");
canvas.addEventListener("mousedown", click);
canvas.addEventListener("mouseup", unclick);