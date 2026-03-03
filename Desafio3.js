class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque genérico';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Gandalf", 1000, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const ninja = new Heroi("Hanzo", 30, "ninja");

mago.atacar();      
guerreiro.atacar(); 
ninja.atacar();     