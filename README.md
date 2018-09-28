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

Examples:
```bash
./run.sh -s KPAN -r 10 -p 5
```

```
Title: PRIE DIEU AVANT DE DORMIR ! / Marcelle Kpan
Views: 172085
------------------
Title: Zule Zoo - "Chin Kpan" (Official Music Video)
Views: 36675
------------------
Title: KOLLINS DREAM FACE-KPAN GOGO (Official Audio)
Views: 31406
------------------
Title: Heartbreaking Ending of Wizzrobe Vs. KPAN at CEO 2016 - Pools
Views: 23071
------------------
...
```

Adding extra search terms can narrow down the results
```bash
./run.sh -s KPAN ssbm melee Recursion -r 10 -p 5
```
```
Title: CEO2016 - COG | Wizzrobe vs CKS | Kpan  - Melee Pools
Views: 4186
------------------
Title: Prier pour son mariage avec Marcelle  KPAN épouse VAGBA
Views: 3913
------------------
Title: QUELLE ATTITUDE DANS LES EPREUVES ? / Marcelle Kpan épouse VAGBA
Views: 3434
------------------
Title: GENESIS 5 SSBM - KPAN (Falco) VS FOX MVG | Mew2King (Sheik) - Smash Melee Singles
Views: 3407
------------------
Title: STR2015 - SS | Colbol (Marth) Vs. Kpan (Falco) SSBM Top 64 Smash Melee
Views: 3385
------------------
Title: Full Bloom 4 - RCS | KPAN (Falco) vs. Zain (Marth) - SSBM - Pools - Winners Finals
Views: 3222
------------------
...
```

