

export default class Usuario {

    #nome;
    #email;
    #id;

    get id(){
        return this.#id;
    }

    get email() {
        return this.#email;
    }

    get nome() {
        return this.#nome;
    }

    constructor(id, nome, email) {
        this.#id = id;
        this.#email = email;
        this.#nome = nome;
    }

    toJSON() {
        return {
            id:this.#id,
            nome: this.#nome,
            email: this.#email
        }
    }
}