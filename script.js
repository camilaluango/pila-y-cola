class Navegador{
    constructor(){
        this.pilaAtras = [] ;
        this.pilaAdelante = [];
        this.actual = null;
    }
    visitar(pagina){
        if(this.actual){
         this.pilaAtras.push(this.actual);

         this.actual = pagina;
         this.pilaAdelante = [];
         console.log("visitando: ", this.actual);
        }
    }
    atras(){
        if(this.pilaAtras.length === 0){
            console.log("No hay paginas atras");
            return;
        }
        this.pilaAdelante.push(this.actual);
        this.actual = this.pilaAtras.pop();
        console.log("pagina actual: ",this.actual);
    
    }
    adelante(){
        if(this.pilaAdelante.length === 0){
            console.log("no hay paginas adelante")
            return;
        }
        this.pilaAtras.push(this.actual);
        this.actual = this.pilaAdelante.pop();
        console.log("pagina actual: ",this.actual);
    }
}