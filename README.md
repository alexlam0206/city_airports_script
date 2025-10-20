# city_airports script
### What it Does 🧹

This script automatically cleans your Google Sheet. It looks for every row where **Column E** contains the word `"ERROR"` and then deletes the content in **Column F** of that same row.

-----

### How to Use

In your Google Sheet, go to **Extensions \> Apps Script**. Then run the `.gs` code.

The first time you run it, Google will ask for permission to edit your sheet. 

-----
### Demo

https://github.com/user-attachments/assets/6a853315-0fab-4279-8013-409aa6989c79

-----

### How to Customize 

You can easily change which columns the script looks at or what text it searches for by editing the code.

  * **To change the columns:** The script uses numbers to identify columns (A=1, B=2, C=3, etc.). To check column B (`2`) and clear column C (`3`), you would change the numbers `5` and `6` like this:

    ```javascript
    // Read from column B (was 5)
    var rangeE = sheet.getRange(2, 2, lastRow - 1, 1).getValues(); 
    // Read from column C (was 6)
    var rangeF = sheet.getRange(2, 3, lastRow - 1, 1).getValues();

    // ... later in the script ...

    // Clear column C (was 6)
    sheet.getRange(cellsToClear[j], 3).clearContent(); 
    ```

  * **To change the search text:** Simply replace `"ERROR"` with whatever word you want it to find.

    ```javascript
    // Change "ERROR" to "Failed" or any other text
    if (statusValue === "Failed" && cityValue !== "") { 
    ```
    ---
