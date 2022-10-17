export const callGetTodoList = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/')
    return response.then(res => res.json()).catch(null);
}

export const callSetTodoList = (data) => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/" + data.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            completed: data.completed
        }),
    })

    return response.then(res => res.json()).catch(null);
}

export const callDeleteTodoList = (data) => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/" + data.id, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.then(res => res.json()).catch(null);
}


