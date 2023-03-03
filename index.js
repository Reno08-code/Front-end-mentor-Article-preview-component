document.getElementById("btn").addEventListener('click',function(){
    document.querySelector(".share").style.display='flex';
    document.getElementById("btn-close").style.display='inline-block';
    document.getElementById("btn").style.display = 'none';
})

function init(){

document.querySelector(".share").style.display='none';
document.getElementById("btn-close").style.display='none';
document.getElementById("btn").style.display = 'inline-block';
}

document.getElementById("btn-closeOne").addEventListener('click',init);
document.getElementById("btn-close").addEventListener('click',init);