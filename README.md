# Setup
* Download [Git](https://git-scm.com/download/mac) if you don't already have it
* Download [Docker](https://store.docker.com/search?offering=community&type=edition)

#### The following are run from Terminal

Run this command to download the repository
```bash
git clone https://github.com/BrandonCookeDev/youtube-view-search.git
```

CD into the project directory
```bash
cd youtube-view-search
```

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
* -f [filter terms]
	* The terms to filter out of the search results
* -c [channel name]
	* The channel name you wish all results to come from
* -x
	* Strict Mode restricts all results to have all search criteria in their title

Examples:
```bash
./run.sh -s KPAN -r 10 -p 5
```

```
Title: PRIE DIEU AVANT DE DORMIR ! / Marcelle Kpan
Channel: Femmedereference
Views: 172085
URL: https://www.youtube.com/watch?v=37A5iKRNsBY
------------------
Title: Zule Zoo - "Chin Kpan" (Official Music Video)
Channel: Blue Pie Records
Views: 36698
URL: https://www.youtube.com/watch?v=PpXw-0pnE04
------------------
Title: KOLLINS DREAM FACE-KPAN GOGO (Official Audio)
Channel: Bomb Factory Studio
Views: 31416
URL: https://www.youtube.com/watch?v=zP1Gg4TmxAs
------------------
Title: Heartbreaking Ending of Wizzrobe Vs. KPAN at CEO 2016 - Pools
Channel: KampFera
Views: 23071
URL: https://www.youtube.com/watch?v=rYv3aYvPvKg
------------------
...
==============================
Total views counted: 390007
==============================
```

Adding extra search terms can narrow down the results
```bash
./run.sh -s KPAN -s ssbm -s melee -s Recursion -r 10 -p 5
```
```
Title: Super Famicon '17 - KPAN & Ginger vs Hungrybox & Clementine - Losers Quarters
Channel: Recursion
Views: 3714
URL: https://www.youtube.com/watch?v=l8QS9lJ-aaY
------------------
Title: Super Famicon '17 - KPAN & Ginger vs Hungrybox & Clementine - Losers Quarters
Channel: Recursion
Views: 3714
URL: https://www.youtube.com/watch?v=l8QS9lJ-aaY
------------------
Title: DHATL 17 Melee - Ginger (Falco) Vs. Gahtzu (Captain Falcon) SSBM Singles Pools
Channel: VGBootCamp VoDs
Views: 2998
URL: https://www.youtube.com/watch?v=kbW1KwBw41E
------------------
Title: Super Famicon '17 - ALG | n0ne vs RCS | KPAN - Winners Eighths
Channel: Recursion
Views: 1995
URL: https://www.youtube.com/watch?v=gDOAoYARfRk
------------------
Title: Function(1) - Recursion Regional, Trailer 1
Channel: Recursion
Views: 1399
URL: https://www.youtube.com/watch?v=Db16eiw3EZA
------------------
...
==============================
Total views counted: 24341
==============================
```
Also you can simply filter terms out of the search results
```bash
./run.sh -s KPAN -r 10 -p 5 -f Marcelle -f Zule -f Rvd -f René
```
```
Title: KOLLINS DREAM FACE-KPAN GOGO (Official Audio)
Channel: Bomb Factory Studio
Views: 31416
URL: https://www.youtube.com/watch?v=zP1Gg4TmxAs
------------------
Title: Heartbreaking Ending of Wizzrobe Vs. KPAN at CEO 2016 - Pools
Channel: KampFera
Views: 23071
URL: https://www.youtube.com/watch?v=rYv3aYvPvKg
------------------
Title: CEO Dreamland - EGTV | Syrox (Fox) vs. RCS | KPan (Falco) - SSBM - $10 Money Match
Channel: MeleeEveryday
Views: 14118
URL: https://www.youtube.com/watch?v=ZTzgTH3Zh6Q
------------------
Title: Wizzrobe vs. KPAN Salt featuring "FUCK"
Channel: Mitchell Young
Views: 6150
URL: https://www.youtube.com/watch?v=YLFvZQCQOFU
------------------
Title: Full Bloom 4 - RCS | KPAN (Falco) vs. G2 | Westballz (Falco) - SSBM - Pools - Winners Semis
Channel: MeleeEveryday
Views: 4374
URL: https://www.youtube.com/watch?v=AIA1E4K8v8E
------------------
Title: CEO2016 - COG | Wizzrobe vs CKS | Kpan  - Melee Pools
Channel: Polarity
Views: 4186
URL: https://www.youtube.com/watch?v=Crx_WXNCaj8
------------------
...
==============================
Total views counted: 116401
==============================
```

You can query also on channel name

```bash
./run.sh -s KPAN -r 10 -p 5 -c Recursion
```
```
Title: Super Famicon '17 - ALG | n0ne vs RCS | KPAN - Winners Eighths
Channel: Recursion
Views: 1995
URL: https://www.youtube.com/watch?v=gDOAoYARfRk
------------------
Title: Super Famicon '17 - KPAN & Ginger vs n0ne & mang0 - Winners Quarters
Channel: Recursion
Views: 1887
URL: https://www.youtube.com/watch?v=SVXzk1j8Amc
------------------
Title: Function(1) - Recursion Regional, Trailer 1
Channel: Recursion
Views: 1399
URL: https://www.youtube.com/watch?v=Db16eiw3EZA
------------------
Title: Function(3) - ALG EMG n0ne vs RCS KPAN - Winners Quarters
Channel: Recursion
Views: 1025
URL: https://www.youtube.com/watch?v=Pc7Ukn2VDBc
------------------
Title: NaCl September '17 - MVG FOX | Mew2King vs RCS | KPAN - Winners Finals
Channel: Recursion
Views: 991
URL: https://www.youtube.com/watch?v=kTIJ-JnMCm8
------------------
...
==============================
Total views counted: 12494
==============================
```

Strict Mode forces all results to include search results in the title
```bash
./run.sh -s Sonido -c Recursion -r 5 -p 10 -x
```
```
Title: Super Famicon 2017 - Smash 4 Top 64 - ESAM vs Sonido
Channel: Recursion
Views: 441
URL: https://www.youtube.com/watch?v=qIwUy-NGQYg
------------------
Title: Super Famicon 2017 - Smash 4 Top 64 - Sonido vs Sunseeds
Channel: Recursion
Views: 46
URL: https://www.youtube.com/watch?v=GEokCWYlsVk
------------------
Title: Super Famicon 2017 - Smash 4 Top 16 - Sonido+Salt One vs Anti+WaDi
Channel: Recursion
Views: 28
URL: https://www.youtube.com/watch?v=FkqgP46-ln8
------------------
Title: Super Famicon 2017 - Smash 4 Pools - Luckywind+Ferf vs Sonido+Salt One
Channel: Recursion
Views: 21
URL: https://www.youtube.com/watch?v=E9OnKZvqr74
------------------
Title: Smashcode 8/16/18 - Sonido vs Kuma | Danye - Winners Finals
Channel: Recursion
Views: 15
URL: https://www.youtube.com/watch?v=Zv-k3tYivqU
------------------
...
==============================
Total views counted: 708
==============================
```