const nodeList = document.querySelectorAll('tr');
for(let i = 0; i < nodeList.length; i++)
{
    const row = nodeList[i];
    if(row.querySelector('td[data-column-index = "1"]') != null)
    {   
        const title = row.querySelector('td[data-column-index="1"]').textContent;
        console.log(title);
    }

    if(row.querySelector('td[data-column-index = "2"]') != null)
    {   
        const description = row.querySelector('td[data-column-index="2"]').textContent.trim();
        console.log(description);
    }

}
