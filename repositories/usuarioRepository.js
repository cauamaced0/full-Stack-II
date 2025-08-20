import Usuario from "../entities/usuarioEntity.js";

let usuarios = [];

usuarios.push(new Usuario(1, "Fulvio", "fulvio@unoeste.br"));
usuarios.push(new Usuario(2, "Fulano de Tal", "fulano@unoeste.br"));
usuarios.push(new Usuario(3, "Ciclano de Tal", "ciclano@unoeste.br"));

export default class UsuarioRepository {

    buscarPorId(id) {
        let usuario = usuarios.filter(x=> x.id == id);
        //apenas verifica se existe
        return usuario.length > 0;
    }

    listar() {
        //faria o acesso ao banco
        //mapeamento para a entidade
        //devolução da lista de entidades
        return usuarios;
    }

    cadastrar(usuarioEntidade) {
        //recebe uma entidade usuário para persistir
        // com banco de dados, usariamos a entidade para montar o comando insert
        usuarios.push(usuarioEntidade);
        return true;
    }

    deletar(id) {
        usuarios = usuarios.filter(x=> x.id != id);
    }

    alterar(entidadeAtualizada){
        for(let i = 0; i<usuarios.length;i++){
            if(usuarios[i].id == entidadeAtualizada.id){
            usuarios[i] = entidadeAtualizada
        }
      }
    }

}