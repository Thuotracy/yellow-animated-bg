const container = document.querySelector('.container')
for  (var i = 0; i <= 5; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks)
}