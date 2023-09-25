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
    }
}
document.querySelector('.new-post-form').addEventListener('submit', newPost);