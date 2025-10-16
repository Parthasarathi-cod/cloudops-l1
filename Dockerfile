FROM node:20

WORKDIR /usr/src/app

# Install prod deps first for better layer caching
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# App port (must match your server)
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
