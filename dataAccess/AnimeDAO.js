const {Anime} = require('../models');

class AnimeDAO{
    constructor(){}

    async crearAnime({nombre, sinopsis, idRating, calificacionPromedio, temporada, numerocapitulo}){
        try{
            const anime = await Anime.create({nombre, sinopsis, idRating, calificacionPromedio, temporada, numerocapitulo});
            return anime;
        }catch(err){
            throw err;
        }
    }

    async crearAnime({nombre, sinopsis, calificacionPromedio, temporada, numerocapitulo}){
        try{
            const anime = await Anime.create({nombre, sinopsis, calificacionPromedio, temporada, numerocapitulo});
            return anime;
        }catch(err){
            throw err;
        }
    }

    async obtenerAnimes(){
        try{
            const animes = await Anime.findAll();
            return animes;
        }catch(err){
            throw err;
        }
    }

    async obtenerAnime(id){
        try{
            const anime = await Anime.findByPk(id);
            return anime;
        }catch(err){
            throw err;
        }
    }

    async actualizarAnime({id, nombre, sinopsis, calificacionPromedio, temporada, numerocapitulo}){
        try{
            await Anime.update({nombre, sinopsis, calificacionPromedio, temporada, numerocapitulo}, {where: {id}});
            const animeActualizado = await Anime.findByPk(id);
            return animeActualizado;
        }catch(err){
            throw err;
        }
    }

    async borrarAnime(id){
        try{
            const anime = await Anime.findByPk(id)
            if(!anime){
                throw new Error('No existe el anime');
            }
            await anime.destroy();
            return 'Anime eliminado con exito';
        }catch(err){
            throw err;
        }
    }
}

module.exports = new AnimeDAO();