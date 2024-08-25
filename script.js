const chart = document.querySelector('.chart');

async function fetchData(params) {
    let response = await fetch('./data.json')
    let data = await response.json();
    // console.log(data);
    renderData(data);
}

function renderData(data) {
    data.forEach((element, index) => {
        let barHeight = parseFloat(element.amount) * 2.75;
        console.log(Math.round(barHeight));
        
        chart.innerHTML += `
        <div class="graph">
            <p class="show-amt">$${element.amount}</p>
            <div class="bar" id='bar-${index + 1}' style='height: ${Math.round(barHeight)}px' onmouseover='displayAmount(this)' onmouseout='hideAmount(this)'></div>
        <p>${element.day}</p>
        </div>
        `
        });
}

fetchData();

//Function to display amount overhead
function displayAmount(x) {
    x.previousElementSibling.style.opacity = '1';
}

//Function to hide amount overhead
function hideAmount(x) {
    x.previousElementSibling.style.opacity = '0';
}