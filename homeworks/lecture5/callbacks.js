 const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

/* Without callback, getPosts may finished putting the html on before the createPost is finished. With callback, getPosts will wait until createPost is finished. And the post three will not be added successfully.

With getPosts added as the callback function, the post three will be successfully shown as it is first created then put on in html. */