# Algoritmos Fundamentais — Testes Unitários

Projeto baseado nos algoritmos da atividade 1, revisados com programação defensiva e testes unitários utilizando Jest.

## Algoritmos

- Verificação de número primo.
- Somatório.
- Sequência de Fibonacci.
- Máximo divisor comum (MDC).
- Ordenação Quicksort.
- Contagem de valores inteiros em um intervalo.

## Requisitos

- Node.js 22 ou 24.
- npm, incluído na instalação do Node.js.

## Como executar

Abra o terminal na pasta que contém o arquivo package.json.

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm test
```

## Testes

O projeto possui 18 testes, sendo três para cada algoritmo.

Os testes verificam resultados esperados, casos especiais e rejeição de entradas inválidas.

## Melhorias no código

- Nomes significativos para funções e variáveis.
- Validação dos tipos de entrada.
- Rejeição de NaN e valores infinitos.
- Uso de TypeError e RangeError para informar entradas inválidas.
- Separação entre os algoritmos e os testes.
- Quicksort sem modificar a lista original.

## Regras adotadas

- O somatório de uma lista vazia retorna zero.
- Fibonacci aceita de 0 a 79 termos para preservar a precisão dos inteiros.
- O MDC aceita números negativos e retorna um resultado não negativo.
- O MDC rejeita o par (0, 0).
- A contagem considera apenas inteiros entre o primeiro elemento e o limite informado, incluindo as extremidades.
- A contagem de uma lista vazia retorna zero.