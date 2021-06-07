To play
https://nostalgic-euclid-aed8db.netlify.app/

alt text

1. Como rodar localmente?
   1.1 Entre no prompt de comando ou terminal e navegue até a pasta desejada.
   1.2 Clone o repositório digitando o seguinte comando:
   git clone "https://github.com/saulocastillos/marvel-web"

1.3 Entre na pasta weather:
cd marvel-web

1.4 Crie um arquivo .env na raiz do projet e adicionane a sua key.
1.4.1 Substitua o texto YOUR_KEY por sua chave, gerada em developers.marvel.com

REACT_APP_MARVEL_API=https://gateway.marvel.com:443
REACT_APP_ML_PBLC_API_KEY=YOUR_KEY

1.5 Rode o npm:
npm install

1.6 Pronto, basta executar o seguinte comando:
npm start
