# Installs Node.js image
FROM node:19

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)
WORKDIR /usr/src

# Copies everything in the src directory to WORKDIR/src
COPY . .

EXPOSE 5000

# Runs the dev npm script to build & start the server
RUN npm i && npx prisma generate

CMD ["npm", "run", "dev"]
