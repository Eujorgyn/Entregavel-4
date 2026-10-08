function validarInteiro(numero, nome) {
    if (!Number.isSafeInteger(numero)) {
        throw new TypeError(`${nome} deve ser um número inteiro seguro.`);
    }
}

function validarListaNumerica(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError("A entrada deve ser uma lista.");
    }

    for (const numero of numeros) {
        if (!Number.isFinite(numero)) {
            throw new TypeError("A lista deve conter apenas números finitos.");
        }
    }
}

function verificaPrimo(numero) {
    validarInteiro(numero, "O número");

    if (numero < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }

    return true;
}

function calcularSomatorio(numeros) {
    validarListaNumerica(numeros);

    let soma = 0;

    for (const numero of numeros) {
        soma += numero;

        if (!Number.isFinite(soma)) {
            throw new RangeError("A soma ultrapassou o limite numérico.");
        }
    }

    return soma;
}

function gerarFibonacci(quantidade) {
    validarInteiro(quantidade, "A quantidade");

    if (quantidade < 0 || quantidade > 79) {
        throw new RangeError("A quantidade deve estar entre 0 e 79.");
    }

    const sequencia = [];

    for (let indice = 0; indice < quantidade; indice++) {
        if (indice < 2) {
            sequencia.push(indice);
        } else {
            const proximo = sequencia[indice - 1] + sequencia[indice - 2];
            sequencia.push(proximo);
        }
    }

    return sequencia;
}

function calcularMDC(primeiroNumero, segundoNumero) {
    validarInteiro(primeiroNumero, "O primeiro número");
    validarInteiro(segundoNumero, "O segundo número");

    if (primeiroNumero === 0 && segundoNumero === 0) {
        throw new RangeError("Informe pelo menos um número diferente de zero.");
    }

    let primeiro = Math.abs(primeiroNumero);
    let segundo = Math.abs(segundoNumero);

    while (segundo !== 0) {
        const resto = primeiro % segundo;
        primeiro = segundo;
        segundo = resto;
    }

    return primeiro;
}

function quicksort(numeros) {
    validarListaNumerica(numeros);

    function ordenar(lista) {
        if (lista.length <= 1) {
            return [...lista];
        }

        const pivo = lista[Math.floor(lista.length / 2)];
        const menores = [];
        const iguais = [];
        const maiores = [];

        for (const numero of lista) {
            if (numero < pivo) {
                menores.push(numero);
            } else if (numero > pivo) {
                maiores.push(numero);
            } else {
                iguais.push(numero);
            }
        }

        return [...ordenar(menores), ...iguais, ...ordenar(maiores)];
    }

    return ordenar(numeros);
}

function contarValores(dados, limite) {
    validarListaNumerica(dados);

    if (!Number.isFinite(limite)) {
        throw new TypeError("O limite deve ser um número finito.");
    }

    if (dados.length === 0) {
        return 0;
    }

    const limiteInferior = Math.min(dados[0], limite);
    const limiteSuperior = Math.max(dados[0], limite);
    let quantidade = 0;

    for (const valor of dados) {
        if (
            Number.isInteger(valor) &&
            valor >= limiteInferior &&
            valor <= limiteSuperior
        ) {
            quantidade++;
        }
    }

    return quantidade;
}

module.exports = {
    verificaPrimo,
    calcularSomatorio,
    gerarFibonacci,
    calcularMDC,
    quicksort,
    contarValores
};