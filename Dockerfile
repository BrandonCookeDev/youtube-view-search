FROM node
RUN mkdir /var/app
WORKDIR /var/app
COPY src/ /var/app
RUN npm install /var/app
RUN echo 'youtubeKey=AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU' > .env
RUN echo 'alias yt=node /var/app' >> ~/.bashrc
RUN echo 'node /var/app' > /search.sh
RUN chmod 777 /search.sh
ENV PATH $PATH:/search.sh