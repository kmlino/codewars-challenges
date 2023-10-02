# Salesman travel

## DESCRIÇÃO:
Um caixeiro-viajante precisa visitar clientes. Ele obteve o endereço de cada cliente, por exemplo, *"432 Main Long Road St. Louisville OH 43071"* como uma lista.

O formato básico do CEP geralmente consiste em duas letras maiúsculas seguidas de um espaço em branco e cinco dígitos. A lista de clientes a serem visitados foi fornecida como uma sequência de todos os endereços, cada um separado dos demais por uma vírgula, por exemplo, :

**"Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".**

Para facilitar sua viagem, ele deseja agrupar a lista por CEP.

#### Tarefa:

A função travel receberá dois parâmetros r (lista de endereços de todos os clientes como uma string) e CEP e retornará uma string no seguinte formato:

**CEP:rua e cidade,rua e cidade,.../número da casa,número da casa,...**

Os números das ruas devem estar na mesma ordem das ruas às quais pertencem.

Se um determinado CEP não existir na lista de endereços de clientes, retorne **"zipcode:/"**

**Exemplos:**
``` python
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"

```

**English description here on [Salesman travel](https://www.codewars.com/kata/56af1a20509ce5b9b000001e) challenge.**