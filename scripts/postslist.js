var postSelected;

//Get the Parent Div for the selected post
function getPostData(e){
    if(e.target.classList.contains('fa-trash')){
        postSelected = (e.target.parentElement.parentElement.parentElement.parentElement);
    }
}

//Bind click event listner
document.getElementById("postContainer").addEventListener("click",getPostData);

//Delete the Post
function deletePost(){
    postSelected.remove();
}