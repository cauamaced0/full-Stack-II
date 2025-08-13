import Usuario from "../entities/usuarioEntity";

let Usuario = [];

usuarios.push(new Usuario("Fulvio", "Emailqualquer12@gmail.com"));
usuarios.push(new Usuario("Fulvia", "Emailqualquer312@gmail.com"));
usuarios.push(new Usuario("Flaviu", "Emailqualquer453@gmail.com"));

export default class UsuarioRepository 
{
    listar()
    {
        return usuarios;
    }

    cadastrar(usuarioEntidade)
    {
        
    }
}