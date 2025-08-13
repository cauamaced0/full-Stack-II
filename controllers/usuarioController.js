import UsuarioRepository from "../repositories/usuarioRepository";

export default class Usuariocontroller
{
    listar(req,resp)
    {
        let usuariosRepo = new UsuarioRepository();
        let lista = usuariosRepo.listar();
        if(lista.length > 0)
            res.status(200).json(lista);
        else
            res.status(404).json({msg: "Nenhum usuario aqui cacete!"});
    }
}