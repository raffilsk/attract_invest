# Attraction Invest App

Esta ferramenta de nome fictício (Attraction Invest) foi desenvolvida como desafio proposto por uma empresa do segmento financeiro para uma vaga de React Native.
Para isso foi criado também o back-end para persistencia dos dados.

Video da aplicação
[![Imagem da aplicação](http://i1.ytimg.com/vi/I_0dPb7ZG6c/hqdefault.jpg)](https://www.youtube.com/watch?v=I_0dPb7ZG6c)


## BackEnd
No Back-end da aplicação foi utilizado o NodeJs para manter a uniformidade do código já que assim como o React Native também se fundamenta em Javascript.

### DataBase - SQL (SQLite)
A persistência dos dados está sendo feita no SQLite.
Fiz a escoha deste banco pela estrutura e consistencia que o SQL proporciona na entrada e saída dos dados. O SQLite se fez viável também por não precisar baixar nada já que ele ficar armazedo como um arquivo da aplicação, então é uma opção ótima para o ambiente de desenvolvimento.

## Mobile

No desenvolvimento mobile em React Native foi utilizado o **_EXPO_** para visualizar a interface da aplicação.
A logo e outras imagens foram criadas no Photoshop em escalas diferentes.

### Yarn

Utilizei o YARN para instalar as depencias do projeto.

### Instalação

Se não tem o **_EXPO_** intalado pode acessar a documentação dela aqui [LINK]<https://docs.expo.io/get-started/installation/>

Tudo isso OK precisamos instalar as dependências da aplicação entrando nas duas pastas. Como disse usei o Yarn, então recomendo o uso dele também. Para isso basta digitar *yarn* em seu terminal.

``` yarn ```

#### API
No **_EXPO_** é bem provável que precise ajustra a rota em seu dispositivo. No server utilzei a porta 3000 e no mobile você precisa colocar a baseURL que aparecer na parte superior do QRCode que o **_EXPO_** mostrar.
Entre nos arquivos do mobile e na pasta src/services/api.js altere a seguinte linha:

```  baseURL: 'http://192.168.0.2:3000' ```

Ajustada a baseURL da API  e instaladas as dependencias e aj tanto da pasta Server quando da pasta Mobile, basta digitar no terminal nas duas pastas:

``` yarn start ```

A aplicação vai carregar e já poderá ser testada.

#### TDD

No ambiente de test TDD foi utilizado o "React Native Testing Library" com o Jest. Os testes preveem muitas melhorias, mas a estrutura está criada e funcionando. Ela faz a verificação do texto contido no placeHolder dos inputs da aplicação.

Para o ambiente de teste basta digitar:

``` yarn test```


### Comentários

A base está em um nível básico e tem potencial para escalabilidade e melhorias.

- Uma table de contas bancárias (banks) foi criada e está disponível internamente no sistema ela é acionada fixamente nos tanto na entrada quanto na saída dos valores. Uma possibilidade de implemnetação é ter internamente também o cadastro de novas contas bancárias para que o usuários possam escolher quando forem fazer suas movimentações.

- Na tela de Histórico onde estão listadas todas a movimentações existe a possbilidade se adicionar alguma ferramenta para filtar datas, valores e principalmente o tipo de movimentação (entrada ou saída).

- A página de login e cadastro de novos usuários é outra projeção de melhoria inconstestável.

- A aplicação também prevê uma consistencia maior no teste (TDD ou outro) tanto no back quanto no front.

Por fim, agradeço demais a oportunidade de poder realizar este projeto. Foi de fato um desafio e muito enriquecedor por todo estudo realizado em tão pouco tempo.