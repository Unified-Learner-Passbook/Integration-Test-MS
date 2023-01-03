FROM node:16 as dependencies
WORKDIR /app
COPY . ./
RUN npm install
CMD ["yarn", "test"]