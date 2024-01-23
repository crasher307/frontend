const count = decodeURIComponent(document.cookie)
    .split(';')
    .map(e => {
        const data = e.split('=');
        return {
            key: data[0],
            val: data[1],
        };
    })
    .find(e => e.key === 'countView').val;

console.log({count});

const counter = document.createElement('div');
counter.classList.add('counter');
counter.innerHTML = `Просмотров: ${count}`;
document.body.appendChild(counter);