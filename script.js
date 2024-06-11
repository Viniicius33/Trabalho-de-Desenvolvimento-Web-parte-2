document.getElementById('botao').onclick = function() {
    document.getElementById('mensagem').innerHTML = 'Essa loja está online a 2 anos e sempre entregando produtos de qualidade e com total confiança para nossos clientes.';
};


alert("Antes de acessar o site, gostaria de dizer que estou contratando para a loja, se estiver interessado(a) me chame no email pessoal (que está no site) para saber mais sobre as vagas disponiveis.");

let nome =  " agradecemos você";
let idade = 1;


alert("Obrigado,"+ nome + " por mais " + idade + " acesso no site.");


console.log('Bem vindos ao site')

function minhaFunção(objeto) {
objeto.make = "Celular";
}

var meucelular = { make: "Android", model: "Accord", year: 2021 };
    var x, y;

    x = meucelular.make; // x recebe o valor "Android"

    minhaFunção(meucelular)
    y = meucelular.make; // y recebe o valor "Celular"
    // (a propriedade make foi alterada pela função)

    function fatorial (n) {
        if (n == 0 || n == 1) return 1;
        else return n * fatorial(n-1);
    }

    var celular, computador, teclados, fones, notebooks
    celular= fatorial(1); // celular recebe o valor 1
    computador= fatorial(2); // computador recebe o valor 2
    teclados= fatorial(3); // teclados recebem o valor 6
    fones= fatorial(4); // fones recebem o valor 24
    notebooks= fatorial(5); // notebooks recebem o valor 120
 
console.log('Bem vindos ao site')


document.write( "Por favor, se possivel preencha o formulário abaixo, obrigado.")

var listadeeletronicos = ['Celular','notebook','computador','fones','teclados'];

listadeeletronicos.forEach(function (item, indice) {
    console.log(item, indice);
});

// celular 0

// notebook 1

// computador 2

// fones 3

// teclados 3

var listadeeletronicos =  ['Celular','notebook','computador','fones','teclados'] 
listadeeletronicos.push('Placa de video');

//['Placa de video','Celular','notebook','computador','fones','teclados'] 


var mensagemElemento = document.getElementById('mensagem');
    mensagemElemento.innerHTML = 'Clique abaixo para saber a quanto tempo esta loja está online';

    var botaoelemento = document.getElementById('botao');
    botaoelemento.style.backgroundColor = 'Green';

    








