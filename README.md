# CRUD-EXPRESS
 :dart:  "CRUD" utilizando express utilizando midlewares locais e globais  :dart:  

- O Express é um framework para produção de aplicações web do Node.js bastante flexível e que fornece um conjunto robusto
de recursos para aplicativos web e móvel.

- Com uma miríade de métodos utilitários HTTP e middleware a seu dispor, criar uma API robusta é rápido e fácil.

Este repositŕio contem um exemplo de API node utilizando express além de abordar os conceitos de midlewares que podemos
definir como:

**Funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res), e a próxima função de middleware no
ciclo solicitação-resposta do aplicativo. A próxima função middleware é comumente denotada por uma variável chamada next.**

Funções de middleware podem executar as seguintes tarefas:

- Executar qualquer código.
- Fazer mudanças nos objetos de solicitação e resposta.
- Encerrar o ciclo de solicitação-resposta.
- Chamar a próxima função de middleware na pilha.

Se a atual função de middleware não terminar o ciclo de solicitação-resposta, ela precisa chamar next() para passar o
controle para a próxima função de middleware. Caso contrário, a solicitação ficará suspensa.

Podemos ainda separar os middlewares em dois tipos: globais e locais, os glabais são aplicados em todos os métodos da
aplicação, enquanto os locais apenas nos que forem solicitados, para este exemplo temos um middleware global exibe uma
mensagem no terminal com o número de solicitaçẽos feitas a api e um outro local que é utilizado apenas nos métodos que
recebem um ID (show,update e delete), este verifica se o ID informado está cadastrado no banco de dados antes de
prosseguir com a busca.
