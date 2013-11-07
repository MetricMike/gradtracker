Prepping the Data
-----------------

Requires:

> - csv-splitter.sh (included in /utilities)
> - [csv2geojson][2]

1. The code below assumes PowerShell on a Windows PC. I also don't think this is accurate anymore, but I haven't had to convert csv to geojson in like 6 months, soooo...
2. Use csv-splitter.sh to split by date `$ ./csv-splitter.sh original.csv`
3. Convert to geojson using csv2geojson `$ for f in ./*; do csv2geojson $ f > "${f%.csv}.geojson"; done`

---

Testing/Deploying Gradtracker
-----------------------------

> Note: Gradtracker takes advantage of a feature in Apache called
> DEFLATE that makes moving the .geojson and .csv data between server
> and client VERY fast. If you're only testing locally you can ignore
> that and just do steps 2, 3, and 5.

1. Install [XAMPP][1] (The easiest way to get Apache on your computer)
2. Install Github for ([Windows][3]/[Mac][4])
3. Clone Gradtracker in Desktop  
    a. Navigate to [Gradtracker on Github][5].  
    b. Click "Clone in Desktop".  
4. Move Gradtracker to XAMPP's htdocs folder
5. Start XAMPP, ensure Apache is running, and then open [test2.html][6]


  [1]: http://www.apachefriends.org/en/xampp.html
  [2]: https://github.com/tmcw/csv2geojson
  [3]: http://windows.github.com/
  [4]: http://mac.github.com/
  [5]: https://github.com/MetricMike/gradtracker
  [6]: http://localhost/gradtracker/test2.html