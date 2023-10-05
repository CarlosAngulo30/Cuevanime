const suscripcion = require('../models/Suscripcion');

class SuscripcionDAO{
    constructor(){}

    async crearSuscripcion({tipo, costo, fechaInicio, fechaFin}){
        try{
            const suscripcion = await suscripcion.create({tipo, costo, fechaInicio, fechaFin});
            return suscripcion;
        }catch(err){
            throw err;
        }
    }

    async obtenerSuscripciones(){
        try{
            const suscripciones = await suscripcion.findAll();
            return suscripciones;
        }catch(err){
            throw err;
        }
    }

    async obtenerSuscripcion(id){
        try{
            const suscripcion = await suscripcion.findByPk(id);
            return suscripcion;
        }catch(err){
            throw err;
        }
    }

    async actualizarSuscripcion({id,tipo, costo, fechaInicio, fechaFin}){
        try{
            await suscripcion.update({tipo, costo, fechaInicio, fechaFin}, {where: {id}});
            const suscripcionActualizada = await suscripcion.findByPk(id);
            return suscripcionActualizada;
        }catch(err){
            throw err;
        }
    }

    async borrarSuscripcion(id){
        try{    
            const suscripcion = await suscripcion.findByPk(id);
            if(!suscripcion){
                throw new Error('Suscripcion no encontrada');    
            }
            await suscripcion.destroy();
            return true;
        }catch(e){
            throw e;
        }
    }
}

module.exports = new SuscripcionDAO();