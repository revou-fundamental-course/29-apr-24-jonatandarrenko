function validation(){
    let username = document.getElementById('form-username').value;
    console.log(username);
    if (username == '' || username == null) {
        username.style.border = '1px solid red';
    } else {
        alert('Welcome' + username);
        console.log (username);
    }
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n){
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
}

function showSlide(index){
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Banyaknya Image: ' + listImage.length);

    if (index > listImage.length) indexSlide = 1;
    let i = 0;
    while (i < listImage.length){
        listImage[i].style.display = 'none';
        i++;
    }
    
    listImage[indexSlide - 1].style.display = 'block';

    console.log('showSlide: ' + index);

}

document.getElementById('send-button').addEventListener('click', ()=> nextSlide)
