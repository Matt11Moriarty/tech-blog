

const postComment = async (event) => {
    event.preventDefault();
    
    const commentContent = document.querySelector('#comment-content').value.trim();

    console.log("TEsT!");
    console.log(commentContent);
    if (commentContent) {
        const response = await fetch('/post/:id', {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}



document.querySelector('.comment-form').addEventListener('submit', postComment);