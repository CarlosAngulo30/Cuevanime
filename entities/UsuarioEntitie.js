class Usuario{
    constructor(id,nickname,password, suscripcionId, peliculas,animes){
        this.id=id;
        this.nickname=nickname;
        this.password=password;
        this.suscripcionId=suscripcionId;
        this.peliculas=peliculas;
        this.animes=animes;
    }
}

module.exports=Usuario;