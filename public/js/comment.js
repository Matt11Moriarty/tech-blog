

const postComment = async (event) => {
    event.preventDefault();
    
    const commentContent = document.querySelector('#comment-content').value.trim();

    console.log(commentContent);
    if (commentContent) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}



