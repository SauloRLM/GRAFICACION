function CalculoPoligono(x0, y0, x1, y1, contexto, color, opc) {


    //dx tamaño de la figura radio 
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);


    /*
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    */

    var X = x0;
    var Y = y0;

    //contexto.fillText("(" + X + "," + Y + ")", X + 4, Y);

    //var R = 100;
    if (dx < dy) {
        var R = dy;
    } else {
        var R = dx;
    }

    // el número de lados del polígono
    var L = 360;
    // si L == 5 el ángulo es de 2π/6 o sea 60°
    var rad = (2 * Math.PI) / L;
    // dibuja el trazado 
    //contexto.beginPath();

    //var primeros datos
    var X0 = 0;
    var Y0 = 0;

    //impresion de  de datos
    /*
    console.log("dx= " + dx);
    console.log("dy= " + dy);
    console.log("R= " + R);
    console.log("Rad= " + rad);
    console.log("--------------------");
    */
    for (var i = 0; i <= L; i++) {

        if (i == 0) {
            X0 = X + R * Math.cos(rad * i);
            Y0 = Y + R * Math.sin(rad * i);
        } else {
            var x = X + R * Math.cos(rad * i);
            var y = Y + R * Math.sin(rad * i);

            console.log();

            if (opc == 1) {
                CalculosDePuntosBasico(X0, Y0, x, y, contexto, color);
            }
            if (opc == 2) {
                CalculosDePuntosDDA(X0, Y0, x, y, contexto, color);
            }

            /*
            console.log("Inicio:");
            console.log("X0 =" + X0);
            console.log("y0 =" + Y0);
            console.log("Fin:");
            console.log("X =" + x);
            console.log("y =" + y);
            console.log("--------------------");
            */

            if (opc == 3) {
                CalculosDePuntosBresenham(Math.round(X0), Math.round(Y0), Math.round(x), Math.round(y), contexto, color);
            }

            X0 = x;
            Y0 = y;
        }
    }

}