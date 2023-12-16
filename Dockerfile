FROM node:20-alpine3.19

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./

# RUN npm ci --only=production
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci --only=production

USER node

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "node", "server.js" ]