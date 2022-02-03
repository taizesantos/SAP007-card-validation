# Cartão de Crédito Válido

## 1. Proposta de projeto
O desafio era criar uma aplicação web que através do algoritmo de Luhn realiza-se a confirmação de validação do número de cartão de crédito, bem como após o retorno ao usuário, deixar visível somente os 04 últimos dígitos do cartão. 

## 2. Projeto realizado
O produto final é um site que possui ferramentas que através do algoritmo de Luh, confirma ao usuário a validação de dados, dentre eles o do cartão de crédito.

## 3. Estrutura
O site tem uma estrutura clara e objetiva, contendo:
Na parte central um menu com as opções:
- Validador de cartão
- Validador de CNPJ 
- Validador de CNPF
- Validador de Número de telefone
- Validador de IMEI
Na parte inferior da tela possuí um menu com botões para direcionar para as minhas redes sociais:
- GitHub
- Linkedin

## 4. Funcionamento
1° No menu disponível, o usuário deverá clicar na opção "VALIDADOR DE CARTÃO". 
2° Após o clique, o usuário será direcionado para a tela de validação.
3° O usuário deverá incluir no campo "NÚMERO DO CARTÃO" todos os digítos do seu cartão e em seguida clicar no botão "VALIDAR".

## 5. Ferramentas e metodologia aplicada
Para a construção do site foi utilizado o software Visual Studio Code com a extenção do Node-js. Sua marcação foi feita em HTML e sua estilização em CSS. O Valida dados foi programado em vanilla JavaScript, contendo os arquivos, index.js, responsável pela interação dos elementos do DOM e o validador.js responsável pelas lógicas de validar e mascarar os digítos do cartão insluso pelo usuário.
Utilizei o Trello para me organizar durante as Sprints do projeto, realizando a divisão das atividade a serem desenvolvidas, geradas a partir do Backlog.
Assim como as cerimonias da metodologia ágil: Daily, Sprint Planning, Sprint Review, Sprint Retrospective, e Sprint Checkout.

## 6. Implementações futuras
- Incluir na validação de cartão de crédito as informações sobre a rede emissora do cartão (Ex: mastercard, visa etc) e país emissor. 
- Realizar a inclusão da funcionalidade para validação dos demais dados disponiveis no menu também com o algoritmo de Luhn.

## 7. Objetivos de aprendizagem realizados
Usabilidade do HTML Semântico
Usabilidade do CSS
JavaScrip:
- Maninulação dinâmica de DOM
- Gerenciamento de eventos de DOM
- Variaveis, funcões, laços e usos de condicionais
- Testes
Git e GitHub:
 - Git: Instalação e configuração
 - Git: Controle da versão com git (init, clone, add, commit, status, push, pull, remote)
 - GitHub: Implantação com GitHub Pages

 ## 8. Como usar
Você precisará usar o Node.js

Clonar o projeto

` $ git clone 

Instalar as dependências do projeto

` $ npm install or yarn`

Iniciar a aplicação

` $ npm start or yarn start`

Realizar os testes unitários

` $ npm test or yarn test`

Criado por [Taize Santos]