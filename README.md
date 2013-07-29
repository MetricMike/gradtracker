Prepping the Data

Requires:
* csv-splitter.sh (included in /utilities)
* csv2geojson (https://github.com/tmcw/csv2geojson)

Step 1: Use csv-splitter.sh to split by date ( $ ./csv-splitter.sh original.csv )
Step 2: Convert to geojson using csv2geojson ( $ for f in ./*; do csv2geojson $ f > "${f%.csv}.geojson"; done )

---

BAM!