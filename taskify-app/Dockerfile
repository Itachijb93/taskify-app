# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy app source code
COPY . .

# Install dependencies and build the app
RUN npm install && npm run build

# Serve stage
FROM nginx:alpine

# Copy built React app to NGINX
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
