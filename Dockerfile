FROM node:16-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "run", "dev"]