FROM  mhart/alpine-node

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN cross-env REACT_APP_ENV=prod npm run build

# Running the app
CMD [ "npm", "start" ]