FROM oven/bun:latest
ADD src ./src
ADD package.json .
EXPOSE 3000
CMD ["bun", "run", "start"]