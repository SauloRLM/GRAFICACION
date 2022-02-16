function CalculosDeRactangulo(x0, y0, x1, y1, contexto, color, opc) {
    //obtencion de puntos para rectangulo
    //distancias
    var dx = Math.abs(x1 - x0); //Math.abs() para obtener el valor absoluto
    var dy = Math.abs(y1 - y0);

    var aux;
    if (x0 > x1) {
        aux = x0;
        x0 = x1;
        x1 = aux;
    }

    if (y0 > y1) {
        aux = y0;
        y0 = y1;
        y1 = aux;
    }
    var p1x = x0 + dx;
    var p1y = y0;

    var p2x = x0;
    var p2y = y0 + dy;



    if (opc == 1) {

        //primero dos
        CalculosDePuntosBasico(x0, y0, p1x, p1y, contexto, color)
        CalculosDePuntosBasico(x0, y0, p2x, p2y, contexto, color)
        CalculosDePuntosBasico(p1x, p1y, x1, y1, contexto, color)
        CalculosDePuntosBasico(p2x, p2y, x1, y1, contexto, color)



    }

    if (opc == 2) {

        //primero dos
        CalculosDePuntosDDA(x0, y0, p1x, p1y, contexto, color)
        CalculosDePuntosDDA(x0, y0, p2x, p2y, contexto, color)
        CalculosDePuntosDDA(p1x, p1y, x1, y1, contexto, color)
        CalculosDePuntosDDA(p2x, p2y, x1, y1, contexto, color)
    }

    if (opc == 3) {
        //primero dos
        CalculosDePuntosBresenham(x0, y0, p1x, p1y, contexto, color)
        CalculosDePuntosBresenham(x0, y0, p2x, p2y, contexto, color)
        CalculosDePuntosBresenham(p1x, p1y, x1, y1, contexto, color)
        CalculosDePuntosBresenham(p2x, p2y, x1, y1, contexto, color)
    }

}