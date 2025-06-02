FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# mở port 5173 (mặc định của Vite)
EXPOSE 5173

# chạy dev-server, lắng nghe trên 0.0.0.0 để container cho host truy cập được
CMD ["npm","run","dev","--","--host","0.0.0.0"]
