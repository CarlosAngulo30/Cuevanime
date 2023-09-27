class Suscripcion{
    constructor(id,idUsuario,tipo, costo, duracion){
        this.id=id;
        this.idUsuario=idUsuario;
        this.tipo=tipo;
        this.costo=costo;
        this.duracion=duracion;
    }
}

module.exports=Suscripcion;