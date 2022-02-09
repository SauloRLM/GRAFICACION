function CalculosDePuntosBresenham(x0, y0, x1, y1, contexto, color){

    //var dx = Math.abs(x1-x0);
    //var dy = Math.abs(y1-y0);
    
    var x, y, dx, dy,pk, ddy, dresdydx, incx, incy;                        
                        //ddy   //dresdydx       //incx //incy
    dx = (x1 - x0); //delta de 
    //window.alert("dx= "+dx); 
    dy = (y1 - y0);
    //window.alert("dy= "+dy); 
    
    if (dy < 0) {  //si el delta dy es negativo significa que el el y0 es mayor al y1                 
        dy = -dy; //asi que se invierte y en ves de sumarle se le restara
        //window.alert("dy adentro del if= "+dy); 
                    
        incy = -1;
    } else {        //sino 
        incy = 1;   //se continua igual y se le aumentara 
    }

    if (dx < 0) {     // si el delta dx es menor a cero significa que el x0 es mayor a y1
        dx = -dx;       //asi que se invierte y en ves de sumarle se le restara
        //window.alert("dx adentro del if= "+dx); 
        incx = -1;
    } else {            //sino 
        incx = 1;      //se continua con normalidad y se le aumentara
    }

    x = x0;     //igualamos el x0 a x que sera la variables con las que se trabajan          
    y = y0;     //igualamos el y0 a y que sera la variables con las que se trabajan

    if (dx > dy) { //si delta de x es mayor a delta de y se hace en base a x y se calcula y

        pk = 2 * dy - dx; //calculamos pk
        ddy = 2 * dy; //calcula mos el valor de 2veces dy
        dresdydx = 2 * (dy - dx); //calculamos el valor de 2 veces la resta de dy -dx
        
        while (x != x1) {  //ejecutamos un while mientras que el x0 sea distinto a x1
            x = x + incx;      //directamente le sumamos un a x para calcular xk+1
            if (pk < 0) {      //decimos si p es menor a cero si es 
                pk = pk + ddy;   //agregamos a pk el 2dy
            } else {                //sino 
                y = y + incy;  //amentamos y como lo indica la regla 
                pk = pk + dresdydx;  //y recalculamos pk  agregamos a pk el 2dy-2dx
            }
            PintarPixel(contexto, x, y, color); //al final pintamos la nueva coordnada que es la siguiente                                                                                        
        }

    } else {  //sino y dy es mayor se hace lo mismo pero en base a y para calcular x
        pk = 2 * dx - dy; //calculamos pk
        ddy = 2 * dx;       //calcula mos el valor de 2veces dy
        dresdydx = 2 * (dx - dy); //calculamos el valor de 2 veces la resta de dy -dx
        while (y != y1) {       //ejecutamos un while mientras que el y0 sea distinto a y1
            y = y + incy;       //directamente le sumamos el incremento a y para calcular yk+1
            if (pk < 0) {       //decimos si pk es menor a cero si es 
                pk = pk + ddy;  //agregamos a pk el 2dy
            } else {            //sino 
                x = x + incx;   //amentamos y como lo indica la regla 
                pk = pk + dresdydx; //y recalculamos pk  agregamos a pk el 2dy-2dx
            }
            PintarPixel(contexto, x, y, color); //al final pintamos la nueva coordnada que es la siguiente                                                                                        
        }
    }                                                                                                             
}