const Rating = require('../models/Rating');

class RatingDAO{
    constructor(){}

    async crearRatingAnime({calificacion,idAnime,idUsuario}){
        try{
            const rating = await Rating.create({calificacion,idAnime,idUsuario});
            return rating;
        }catch(err){
            throw err;
        }
    }

    async crearRatingPelicula({calificacion,idPelicula,idUsuario}){
        try{
            const rating = await Rating.create({calificacion,idPelicula,idUsuario});
            return rating;
        }catch(err){
            throw err;
        }
    }

    async obtenerRatings(){
        try{
            const ratings = await Rating.findAll();
            return ratings;
        }catch(err){
            throw err;
        }
    }

    async obtenerRating(id){
        try{
            const rating = await Rating.findByPk(id);
            return rating;
        }catch(err){
            throw err;
        }
    }

    async actualizarRating({id,calificacion,promedio}){
        try{
            await Rating.update({calificacion,promedio}, {where: {id}});
            const ratingActualizado = await Rating.findByPk(id);
            return ratingActualizado;
        }catch(err){
            throw err;
        }
    }

    async eliminarRating(id){
        try{
            const rating = await Rating.findByPk(id);
            if(!rating){
                throw new Error('Rating no encontrado');
            }
            await rating.destroy();
            return 'Rating Eliminado';
        }catch(err){
            throw err;
        }
    }
}

module.exports = new RatingDAO();