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

const blob = new Blob([JSON.stringify(results, null, 2)], {type: 'application/json'});
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'data.json';
a.click();