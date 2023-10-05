const {Usuario} = require('../models');

class UsuarioDAO{
    constructor(){}

    async crearUsuario({nickname, password, idsuscripcion}){
        try{
            const usuario = await Usuario.create({nickname, password, idsuscripcion});
            return usuario;
        }
        catch(error){
            throw error;
        }
    }

    async obtenerUsuarios(){
        try{
            const usuarios = await Usuario.findAll();
            return usuarios;
        }
        catch(error){
            throw error;
        }
    }

    async obtenerUsuarioID(id){
        try{
            const usuario = await Usuario.findById(id);
            return usuario;
        }
        catch(error){
            throw error;
        }
    }

    async actualizarUsuario({id, nickname, password}){
        try{
            await Usuario.update({nickname, password}, {where: {id}});
            const usuarioActualizado = await Usuario.findByPk(id);
            return usuarioActualizado;
        }
        catch(error){
            throw error;
        }
    }

    async eliminarUsuarios(id){
        try{
            const usuario = await Usuario.findByPk(id);
            if(!usuario){
                throw new Error('Usuario no encontrado');
            }
            await usuario.destroy();
            return 'Usuario Eliminado';
        }
        catch(error){
            throw error;
        }
    }

}

module.exports = new UsuarioDAO();