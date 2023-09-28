const { sequelize } = require('./models');
const animeDAO = require('./dataAccess/animeDAO.js');
const peliculaDAO = require('./dataAccess/PeliculaDAO.js');
const usuarioDAO = require('./dataAccess/UsuarioDAO.js');

async function realizarTransaciones(){
    try{
        await sequelize.sync();
        
        const anime = await animeDAO.crearAnime({nombre:'High School DxD', sinopsis:'agarrate que te vienes', uri:'www.anime.com'});
        console.log('anime creado: ',anime.toJSON());

        const pelicula = await peliculaDAO.crearPelicula({nombre:'La venganza de los sids', sinopsis:'los sids se vinieron', uri:'www.pelicula.com'});
        console.log('pelicula creada: ',pelicula.toJSON());

        const usuario = await usuarioDAO.crearUsuario({nickname:'juan', password:'123456'});
        console.log('usuario creado: ',usuario.toJSON());

        const animes = await animeDAO.obtenerAnimes();
        console.log('animes: ',animes);

        const peliculas = await peliculaDAO.obtenerPeliculas();
        console.log('peliculas: ',peliculas);

        const usuarios = await usuarioDAO.obtenerUsuarios();
        console.log('usuarios: ',usuarios);

        await animeDAO.actualizarAnime({id:1,nombre:'High school of the death',sinopsis:'muerte y destruccion',numerocapitulo:2,temporada:1,uri:'www.ea.com'});
        console.log('anime actualizado ');

        await peliculaDAO.borrarPelicula(1);
        console.log('pelicula borrada');
        
        const animesActualizados = await animeDAO.obtenerAnimes();
        console.log('animes actualizados: ',animesActualizados);
    }catch(e){
        throw e;
    }finally{
        await sequelize.close();
    }
}

realizarTransaciones();