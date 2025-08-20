import Usuario from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class UsuarioController {

    listar(req, res) {
        try {
            let usuariosRepo = new UsuarioRepository();
            let lista = usuariosRepo.listar();
            if(lista.length > 0)
                res.status(200).json(lista);
            else 
                res.status(404).json({msg: "Nenhum usuário foi encontrado!"});
        }
        catch(exception) {
            console.log(exception);
            res.status(500).json({msg: "Erro ao processar requisição"});
        }
    }

    cadastrar(req, res) {
        try {
            //recuperar as informações do usuario no corpo da requisição
            let {nome, email} = req.body;
            if(nome && email) {
                //nome e email são diferentes de undefined
                let entidade = new Usuario(nome, email);
                let usuarioRepo = new UsuarioRepository();
                let inseriu = usuarioRepo.cadastrar(entidade);
                if(inseriu == true) {
                    return res.status(200).json({msg: "Usuário cadastro com sucesso"});
                }
                else {
                    //não inseriu no bd
                    throw new Error("Erro ao cadastrar usuário. Não foi possível persisti-lo no banco de dados");
                }
                //
            }
            else {
                //nome ou email são undefined
                return res.status(400).json({msg: "O usuário precisa ter nome e e-mail definidos!"})
            }
        }
        catch(exception) {
            console.log(exception);
            return res.status(500).json({msg: exception.message});
        }
    }

    deletar(req, res) {
        try{
            let {email} = req.params;
            let usuarioRepo = new UsuarioRepository();
            if(usuarioRepo.buscarPorEmail(email)) {
                //o usuario para deleção existe;
                usuarioRepo.deletar(email);
                return res.status(200).json({msg: "Usuário excluído com sucesso!"});
            }
            else {
                //usuario para deleção não existe;
                return res.status(404).json({msg: "Usuário não encontrado para deleção"});
            }

        }
        catch(exception) {
            console.log(exception);
            return res.status(500).json({msg: exception.message});
        }
    }

    atualizar() {

    }
}