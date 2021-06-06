To play
https://saulocastillos.github.io/weather/

alt text

1. Como rodar localmente?
   1.1 Entre no prompt de comando ou terminal e navegue até a pasta desejada.
   1.2 Clone o repositório digitando o seguinte comando:
   git clone "https://github.com/saulocastillos/weather.git"

1.3 Entre na pasta weather:
cd weather

1.4 Edite o arquivo .env na raiz do projeto, adicionando a sua key.
1.4.1 Substitua o texto YOUR_KEY por sua chave, gerada em https://api.openweathermap.org
REACT_APP_KEY=YOUR_KEY

1.5 Rode o yarn:
yarn

1.6 Pronto, basta executar o seguinte comando:
yarn start

2 .Como fazer o deploy?
2.1 Depois de seguir o passso 1 (como rodar o projeto localmente), execute o seguinte comando no terminal dentro da pasta raiz do projeto:
yarn run deploy
