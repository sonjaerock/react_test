export const callGetPosts = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/posts/')
    return response.then(res => res.json()).catch(null);
}