// only works in module files not script files:

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost1 = getLastPost();
// console.log(lastPost1);

const lastPost = await getLastPost();
console.log(lastPost);

// lastPost1.then(data => console.log(data));// using promises: