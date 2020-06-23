document.addEventListener('DOMContentLoaded', () => {
    const bg = chrome.extension.getBackgroundPage()
    
    let  myTable = document.getElementById('tableData');
    for(let i = 0; i<bg.titles.length;i++){
        let row = document.createElement('tr')

        let  z = row.insertCell(-1)
         z.innerHTML = i+1

        let  x = row.insertCell(-1)
        x.innerHTML = bg.titles[i].movieTitle
        x.setAttribute('class','c-table__cell')

        let y = row.insertCell(-1)
        y.innerHTML = bg.titles[i].movieRating
        y.setAttribute('class','c-table__cell')
        
        myTable.appendChild(row);
        }

}, false)