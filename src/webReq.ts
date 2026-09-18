import axios, {type AxiosResponse} from "axios";


interface APICall {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<APICall> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data)
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.log(error.message)
        }
    }
}

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }