const {Pelicula} = require('../models');

class PeliculaDAO{
    constructor(){}

    async crearPelicula({nombre, sinopsis, calificacionPromedio}){
        try{
            const pelicula = await Pelicula.create({nombre, sinopsis, calificacionPromedio});
            return pelicula;
        }catch(e){
            throw e;
        }
    }

    async obtenerPeliculas(){
        try{
            const peliculas = await Pelicula.findAll();
            return peliculas;
        }catch(e){
            throw e;
        }
    }

    async obtenerPelicula(id){
        try{
            const pelicula = await Pelicula.findByPk(id);
            return pelicula;
        }catch(e){
            throw e;
        }
    }

    async actualizarPelicula({id, nombre, sinopsis, calificacionPromedio}){
        try{
            await Pelicula.update({nombre, sinopsis, calificacionPromedio}, {where: {id}});
            const peliculaActualizada = await Pelicula.findByPk(id);
            return peliculaActualizada;
        }catch(e){
            throw e;
        }
    }

    async borrarPelicula(id){
        try{    
            const pelicula = await Pelicula.findByPk(id);
            if(!pelicula){
                throw new Error('Pelicula no encontrada');    
            }
            await pelicula.destroy();
            return true;
        }catch(e){
            throw e;
        }
    }
}

module.exports = new PeliculaDAO();