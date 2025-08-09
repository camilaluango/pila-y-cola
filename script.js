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
}