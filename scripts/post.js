//To load the contents of the post during page loading.
window.onload = () => {
    var title = document.getElementById('title');
    title.innerHTML = '<p class="editable">' + sessionStorage.getItem('title') + '</p>';
    var author = document.getElementById('author');
    author.innerHTML = '<p class="editable">' + sessionStorage.getItem('author') + '</p>'
    var content = document.getElementById('contents');
    content.innerHTML = '<p class="editable">' + sessionStorage.getItem('content') + '</p>'
};

//Click event Listener to handle the Edit & Save functionality
document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-edit') {
        var btn = document.getElementById('btn-edit');
        //When the Edit Button is pressed.
        if (btn.innerText.trim() === 'Edit') {
            btn.innerHTML = 'Save <i class="fas fa-save"></i>';
            var editableContents = document.querySelectorAll('.editable');
            Array.from(editableContents).forEach((editableContent, index) => {
                editableContent.classList.add('editEnabled');
                editableContent.setAttribute('contenteditable', true);
            });
        }
        //When the save Button is pressed.
        else if (btn.innerText.trim() === 'Save') {
            btn.innerHTML = 'Edit <i class="fas fa-edit"></i>';
            var editableContents = document.querySelectorAll('.editable');
            Array.from(editableContents).forEach((editableContent, index) => {
                editableContent.classList.remove('editEnabled');
                editableContent.setAttribute('contenteditable', false);
            });
        }
    }
});

var likeCount = 0;
//Click Event Listener for manging the Like functionality
document.getElementById('btn-like').addEventListener('click', (e) => {
    e.target.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
    likeCount++;
    if (likeCount == 1) {
        document.querySelector('.likeSec .likeCount').innerHTML = '1 person likes this!';
    }
    else {
        document.querySelector('.likeSec .likeCount').innerHTML = likeCount + ' people like this!';
    }
});

//Click event for adding the comments
document.getElementById('postComment').addEventListener('click', (e) => {
    if (e.target.id == 'btn-comment') {
        var commentText = document.getElementById('txt-comment').value;
        var commentBox = document.querySelector('.viewComment .comments');
        if (commentText.trim() != '') {
            if (commentBox.style.display = "none") {
                commentBox.style.display = "block";
            }
            commentBox.innerHTML = '<div>' + commentText + '</div>' + commentBox.innerHTML;
            document.getElementById('txt-comment').value = '';
        }
        else {
            alert("Comment cannot be empty");
            document.getElementById('txt-comment').value = '';
        }
    }
});