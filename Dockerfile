FROM node:8-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

ENV NODE_ENV=production

# Build
RUN yarn run build

# Clean
RUN yarn install --force \
                 --ignore-scripts \
                 --prefer-offline && \
		rm -r ./src

EXPOSE 3000

CMD npm run serve -- -p 3000
