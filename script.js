const buttons = document.querySelectorAll('.btn');
const posts = document.querySelectorAll('.posts');

let prevBtn = 1;

for(let i = 0; i < buttons.length; i++){
    buttons[i].setAttribute('id',`btn-${i+1}`);
}
for(let i = 0; i < posts.length; i++){
    posts[i].setAttribute('id',`post-${i+1}`);
}

function changeColor(button){
    button.classList.add('bg-green-500');
    button.classList.add('text-white');
    
    
    const prevButton = document.getElementById(`btn-${prevBtn}`);
    
    prevButton.classList.add('bg-gray-100');
    prevButton.classList.remove('bg-green-500');
    prevButton.classList.remove('text-white');

    const lastDigit = button.id[button.id.length-1];
    prevBtn = lastDigit;

    // console.log()
}
function showPost(id){
    const currPost = id[id.length-1];
    
}

buttons.forEach(button => button.addEventListener('click',() =>{
    changeColor(button);
    showPost(button.id);
}))
