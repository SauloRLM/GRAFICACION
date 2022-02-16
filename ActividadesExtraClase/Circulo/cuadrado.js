function CalculosDeCuadrado(x0, y0, x1, y1, contexto, color, opc) {
    //obtencion de puntos para rectangulo
    //distancias

    var dx = Math.abs(x1 - x0); //Math.abs() para obtener el valor absoluto
    var dy = Math.abs(y1 - y0);

    var aux;
    if (x0 > x1 && y0 > y1) {
        aux = x0;
        x0 = x1;
        x1 = aux;

        aux = y0;
        y0 = y1;
        y1 = aux;
    }



    if (dx == 0) {

        var p1x = x0 - dy;
        var p1y = y0;

        var p2x = x1 - dy;
        var p2y = y1;

    } else if (dy == 0) {
        var p1x = x0;
        var p1y = y0 + dx;

        var p2x = x1;
        var p2y = y1 + dx;
    } else {

        var m = (y1 - y0) / (x1 - x0); //calcular pendiente

        if (m < 0) {

            //primer punto    
            var p1x = x0 - dx;
            var p1y = y0 - dy;

            var p2x = x1 - dx;
            var p2y = y1 - dy;

        } else {
            //primer punto    
            var p1x = x0 - dx;
            var p1y = y0 + dy;

            var p2x = x1 - dx;
            var p2y = y1 + dy;
        }



    }


    if (opc == 1) {
        //se traza la linea normal
        CalculosDePuntosBasico(x0, y0, x1, y1, contexto, color);
        //primero dos
        CalculosDePuntosBasico(x0, y0, p1x, p1y, contexto, color);

        CalculosDePuntosBasico(x1, y1, p2x, p2y, contexto, color);
        CalculosDePuntosBasico(p1x, p1y, p2x, p2y, contexto, color);
    }

    if (opc == 2) {
        //se traza la linea normal
        CalculosDePuntosDDA(x0, y0, x1, y1, contexto, color);
        //primero dos
        CalculosDePuntosDDA(x0, y0, p1x, p1y, contexto, color);
        CalculosDePuntosDDA(x1, y1, p2x, p2y, contexto, color);
        CalculosDePuntosDDA(p1x, p1y, p2x, p2y, contexto, color);
    }

    if (opc == 3) {

        //se traza la linea normal
        CalculosDePuntosBresenham(x0, y0, x1, y1, contexto, color);
        //primero dos
        CalculosDePuntosBresenham(x0, y0, p1x, p1y, contexto, color);
        CalculosDePuntosBresenham(x1, y1, p2x, p2y, contexto, color);
        CalculosDePuntosBresenham(p1x, p1y, p2x, p2y, contexto, color);

        //CalculosDePuntosBresenham(Math.round(X0), Math.round(Y0), Math.round(x), Math.round(y), contexto, color);
    }


}