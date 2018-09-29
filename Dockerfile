FROM node
RUN mkdir /var/app
WORKDIR /var/app
COPY src/ /var/app
RUN npm install
RUN npm install --prefix webapp webapp
RUN echo 'youtubeKey=AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU' > .env
RUN echo 'alias yt=node /var/app' >> ~/.bashrc
RUN echo 'node /var/app' > /search.sh
RUN chmod 777 /search.sh
ENV PATH $PATH:/search.sh
EXPOSE 8080
CMD ["npm", "start"];