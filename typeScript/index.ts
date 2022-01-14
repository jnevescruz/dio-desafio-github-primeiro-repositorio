//types
//interfaces

interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visãoNoturna: boolean
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino /*type serve para fazer junçoes*/

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
   }

