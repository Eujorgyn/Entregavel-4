const {
    verificaPrimo,
    calcularSomatorio,
    gerarFibonacci,
    calcularMDC,
    quicksort,
    contarValores
} = require("./atividade");

describe("Número primo", () => {
    test("Identifica 7 como primo", () => {
        expect(verificaPrimo(7)).toBe(true);
    });

    test("Identifica 8 como não primo", () => {
        expect(verificaPrimo(8)).toBe(false);
    });

    test("Rejeita um número decimal", () => {
        expect(() => verificaPrimo(2.5)).toThrow(TypeError);
    });
});

describe("Somatório", () => {
    test("Soma os números de uma lista", () => {
        expect(calcularSomatorio([10, 20, 30])).toBe(60);
    });

    test("Retorna zero para uma lista vazia", () => {
        expect(calcularSomatorio([])).toBe(0);
    });

    test("Rejeita uma lista contendo texto", () => {
        expect(() => calcularSomatorio([1, "2", 3])).toThrow(TypeError);
    });
});

describe("Fibonacci", () => {
    test("Gera os cinco primeiros termos", () => {
        expect(gerarFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test("Retorna uma lista vazia para zero termos", () => {
        expect(gerarFibonacci(0)).toEqual([]);
    });

    test("Rejeita uma quantidade negativa", () => {
        expect(() => gerarFibonacci(-1)).toThrow(RangeError);
    });
});

describe("MDC", () => {
    test("Calcula o MDC de 12 e 18", () => {
        expect(calcularMDC(12, 18)).toBe(6);
    });

    test("Calcula o MDC quando um número é zero", () => {
        expect(calcularMDC(0, 8)).toBe(8);
    });

    test("Rejeita NaN para evitar um loop infinito", () => {
        expect(() => calcularMDC(12, NaN)).toThrow(TypeError);
    });
});

describe("Quicksort", () => {
    test("Ordena a lista sem modificar a original", () => {
        const numeros = [5, 2, 8, 1];

        expect(quicksort(numeros)).toEqual([1, 2, 5, 8]);
        expect(numeros).toEqual([5, 2, 8, 1]);
    });

    test("Ordena números negativos e repetidos", () => {
        expect(quicksort([3, -1, 3, 0])).toEqual([-1, 0, 3, 3]);
    });

    test("Rejeita uma entrada que não seja uma lista", () => {
        expect(() => quicksort("3, 2, 1")).toThrow(TypeError);
    });
});

describe("Contagem", () => {
    test("Conta os inteiros dentro do intervalo inclusivo", () => {
        expect(contarValores([2, 3, 4, 5, 6], 5)).toBe(4);
    });

    test("Ignora decimais e aceita o intervalo invertido", () => {
        expect(contarValores([5, 4, 3.5, 2, 1], 2)).toBe(3);
    });

    test("Rejeita um limite em formato de texto", () => {
        expect(() => contarValores([1, 2, 3], "3")).toThrow(TypeError);
    });
});