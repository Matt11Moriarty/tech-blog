

const postComment = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = window.location.href.split('/').pop();
    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to comment');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', postComment);



