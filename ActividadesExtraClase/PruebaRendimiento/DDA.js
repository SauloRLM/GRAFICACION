function CalculosDePuntosDDA(x0, y0, x1, y1, contexto, color){

    //delimitar dx y dy para ver atrabes de que se va a calcular si de x o de y
    var dx = Math.abs(x1-x0); //Math.abs() para obtener el valor absoluto
    var dy = Math.abs(y1-y0);                                                           

    var antx=0; //variables para obtener el valor anterior sin redondear el de x
    var anty=0; //variables para obtener el valor anterior sin redondear el de y

    //compracion dy y dx para saber en base a que calcular los puntos
    if (dy > dx) {                               

        var m=(x1-x0)/(y1-y0); //calcular pendiente inversa ya que se busca el valor de x 
        //dy es mayor asi que se calcula en base a y                  
        // revisar el si y0 es menor que y1                
        if(y0<y1){

            antx=x0; //se asigna el valor anterior
            var x = x0
            for(var y=y0; y<=y1; y++){ //Elpunto inicial debe estármás a la izq.q el final                             
               PintarPixel(contexto, Math.round(x), y, color); //pintar el sig.punto de la línea Math.round() redondeo de y 
                 x= antx+m; //Ecuación de la recta DDA la suma del xk-1 + m
                antx = x;  //se almacena el nuevo dato de x sin redondeo
                
            }
            //Para poner la coordenada del punto
            //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
        }else{
            antx=x1; //se asigna el valor anterior
            var x = x1
            //se invierte el eje de y 
            for(var y=y1; y<=y0; y++){ //Elpunto inicial debe estármás a la izq.q el final                             
                PintarPixel(contexto, Math.round(x), y, color); //pintar el sig.punto de la línea Math.round() redondeo de y 
                 x= antx+m; //Ecuación de la recta DDA la suma del xk-1 + m
                antx = x; //se almacena el nuevo dato de x sin redondeo

            }
            //Para poner la coordenada del punto
            //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
        }                

    }else{             
        
        
        
        var m=(y1-y0)/(x1-x0); //calcular pendiente normal para calcular y

        if(x1<x0){
            anty = y1; //se asigna el valor anterior
            //dx es mayor asi que se calcula en base a x
            var y = y1;
            for(var x=x1; x<=x0; x++){ //Elpunto inicial debe estármás a la izq.q el final                    

                PintarPixel(contexto, x, Math.round(y), color); //pintar el sig.punto de la línea Math.round() redondeo de y                         
                 y= anty+m; //Ecuación de la recta DDA la suma del yk-1 + m
                anty = y; //se almacena el nuevo dato de y sin redondeo
              
            }
            //Para poner la coordenada del punto
            //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);

        }else{
            anty = y0; //se asigna el valor anterior
            //dx es mayor asi que se calcula en base a x
            var y = y0;
            for(var x=x0; x<=x1; x++){ //Elpunto inicial debe estármás a la izq.q el final
                PintarPixel(contexto, x, Math.round(y), color); //pintar el sig.punto de la línea Math.round() redondeo de y
                y= anty+m; //Ecuación de la recta DDA la suma del yk-1 + m
                anty = y; //se almacena el nuevo dato de y sin redondeo
                
                
            }
            //Para poner la coordenada del punto
            //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);
        }                
    }      
    
}