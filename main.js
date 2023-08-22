let plan;
let alquiler;

let invitados;

do {

        invitados = parseInt(prompt("Ingrese cantidad de invitados a su fiesta:\n\nPara salir ingrese 0"));
        if((invitados > 0) && (invitados < 5)){
                alert("Ingrese un numero mayor a 4");
            } else if ((invitados >4) && (invitados <15)){
                alert("1 bartender")
            } else if ((invitados >14) && (invitados <50)){
                alert("2 bartenders");
            } else {
                alert("Ingrese 0 para continuar");
            }
        } while (invitados != 0)


    do {
        plan = parseInt(prompt("Seleccione el numero del plan de su preferencia:\n\n1. Plan Basico \n2. Plan Premium\n3. Plan VIP\n\nPara salir ingrese 0"));
    
    switch (plan) {
            case 0: 
                alert ("Gracias por contactar Top Shelf Drinks!");
                break;
            case 1:
                alert ("Ud escogio el Plan Basico");
                alert ("tiene un costo de 5$ por coctel");
                continue;
            case 2:
                alert ("Ud escogio el Plan Premium");
                alert ("tiene un costo de 7$ por coctel");
                break;
            case 3:
                alert ("Ud escogio el Plan VIP");
                alert ("tiene un costo de 9$ por coctel");
                break;
            default:
                alert ("Ingrese una opcion valida");
                break;
        }
        
        ;
    }while (plan !== 0)

let costoPlan;
    if (plan == 1){
        alert (costoPlan = (5 * invitados));
    } else if (plan == 2){
        alert (costoPlan = (7 * invitados));
    } else ("volver al inicio e ingresar de nuevo los datos");


alert (invitados)
