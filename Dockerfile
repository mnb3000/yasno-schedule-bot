FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build

CMD [ "yarn", "run-dist" ]
