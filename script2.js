class salaUrgencias{
    constructor(){
        this.cola = [];
    }
    
    llegadaPaciente(nombre){
        this.cola.push(nombre);
        console.log("paciente ", nombre, "llego a la sala de urgencias")
    }

    atenderPacientes(){
        if(this.cola.length === 0){
            console.log("no hay pacientes en espera");
            return;
        }
        const paciente = this.cola.shift();
        console.log("atendiendo al paciente: ",paciente)
    }
    mostrarPacientes(){
        console.log("pacientes en espera: ",this.cola.join(", "))
    }
}

const urgencias = new salaUrgencias();
urgencias.llegadaPaciente("laura")
urgencias.llegadaPaciente("carlos")
urgencias.llegadaPaciente("valentina")

urgencias.mostrarPacientes();
urgencias.atenderPacientes();
urgencias.atenderPacientes();

urgencias.mostrarPacientes();

