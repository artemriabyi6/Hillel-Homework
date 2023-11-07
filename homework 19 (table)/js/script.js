const table = document.createElement('table')
const tBody = document.createElement('tBody')

let counter = 1

for(let i = 0; i < 10; i++) {
    const row = document.createElement('tr')
    for(let j = 0; j < 10; j++) {
        const cell = document.createElement('td')
        cell.textContent = counter++
        row.appendChild(cell)
    }
    tBody.appendChild(row)
}

table.appendChild(tBody)

document.body.append(table)
