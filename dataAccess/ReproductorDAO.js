const Reproductor = require('../models/Reproductor');

class ReproductorDAO{
    constructor(){}

    async crearReproductorPelicula({nombreReproductor, uri, idPelicula}){
        try{
            const reproductor = await Reproductor.create({nombreReproductor, uri, idPelicula});
            return reproductor;
        }catch(e){
            throw e;
        }
    }

    async crearReproductorAnime({nombreReproductor, uri, idAnime}){
        try{
            const reproductor = await Reproductor.create({nombreReproductor, uri, idAnime});
            return reproductor;
        }catch(e){
            throw e;
        }
    }

    async obtenerReproductorPelicula(id){
        try{
            const reproductor = await Reproductor.findByPk(id);
            return reproductor;
        }catch(e){
            throw e;
        }
    }

    async obtenerReproductorAnime(id){
        try{
            const reproductor = await Reproductor.findByPk(id);
            return reproductor;
        }catch(e){
            throw e;
        }
    }

    async actualizarReproductorPelicula({id, nombreReproductor, uri, idPelicula}){
        try{
            await Reproductor.update({nombreReproductor, uri, idPelicula}, {where: {id}});
            const reproductorActualizado = await Reproductor.findByPk(id);
            return reproductorActualizado;
        }catch(e){
            throw e;
        }
    }

    async actualizarReproductorAnime({id, nombreReproductor, uri, idAnime}){
        try{
            await Reproductor.update({nombreReproductor, uri, idAnime}, {where: {id}});
            const reproductorActualizado = await Reproductor.findByPk(id);
            return reproductorActualizado;
        }catch(e){
            throw e;
        }
    }

    async borrarReproductorPelicula(id){
        try{    
            const reproductor = await Reproductor.findByPk(id);
            if(!reproductor){
                throw new Error('Reproductor no encontrado');    
            }
            await reproductor.destroy();
            return true;
        }catch(e){
            throw e;
        }
    }

    async borrarReproductorAnime(id){
        try{    
            const reproductor = await Reproductor.findByPk(id);
            if(!reproductor){
                throw new Error('Reproductor no encontrado');    
            }
            await reproductor.destroy();
            return true;
        }catch(e){
            throw e;
        }
    }

}

module.exports = new ReproductorDAO();