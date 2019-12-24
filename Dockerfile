FROM  mhart/alpine-node

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build-prod

# Running the app
CMD [ "npm","run", "start-prod" ]