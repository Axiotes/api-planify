# Use uma imagem Node.js
FROM node:20

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
CMD ["node", "index.js"]
