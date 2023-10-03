

const editPost = async (event) => {
    event.preventDefault();

    const postId = window.location.href.split('/').pop()
    
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Failed to edit post');
        }
    }
}

console.log("blah")
document.querySelector('.edit-post-form').addEventListener('submit', editPost);