# Base
FROM node:20 as base

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# Production build
# FROM base as production

# ARG DEEPATLAS_API_URL
# ENV DEEPATLAS_API_URL=$DEEPATLAS_API_URL
# ARG PORT
# ENV PORT=$PORT

# RUN yarn build
# RUN yarn global add @quasar/cli
# CMD quasar serve /app/dist/spa --port $PORT --https --cert /app/ssl/cert.pem --key /app/ssl/privkey.pem

# # Use Node.js base image
# FROM node:20

# # Install required dependencies for Electron
# RUN apt-get update && apt-get install -y \
#   libnss3 \
#   libatk-bridge2.0-0 \
#   libatk1.0-0 \
#   libcups2 \
#   libxkbcommon0 \
#   libgdk-pixbuf2.0-0 \
#   libxss1 \
#   libasound2 \
#   libnspr4 \
#   libpangocairo-1.0-0 \
#   libxcb-xinerama0 \
#   libgtk-3-0 \
#   xdg-utils \
#   && apt-get clean

# # Set working directory
# WORKDIR /app

# # Copy project files
# COPY . .

# # Install dependencies using Yarn
# RUN yarn install

# # Expose the Vue dev server port (used in Electron development)
# EXPOSE 8080

# # Run the Electron app
# CMD ["yarn", "serve"]
