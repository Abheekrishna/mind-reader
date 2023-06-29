const input = document.getElementById('input');
const btn = document.getElementById('btn');
const loader = document.getElementById('loader');


function show() {
    loader.classList.add('show');
}

function remove() {
    loader.classList.add('loader');
}

btn.onclick = () => show()

function result() {
    console.log(input.value);
}

function showLoading() {
    show();
    remove()
    setTimeout(result, 5000);
    
}

btn.onclick = () => {
    showLoading()
}