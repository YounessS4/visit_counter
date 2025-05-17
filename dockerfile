# Étape 1 : image de base
FROM node:20-alpine

# Étape 2 : définir le répertoire de travail
WORKDIR /app

# Étape 3 : copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Étape 4 : copier le code source
COPY . .

# Étape 5 : exposer le port
EXPOSE 3000

# Étape 6 : démarrer l'application
CMD ["npm", "start"]
