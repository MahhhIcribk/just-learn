const (usuario) = {
    id: 3637,
    nome: "Foxxxxx"
    email: "not@mail.com"
}
//criei um obejeto parametro
const obterAtributo = (objeto,chave) => {
    console.log(objeto);
    console.log(objeto[chave]); //irei acessar um dos atributos
}
//funçaõ anonima, criei tres, obejto chave e valor
obterAtributo(usuario,"email");

//se eu abreviar os codigos.. as vezes pode funconar

//na const (usuario) ele é usuario na outra const vira objeto. email vira a chave

//como ele sabe que o objeto seria o usuario, a chave seia o email, valor o id

obterAtributo(usuario,"peso" "80"); //chamei a função e passei para criar campo e apos criar inserir os valores

função pra aapga outro parametro e deletar  