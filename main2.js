let propuesta;
let alquiler = "1. Mini Bar portatil = $500.\n2. Bar Truck = $1000."
let planes = "1. Plan Basico\n2. Plan Premium.\n3 - Plan Vip.\n\nPara salir ingrese 0 "
let invitados;
do {
    propuesta = parseInt(prompt("Para conocer requerimientos y costos para su evento complete la siguiente informacion:\n\n1. Costo delquiler de Bar\n2. Planes en cocteles\n3. Costo de Staff\n\nPara salir ingrese 0"));
        switch (propuesta) {
            case 0:
                alert ("gracias por contactarnos");
                break;
            case 1:
                alert ("Contamos con dos opciones de bares para sus eventos: \n\n- Mini Bar\n- Bar Truck\n\nHaga click en 'ok' para conocer mas detalles ");
                alquilerDeBar();
            case 2:
                let planes = parseInt(prompt("Escoja el plan de su preferencia:\n\n1- Plan Basico\n2- Plan Premium.\n3- Plan Vip\n\nPara salir ingrese 0"));
                mostrarPlanes(planes);
            case 3:
                let invitados = parseInt(prompt("Indique la cantidad aproximada de invitados que tendra en su evento:"))
                infoInvitados(invitados);
                break;

 
        }
} while (plan !==0);


function alquilerDeBar() {
    alert(alquiler);
};


function mostrarPlanes(planes) {
    switch (planes) {
        case 0:
            alert ("gracias por contactarnos");
            break;
        case 1:
            alert("El precio es $5000");
            break;
        case 2:
            alert("El precio es $7000");
            break;
        case 3:
            alert("El precio es $9000");
            break;
        default:
            alert("Seleccione una opcion valida");
    };
};




function infoInvitados(invitados){
    while ((invitados !==0) || (invitados>99)) {
        if (invitados < 10) {
        alert("Para la cantidad de " + invitados + " cubrimos 50 cocteles e incluimos un bartender");  
        alert("El costo es de 500$");
        }else if ((invitados>9) && (invitados<31)){
            alert("Para la cantidad de " + invitados + " cubrimos 150 cocteles e incluimos dos bartender");
            alert("El costo es de 1000$");
        } else if ((invitados>30) && (invitados<100)){
            alert("Para la cantidad de " + invitados + " cubrimos 250 cocteles e incluimos dos bartender mas un barback");
            alert("El costo es de 1500$");
        }    else{
            alert("Ingresar un numero de invitados entre 10 y 100")
        }
        if (invitados == o) {
            alert ("Gracias por contactanos")
        }
    }
}

