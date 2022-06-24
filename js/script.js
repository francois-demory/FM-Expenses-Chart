import datas from '../data.json' assert {type : 'json',};

function drawChart() {
    const chart = document.querySelector('.main__chart');
    datas.forEach(data => {
        const container = document.createElement('div');
        const day = document.createElement('div');
        const chartDatas = document.createElement('div');
        const chartAmountModal = document.createElement('div');

        container.classList.add('chart__container');
        day.classList.add('chart__day');
        chartDatas.classList.add('chart__datas');
        chartAmountModal.classList.add('chart__datas__modal');

        day.innerHTML = `${data.day}`;
        chartAmountModal.innerHTML = `$${data.amount}`;
        chartDatas.style.height = (data.amount * 300)/100 + 'px';

        if (day.innerHTML === 'wed') {
            chartDatas.classList.add('chart__datas--wed');
        }

        chart.appendChild(container);
        container.appendChild(chartAmountModal);
        container.appendChild(chartDatas);
        container.appendChild(day);

        chartDatas.addEventListener('mouseover', () => {
                chartAmountModal.style.visibility = 'visible';
        });
        chartDatas.addEventListener('mouseout', () => {
                chartAmountModal.style.visibility = 'hidden';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    drawChart();
});