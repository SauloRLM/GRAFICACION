function CalculosDePuntosBasico(x0, y0, x1, y1, contexto, color) {

    //delimitar dx y dy para ver atrabes de que se va a calcular si de x o de y
    var dx = Math.abs(x1 - x0); //Math.abs() para obtener el valor absoluto
    var dy = Math.abs(y1 - y0);

    var m = (y1 - y0) / (x1 - x0); //calcular pendiente
    var b = y0 - (m * x0); //determinar el punto donde la recta se cruza con el eje y

    if (dx == 0) {
        // revisar el si y0 es menor que y1
        if (y0 < y1) {
            for (var y = y0; y <= y1; y++) { //Elpunto inicial debe estármás a la izq.q el final                                                     
                PintarPixel(contexto, x1, y, color); //pintar el sig.punto de la línea Math.round() redondeo de y 
            }
            //Para poner la coordenada del punto
            //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
        } else {
            //se invierte el eje de y 
            for (var y = y1; y <= y0; y++) { //Elpunto inicial debe estármás a la izq.q el final                                                     
                PintarPixel(contexto, x1, y, color); //pintar el sig.punto de la línea Math.round() redondeo de y 
            }
            //Para poner la coordenada del punto
            //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
        }
    } else {

        //compracion dy y dx para saber en base a que calcular los puntos
        if (dy > dx) {
            //dy es mayor asi que se calcula en base a y                  
            // revisar el si y0 es menor que y1
            if (y0 < y1) {
                for (var y = y0; y <= y1; y++) { //Elpunto inicial debe estármás a la izq.q el final                             
                    var x = (y - b) / m; //Ecuación de la recta en base a y
                    PintarPixel(contexto, Math.round(x), y, color); //pintar el sig.punto de la línea Math.round() redondeo de y 
                }
                //Para poner la coordenada del punto
                //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
            } else {
                //se invierte el eje de y 
                for (var y = y1; y <= y0; y++) { //Elpunto inicial debe estármás a la izq.q el final                             
                    var x = (y - b) / m; //Ecuación de la recta en base a y
                    PintarPixel(contexto, Math.round(x), y, color); //pintar el sig.punto de la línea Math.round() redondeo de y 
                }
                //Para poner la coordenada del punto
                //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
            }

        } else {

            if (x1 < x0) {

                //dx es mayor asi que se calcula en base a x
                for (var x = x1; x <= x0; x++) { //Elpunto inicial debe estármás a la izq.q el final
                    var y = (m * x) + b; //Ecuación de la recta en base a x
                    PintarPixel(contexto, x, Math.round(y), color); //pintar el sig.punto de la línea Math.round() redondeo de y 
                }
                //Para poner la coordenada del punto
                //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);

            } else {

                //dx es mayor asi que se calcula en base a x
                for (var x = x0; x <= x1; x++) { //Elpunto inicial debe estármás a la izq.q el final
                    var y = (m * x) + b; //Ecuación de la recta en base a x
                    PintarPixel(contexto, x, Math.round(y), color); //pintar el sig.punto de la línea Math.round() redondeo de y 
                }
                //Para poner la coordenada del punto
                //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
            }
        }


    }



}