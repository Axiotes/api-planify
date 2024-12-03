# Use uma imagem Node.js
FROM node:20

# Instalar dockerize
RUN apt-get update && apt-get install -y wget && \
    wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz && \
    tar -xzvf dockerize-linux-amd64-v0.6.1.tar.gz && \
    mv dockerize /usr/local/bin/

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos para o contêiner
COPY package.json ./
COPY index.js ./

# Instalar dependências
RUN npm install

# Expor a porta do backend
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "60s", "npm", "start"]
