FROM node:20.10.0

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

ARG PUBLIC_WEB_URL

ENV PUBLIC_WEB_URL=${PUBLIC_WEB_URL}

WORKDIR /usr/src/app

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

COPY server ./server

CMD [ "node", "server/index.mjs" ]