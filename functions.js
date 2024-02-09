function changeText() {
    document.getElementsByClassName('title')[0].innerHTML = "Hello World";   
}


function resetText() {
    document.getElementsByClassName('title')[0].innerHTML = "Functions";
    document.getElementById('img').style.display = 'none';
    document.getElementsByClassName('list')[0].removeChild (document.getElementsByTagName('li')[0]); document.getElementsByTagName('input')[0].value = ""; 
}

function showImage() {
    document.getElementById('img').style.display = 'block';
}

function showList() {
    // const ul = document.createElement('ul');
    const li = document.createElement('li');
    document.getElementsByClassName('list')[0]
    .appendChild(li);
    li.innerHTML = document.getElementsByTagName('input')[0]
    .value; 
    document.getElementsByTagName('input')[0].value = "";
}