# Help the bookseller !

## DESCRIÇÃO:

Um livreiro tem muitos livros classificados em 26 categorias rotuladas como A, B, ... Z. Z. Cada livro tem um código c de 3, 4, 5 ou mais caracteres. O primeiro caractere de um código é uma letra maiúscula que define a categoria do livro.

Na lista de estoque do livreiro, cada código c é seguido por um espaço e por um número inteiro positivo n (int n >= 0) que indica a quantidade de livros desse código em estoque.

Por exemplo, um extrato de uma lista de estoque poderia ser:
``` python
L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
```
ou:
``` python
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
```

Você receberá uma lista de estoques (por exemplo: L) e uma lista de categorias em letras maiúsculas, por exemplo:

``` python
M = {"A", "B", "C", "W"} 
```
ou:
``` python
M = ["A", "B", "C", "W"]
```

e sua tarefa é encontrar todos os livros de L com códigos pertencentes a cada categoria de M e somar a quantidade deles de acordo com cada categoria.

``` python
articles = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
categories = ["A", "B", "D"]
```
deve retornar:
``` python
(A : 20) - (B : 114) - (D : 60)
```

**English description here on [Help the bookseller](https://www.codewars.com/kata/54dc6f5a224c26032800005c) challenge.**