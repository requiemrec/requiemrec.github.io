var img = document.getElementsByClassName('index_img')[0];
var img_t = document.getElementsByClassName('index_imgt')[0];


img.onmouseover = function (){
    img.className='index_imgt';
}
img.onmouseout = function (){
    img.className = "index_img"
}

window.onload = function (){
    let str = 'I always thought that someone had to stand up and be a hero.';
    let Warning_text = document.getElementById('Warning-text');
    i = 0;
    timer = setInterval(function (){
         Warning_text.innerText=str.substring(0,i);
         i++
        if (Warning_text.innerHTML == str){
            clearInterval(timer);
        };
        },60)

}
