const cep = document.getElementById('cep');
const endereco = document.getElementById('endereco');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const enviar = document.getElementById('enviar');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const numero =  document.getElementById('numero');

const preencherForm = (promisseEndenreco) => {
    endereco.value = promisseEndenreco.logradouro;
    bairro.value = promisseEndenreco.bairro;
    cidade.value = promisseEndenreco.localidade;
    estado.value = promisseEndenreco.uf;
}
const limparForm = () => {
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}
// expressão regular para verificar se é um número
const eNumero = (numero) => /^[0-9]+$/.test(numero);

// de acordo com a api o cep tem que ter o tamanho de 8 e ser numero
const cepValido = (valueCep) => valueCep.length === 8 && eNumero(valueCep);


const pesquisarCep = async() => { 
    const valueCep = cep.value;
    const url = `http://viacep.com.br/ws/${valueCep}/json/`;
    
    if (cepValido(valueCep)){
        const promesseDados = await fetch(url);
        const promisseEndenreco = await promesseDados.json();
        if (promisseEndenreco.hasOwnProperty('erro')){
            endereco.value = "CEP NÃO ENCONTRADO";
            limparForm();
         } else {
            preencherForm(promisseEndenreco);
        }
    } else {
        endereco.value = "CEP INVÁLIDO";
        limparForm();
        
    }
    
    
}
cep.addEventListener("focusout", pesquisarCep);


const enviarForm = () => {
    nome.value = "";
    email.value = "";
    cep.value = "";
    endereco.value = "";
    numero.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";

} 

enviar.addEventListener("click", enviarForm);