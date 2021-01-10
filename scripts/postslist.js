var postSelected;

//Save the contents of the post before redirecting
redirectPost = () => {
    var author = postSelected.querySelector(".author p").innerText.trim();
    var title = postSelected.querySelector(".title p").innerText.trim();
    var content = postSelected.querySelector(".content").innerText.trim();

    sessionStorage.setItem('author',author);
    sessionStorage.setItem('title',title);
    sessionStorage.setItem('content',content);
    
    window.location.href='../html/post.html'
}

//Delete the Post
deletePost = () =>{
    postSelected.remove();
}

//Get the Parent Div for the selected post
getPostData = (e) =>{
    if(e.target.classList.contains('fa-trash')){
        postSelected = (e.target.parentElement.parentElement.parentElement.parentElement);
    }

    if(e.target.classList.contains('fa-ellipsis-h')){
        postSelected = (e.target.parentElement.parentElement.parentElement);
        redirectPost();
    }
}

//Event Listener
document.getElementById("postContainer").addEventListener("click",getPostData);