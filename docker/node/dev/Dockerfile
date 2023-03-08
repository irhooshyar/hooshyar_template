FROM public.ecr.aws/docker/library/node:16

WORKDIR /app

# RUN npm install -g npm@9.6.0

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install