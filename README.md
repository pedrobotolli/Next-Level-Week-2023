# Next Level Week IA 2023 - Trilha Mastery

## Sobre o projeto
O foco do projeto é desenvolver uma aplicação onde possa ser feito o upload de um vídeo, e com esse vídeo gerar uma transcrição do áudio e utilizando a transcrição em conjunto com ferramentas de IA generativa criar idéias de títulos e descrições para o vídeo.

## Ferramentas utilizadas
#### Gerenciador de pacotes
O gerenciador de pacotes utilizado no curso foi o *pnpm*, seus comandos são semelhantes aos do *npm* e para instalá-lo deve ser utilizado o seguinte comando:
`npm install -g pnpm`
(não é obrigatório utilizar para executar esse repositório na sua máquina, você pode utilizar o gerenciador de pacotes de sua preferência, porém o uso de pnpm está sendo incentivado pois otimiza o uso de espaço em disco (bibliotecas com mesma versão são instaladas apenas uma vez))

#### Estilização e biblioteca de componentes
A biblioteca de estilização escolida foi o framework [Tailwind CSS](https://tailwindcss.com/ "Tailwind CSS"), o que proporciona maior rapidez na estilização dos elementos sem precisar se preocupar com a criação de arquivos css.

Para componentes utilizamos a biblioteca [Radix UI](https://www.radix-ui.com/ "Radix UI"), que disponibiliza vários componentes não estilizados.

E para facilitar ainda mais a criação da UI da aplicação, utilizamos a coleção de componentes reutilizáveis [shadcn/ui](https://ui.shadcn.com/docs "shadcn/ui"), essa não é uma dependência do projeto, os componentes adicionados fazem parte do código fonte e podem ser modificados conforme a necessidade, além disso os componentes do shadcn/ui são feitos utilizando Tailwind CSS e Radix UI que já são dependências do nosso projeto.

## Como executar na minha própria máquina
Com o repositório clonado na sua máquina execute o seguinte comando para instalar as dependências do projeto:

`pnpm i`

Após instalar as dependências, você pode inicializar a aplicação com o comando:

`pnpm run dev`

E com isso a aplicação deve estar pronta para uso! 😁👌
