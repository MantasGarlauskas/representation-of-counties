const container = document.querySelector('.countries__container');
const sortByName = document.getElementById('sortByName')
const sortByType = document.getElementById('sortByType')
let data = [];
let filterResult = []

const render = (countries) => {
    container.innerHTML = ''
    countries.forEach(element => {
        container.innerHTML +=
            `<div class="countries__card">
                <div class="country__name">${element.name}</div>
                <div>Region: ${element.region}</div>
                <div>Area: ${element.area}</div>
            </div>`
    })
}

fetch('https://restcountries.com/v2/all?fields=name,region,area ')
    .then(response => response.json())
    .then(strukura => {
        data = strukura;
        render(strukura);
    });


sortByName.addEventListener('change', () => {
    if (sortByName.value === 'name') {
        data.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });
    } else if (sortByName.value === 'name2') {
        data.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (a.name < b.name) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    render(data);
});

sortByType.addEventListener('change', () => {
    if (sortByType.value === 'oceania') {
        filterResult = data.filter(r => r.region === 'Oceania');
    } else if (sortByType.value === 'area') {
        filterResult = data.filter(a => a.area < 65300)
    } else if (sortByType.value === 'all') {
        filterResult = data
    }
    render(filterResult);
});