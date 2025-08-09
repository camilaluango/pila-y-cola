class Navegador{
    constructor(){
        this.pilaAtras = [] ;
        this.pilaAdelante = [];
        this.actual = null;
    }
    visitar(pagina){
        if(this.actual !==null){
         this.pilaAtras.push(this.actual);
         this.pilaAdelante = [];
        }
        this.actual = pagina;
         console.log("visitando: ", this.actual);
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
            console.log("no hay paginas adelante, crear una nueva pagina")
            return;
        }
        this.pilaAtras.push(this.actual);
        this.actual = this.pilaAdelante.pop();
        console.log("pagina actual: ",this.actual);
    }
}

const nav = new Navegador();
nav.visitar("google.com");
nav.visitar("doramasflix");
nav.visitar("facebook.com");

nav.atras();
nav.adelante();
nav.adelante()
