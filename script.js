const buttons = document.querySelectorAll('.btn');
const Posts = document.querySelectorAll('.posts');

let prevBtn = 0 , prevPostCnt = 0;

for(let i = 0; i < buttons.length; i++){
    buttons[i].setAttribute('id',`btn-${i}`);
}
for(let i = 0; i < Posts.length; i++){
    Posts[i].setAttribute('id',`post-${i}`);
}

function changeColor(button){
    const lastDigit = button.id[button.id.length-1];

    if(lastDigit != prevBtn){
        button.classList.add('bg-green-500');
        button.classList.add('text-white');
        
        
        const prevButton = document.getElementById(`btn-${prevBtn}`);
        
        prevButton.classList.add('bg-gray-100');
        prevButton.classList.remove('bg-green-500');
        prevButton.classList.remove('text-white');
    
        prevBtn = lastDigit;
    }

    // console.log()
}
function showPost(id){
    const currPost = id[id.length-1];

    if(prevPostCnt != currPost){
        const post = document.getElementById(`post-${currPost}`);
        console.log(currPost);
    
        console.log(post.classList)
    
        post.classList.remove('hidden');
    
        const prevPost = document.getElementById(`post-${prevPostCnt}`);
        console.log(prevPost.innerText)
        prevPost.classList.add('hidden');
        prevPostCnt = currPost;
    }
    
}

buttons.forEach(button => button.addEventListener('click',() =>{
    changeColor(button);
    showPost(button.id);
}))
