#!/bin/bash
docker build -t yt-search-docker .
docker tag yt-search-docker:latest yt-search-docker:development