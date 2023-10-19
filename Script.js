
const stranger = document.querySelector('h5');
const btn = document.querySelector('#add');
let check = 0;
btn.addEventListener('click' ,()=>{
    if(check == 0){
        stranger.innerHTML="Friends";
        stranger.style.color = "green";
        btn.innerHTML ='Remove Friend';
        check = 1;
        
    }else{
        stranger.innerHTML="Stranger";
        stranger.style.color="red";
        btn.innerHTML ="Add Friend";
        check = 0;
    }
});




