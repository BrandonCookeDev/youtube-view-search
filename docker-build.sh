#!/bin/bash
git pull
# npm install --prefix src src
docker build -t yt-search-docker .
docker tag yt-search-docker:latest yt-search-docker:development