# HTML Table Parser

A browser-based JavaScript snippet that extracts data from an HTML table and downloads it as a JSON file.

## How to Use

1. Open your HTML file in a browser
2. Open DevTools (F12) and go to the Console tab
3. Paste and run the first block of code to extract the data
4. Paste and run the second block of code to download the JSON file

## Code

### Part 1 - Extract Data
```javascript
const results = [];
const nodeList = document.querySelectorAll('tr');
for(let i = 0; i < nodeList.length; i++)
{
    const row = nodeList[i];
    if(row.querySelector('td[data-column-index="1"]') != null)
    {   
        const title = row.querySelector('td[data-column-index="1"]').textContent.trim();
        const description = row.querySelector('td[data-column-index="2"]').textContent.trim();
        results.push({ title, description });
    }
}
```

### Part 2 - Download as JSON
```javascript
const blob = new Blob([JSON.stringify(results, null, 2)], {type: 'application/json'});
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'data.json';
a.click();
```

## Output
A `data.json` file will be downloaded containing the extracted table data.

## Notes
- Targets `data-column-index="1"` for title and `data-column-index="2"` for description
- Skips rows that don't contain the expected columns (e.g. header rows)
- `.trim()` is used to remove extra whitespace from extracted text
```

Note: remove the backslashes before the closing triple backticks (` \``` `) — I had to add them to prevent formatting issues here.
