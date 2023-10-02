# Chat room names

## DESCRIÇÃO

Você está escrevendo um aplicativo de sala de bate-papo para a sua empresa.

Os usuários forneceram feedback de que ver os nomes completos de todos na tela cria muito ruído e pediram que isso fosse reduzido. No entanto, ainda queremos ser capazes de identificar todos de forma exclusiva. A equipe elaborou algumas regras que, esperamos, ajudarão a resolver esse problema!

Observação: pode-se presumir que os nomes estão no formato de um primeiro nome e um sobrenome que consistem apenas em letras do alfabeto inglês, tanto maiúsculas (A-Z) quanto minúsculas (a-z), separadas por um único espaço e, se nenhum nome for fornecido, devemos retornar uma matriz vazia.

Se apenas uma pessoa na sala de bate-papo tiver um primeiro nome específico, somente o primeiro nome dela será escrito.

 **John Smith -> John**

Se duas ou mais pessoas tiverem um primeiro nome específico, mas não compartilharem a inicial do segundo nome, o primeiro nome e a inicial do segundo nome serão escritos.

**John Smith -> John S \
 John Adams -> John A**

Por fim, se duas ou mais pessoas tiverem um primeiro nome e uma inicial de sobrenome específicos, seu nome completo será escrito.

 **John Smith -> John Smith \
 John Simms -> John Simms**

Para ajudar a organizar a saída, a gerência também solicitou que a lista de salas de bate-papo fosse alfabetizada pelos nomes de tela dos usuários e que todos estivessem em maiúsculas e minúsculas.

**JOHN smith -> John Smith**

Para nossos propósitos, quando recebemos os nomes, a caixa não é importante, o que significa que JOHn SmiTh é igual a john smith.

Nossa empresa também tem uma política incomum: não contratamos ninguém se já existir um funcionário com o mesmo nome completo, pois nossa plataforma de RH identifica a equipe por uma combinação de nome e sobrenome. Por esse motivo, não precisamos nos preocupar com várias instâncias do mesmo nome completo.

**English description here on [Generate chat room names](https://www.codewars.com/kata/64d9f8b2dd14d200247b8184)**
