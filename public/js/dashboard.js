

const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
            const response = await fetch('/api/post', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Failed to add post');
        }
    }
}


const deletePost = async (event) => {
    const postId = event.target.dataset.id;

    if (!postId) return;

    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert('Failed to delete post.');
    }

}

document.addEventListener('click', deletePost);
document.querySelector('.new-post-form').addEventListener('submit', newPost);