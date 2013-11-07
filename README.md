Prepping the Data
-----------------

Requires:

> - [csv2geojson][2]

1. The code below assumes PowerShell on a Windows PC.
2. Distance formula: `=ACOS(COS(RADIANS(90-37.54097))*COS(RADIANS(90-$C2))+SIN(RADIANS(90-37.54097))*SIN(RADIANS(90-$C2))*COS(RADIANS(-77.432889-$D2)))*3958.756`
3. Count formula:  
	a. Assuming Microsoft Excel: Use an advanced filter to copy only unique values to another part of the sheet.
	b. `=CONCATENATE(A2,B2,C2,D2,E2,F2)` on both datasets.
	c. `=COUNTIF(G:G, O2)` to provide a count.
	d. Copy and Paste Values only on the filtered data. Save as csv somewhere.
2. Convert to geojson using csv2geojson `$ csv2geojson somefile.geojson`

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