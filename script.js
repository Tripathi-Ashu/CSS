console.log('hii')

const root = document.querySelector('.root');

root.computedStyleMap.display = 'flex';

for(let i = 1; i <= 3; i++){

    const box = document.createElement('div');

    box.textContent = `Box ${i}`;
    box.style.padding = '20px';
    box.style.backgroundColor ='lightblue';

    root.appendChild (box);
    root.style.display = 'flex';
}