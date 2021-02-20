const fin = (a:number) => console.log(`Proceso terminado , la cantidad de palabras es: ${a}`)

function dividirCadena(cadenaADividir:string,retardo:number,cb) {
    var arrayDeCadenas = cadenaADividir.split(" ");

 
    for (let i in arrayDeCadenas) {
        (function (i:number) {
            setTimeout(()=>{
                
                console.log(arrayDeCadenas[i] + " ")  
    
                if (i == arrayDeCadenas.length - 1) { cb(Number(i) + 1) }
                
             },retardo * (Number(i))) 
            })(Number(i));

    }
 }
 
 var cadenaVerso = "Es sobre esta atestiguación que el equipo de Creación Morgan ha decidido abrir un departamento."
 var cadenaVerso2 = "Oh brave new world that has such people in it."
 var cadenaVerso3 = "Iniciales bordadas en el interior de la chaqueta, trajes de gala, de los chalecos fraces y colas de urraca."
 dividirCadena(cadenaVerso,500,fin)
 //dividirCadena(cadenaVerso2,250,fin)
 //dividirCadena(cadenaVerso3,500,fin)

 //falta hacer opcional el retardo y lograr que las tres llamadas a la funcion dividircadena se haga una detras de la otro y no mesclado
 