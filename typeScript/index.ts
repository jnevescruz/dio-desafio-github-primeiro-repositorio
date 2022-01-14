//Generic types <T>

function adicionaApendiceALista<T>(array: any[], valor: T){
return array.map(item => item + valor)
}
adicionaApendiceALista(['A', 'B', 'C'], 'd')
