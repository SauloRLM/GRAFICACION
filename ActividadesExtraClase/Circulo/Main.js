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
var cir; //circulo
var pol; //poligono
var elip; //elipse
var rec; //rectangulo
var cua; //cuadrado
var numl = 3;
var col;
opc1 = document.getElementById("1").checked;
//opc2 = document.getElementById("2").checked;
cir = document.getElementById("4").checked;

if (opc1 == true) {
    window.alert("Usando Algoritmo Basico");
    col = "blue";
}

if (cir == true) {
    window.alert("Usando Circulo");
    numl = 360;
}

function selccionarMetodo() {
    opc1 = document.getElementById("1").checked;
    opc2 = document.getElementById("2").checked;
    opc3 = document.getElementById("3").checked;
    //opc3 = document.getElementById("3").checked;

    //para poligonos y circulos y elipses y poligono
    pol = document.getElementById("5").checked; //poligono
    cir = document.getElementById("4").checked;
    elip = document.getElementById("7").checked;
    rec = document.getElementById("8").checked;
    cua = document.getElementById("9").checked;


    if (pol == true) {
        numl = parseInt(document.getElementById("6").value); //valor de lados
        window.alert("Usando Poligono : " + numl);
    }

    if (cir == true) {
        window.alert("Usando Circulo");
        numl = 360;
    }

    if (elip == true) {
        window.alert("Usando Elipse");
        numl = 360;
    }

    if (rec == true) {
        window.alert("Usando Rectangulo");
    }

    if (cua == true) {
        window.alert("Usando Cuadrado");
    }


    //metodos
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
    contexto.fillRect(x, y, 1, 1);
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


    if (cua == true) {

        if (opc1 == true) {
            //window.alert("Usando Algoritmo Basico");   
            CalculosDeCuadrado(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
            //CalculosDePuntosBasico(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
        }

        if (opc2 == true) {
            //window.alert("Usando Algoritmo DDA");
            CalculosDeCuadrado(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
            //CalculosDePuntosDDA(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
        }

        if (opc3 == true) {
            //window.alert("Usando Algoritmo Bresenham");
            CalculosDeCuadrado(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
            //CalculosDePuntosBresenham(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
        }
    }


    if (rec == true) {

        if (opc1 == true) {
            //window.alert("Usando Algoritmo Basico");   
            CalculosDeRactangulo(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
            //CalculosDePuntosBasico(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
        }

        if (opc2 == true) {
            //window.alert("Usando Algoritmo DDA");
            CalculosDeRactangulo(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
            //CalculosDePuntosDDA(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
        }

        if (opc3 == true) {
            //window.alert("Usando Algoritmo Bresenham");
            CalculosDeRactangulo(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
            //CalculosDePuntosBresenham(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
        }
    }

    if (elip == true) {

        if (opc1 == true) {
            //window.alert("Usando Algoritmo Basico");   
            CalculoElipse(xi, yi, event.offsetX, event.offsetY, contexto, col, 1, numl);
            //CalculosDePuntosBasico(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
        }

        if (opc2 == true) {
            //window.alert("Usando Algoritmo DDA");
            CalculoElipse(xi, yi, event.offsetX, event.offsetY, contexto, col, 2, numl);
            //CalculosDePuntosDDA(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
        }

        if (opc3 == true) {
            //window.alert("Usando Algoritmo Bresenham");
            CalculoElipse(xi, yi, event.offsetX, event.offsetY, contexto, col, 3, numl);
            //CalculosDePuntosBresenham(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
        }
    }

    if (cir == true) {

        if (opc1 == true) {
            //window.alert("Usando Algoritmo Basico");   
            CalculoPoligono(xi, yi, event.offsetX, event.offsetY, contexto, col, 1, numl);
            //CalculosDePuntosBasico(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
        }

        if (opc2 == true) {
            //window.alert("Usando Algoritmo DDA");
            CalculoPoligono(xi, yi, event.offsetX, event.offsetY, contexto, col, 2, numl);
            //CalculosDePuntosDDA(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
        }

        if (opc3 == true) {
            //window.alert("Usando Algoritmo Bresenham");
            CalculoPoligono(xi, yi, event.offsetX, event.offsetY, contexto, col, 3, numl);
            //CalculosDePuntosBresenham(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
        }
    }

    if (pol == true) {

        if (opc1 == true) {
            //window.alert("Usando Algoritmo Basico");   
            CalculoPoligono(xi, yi, event.offsetX, event.offsetY, contexto, col, 1, numl);
            //CalculosDePuntosBasico(xi, yi, event.offsetX, event.offsetY, contexto, col, 1);
        }

        if (opc2 == true) {
            //window.alert("Usando Algoritmo DDA");
            CalculoPoligono(xi, yi, event.offsetX, event.offsetY, contexto, col, 2, numl);
            //CalculosDePuntosDDA(xi, yi, event.offsetX, event.offsetY, contexto, col, 2);
        }

        if (opc3 == true) {
            //window.alert("Usando Algoritmo Bresenham");
            CalculoPoligono(xi, yi, event.offsetX, event.offsetY, contexto, col, 3, numl);
            //CalculosDePuntosBresenham(xi, yi, event.offsetX, event.offsetY, contexto, col, 3);
        }
    }





    //CalculosDePuntos(xi, yi, event.offsetX, event.offsetY, contexto, "blue");                
}

//para probarlos algoritmos
function IniciarPrueba() {

    contexto.clearRect(0, 0, canvas.width, canvas.height);
    if (opc1 == true) {
        //window.alert("Usando Algoritmo Basico");   
        console.time('Ejemp-Basico');
        //normal
        for (var j = 2; j < 1000; j += 6) { //Elpunto inicial debe estármás a la izq.q el final                                                     
            CalculosDePuntosBasico(j, 0, j, 1000, contexto, col); //Vertical
            CalculosDePuntosBasico(0, j, 1000, j, contexto, col); //Horizontal
            CalculosDePuntosBasico(j, 0, 0, j, contexto, col); //diagonal de izq sup a centro          
            CalculosDePuntosBasico(0, 1000 - j, j, 1000, contexto, col); //diagonal de izq inf  a cent  
            CalculosDePuntosBasico(1000 - j, 1000, 1000, 1000 - j, contexto, col); //diagonal der inf a centro                
            CalculosDePuntosBasico(1000 - j, 0, 1000, j, contexto, col); //diagonal der sup a centro 

        }
        //invertido
        for (var j = 2; j < 1000; j += 3) { //Elpunto inicial debe estármás a la izq.q el final                                                     
            CalculosDePuntosBasico(j, 1000, j, 0, contexto, col); //vertical invertida
            CalculosDePuntosBasico(1000, j, 0, j, contexto, col); //Horizontal
            CalculosDePuntosBasico(j, 0, 0, j, contexto, col); //diagonal de izq sup a centro                  
            CalculosDePuntosBasico(j, 1000, 0, 1000 - j, contexto, col); //diagonal de izq inf  a cent    
            CalculosDePuntosBasico(1000 - j, 1000, 1000, 1000 - j, contexto, col); //diagonal der inf a centro                     
            CalculosDePuntosBasico(1000, j, 1000 - j, 0, contexto, col); //diagonal der sup a centro 
        }
        console.timeEnd('Ejemp-Basico');

    }

    if (opc2 == true) {
        //window.alert("Usando Algoritmo DDA");            
        console.time('Ejemp-DDA');
        //normal
        for (var j = 2; j < 1000; j += 6) { //Elpunto inicial debe estármás a la izq.q el final                                                     
            CalculosDePuntosDDA(j, 0, j, 1000, contexto, col); //Vertical
            CalculosDePuntosDDA(0, j, 1000, j, contexto, col); //Horizontal
            CalculosDePuntosDDA(j, 0, 0, j, contexto, col); //diagonal de izq sup a centro          
            CalculosDePuntosDDA(0, 1000 - j, j, 1000, contexto, col); //diagonal de izq inf  a cent  
            CalculosDePuntosDDA(1000 - j, 1000, 1000, 1000 - j, contexto, col); //diagonal der inf a centro                
            CalculosDePuntosDDA(1000 - j, 0, 1000, j, contexto, col); //diagonal der sup a centro 

        }
        //invertido
        for (var j = 2; j < 1000; j += 3) { //Elpunto inicial debe estármás a la izq.q el final                                                     
            CalculosDePuntosDDA(j, 1000, j, 0, contexto, col); //vertical invertida
            CalculosDePuntosDDA(1000, j, 0, j, contexto, col); //Horizontal
            CalculosDePuntosDDA(j, 0, 0, j, contexto, col); //diagonal de izq sup a centro                  
            CalculosDePuntosDDA(j, 1000, 0, 1000 - j, contexto, col); //diagonal de izq inf  a cent    
            CalculosDePuntosDDA(1000 - j, 1000, 1000, 1000 - j, contexto, col); //diagonal der inf a centro                     
            CalculosDePuntosDDA(1000, j, 1000 - j, 0, contexto, col); //diagonal der sup a centro 
        }
        console.timeEnd('Ejemp-DDA');

    }

    if (opc3 == true) {
        //window.alert("Usando Algoritmo Bresenham");            
        console.time('Ejemp-Bresenham');
        //normal
        for (var j = 2; j < 1000; j += 6) { //Elpunto inicial debe estármás a la izq.q el final                                                     
            CalculosDePuntosBresenham(j, 0, j, 1000, contexto, col); //Vertical
            CalculosDePuntosBresenham(0, j, 1000, j, contexto, col); //Horizontal
            CalculosDePuntosBresenham(j, 0, 0, j, contexto, col); //diagonal de izq sup a centro          
            CalculosDePuntosBresenham(0, 1000 - j, j, 1000, contexto, col); //diagonal de izq inf  a cent  
            CalculosDePuntosBresenham(1000 - j, 1000, 1000, 1000 - j, contexto, col); //diagonal der inf a centro                
            CalculosDePuntosBresenham(1000 - j, 0, 1000, j, contexto, col); //diagonal der sup a centro 

        }
        //invertido
        for (var j = 2; j < 1000; j += 3) { //Elpunto inicial debe estármás a la izq.q el final                                                     
            CalculosDePuntosBresenham(j, 1000, j, 0, contexto, col); //vertical invertida
            CalculosDePuntosBresenham(1000, j, 0, j, contexto, col); //Horizontal
            CalculosDePuntosBresenham(j, 0, 0, j, contexto, col); //diagonal de izq sup a centro                  
            CalculosDePuntosBresenham(j, 1000, 0, 1000 - j, contexto, col); //diagonal de izq inf  a cent    
            CalculosDePuntosBresenham(1000 - j, 1000, 1000, 1000 - j, contexto, col); //diagonal der inf a centro                     
            CalculosDePuntosBresenham(1000, j, 1000 - j, 0, contexto, col); //diagonal der sup a centro 
        }
        console.timeEnd('Ejemp-Bresenham');

    }

}

var canvas = document.getElementById("lienzo");
canvas.addEventListener("mousedown", click);
canvas.addEventListener("mouseup", unclick);