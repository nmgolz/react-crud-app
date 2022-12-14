const TODOS_ENDPOINT = 'https://6350167378563c1d82b8a232.mockapi.io/toDoLists';

const ENDPOINT = [];

class TodosApi {
    get = async () => {
        try{
            const resp = await fetch(TODOS_ENDPOINT);
            const data = await resp.json();
            return console.log(data), data;
        } catch(e) {
            console.log("Error with fetch Todolists", e);
        }
    }

    put = async (toDoLists) => {
        try {
            const resp = await fetch(`${TODOS_ENDPOINT}/${toDoLists.id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toDoLists),
                
            });
            const resData = await resp.json();
            return resData;
        } catch(e){
            console.log(`error with updating the todolists.`, e);
        }
    }
}

export const todosApi = new TodosApi();

