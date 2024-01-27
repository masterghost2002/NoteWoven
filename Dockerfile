##build stage
FROM node:20-bullseye-slim AS build
WORKDIR /app
COPY . /app 
RUN yarn install
RUN yarn build

## run stage
FROM gcr.io/distroless/nodejs18-debian12
COPY --from=build /app /usr/src/app
WORKDIR /usr/src/app
CMD ["./dist/server.js"]
