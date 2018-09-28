# Setup
* Download [Git](https://git-scm.com/download/mac) if you don't already have it
* Download [Docker](https://store.docker.com/search?offering=community&type=edition)

Run the following command to start this file from the project to build the Docker image
```bash
./docker-build
```

Then you may run the app using the following command file from the project
```bash
./run.sh
```

This command takes the following parameters
* -s [search terms]
	* The terms to be search on youtube for
* -r [result count]
	* The number of results per page desired
* -p [page count]
	* The amount of pages to pull back