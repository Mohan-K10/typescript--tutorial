let response :any = "42"
// Expecting the data from response as string and taking length of response
let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookstring = '{"name":"this is sample book"}'
let bookobject = JSON.parse(bookstring) as Book
console.log(bookobject);

const inputElement = document.getElementById("username") as HTMLInputElement

// any lets you to change data of the variable but it throws error if the code runs
let value: any

value = "1"
value  = [1, 2, 3]
value = 4
value.toUpperCase()


// unknown lets you change data of variable and if you use typeof to check the data type which you expect to get then it will execute the following methods
let newvalue: unknown
newvalue = "1"
newvalue  = [1, 2, 3]
newvalue = 4

if (typeof newvalue === "string") {
    newvalue.toUpperCase()
}

try {
    
} catch (error) {
    // if you try to execute error block then add guardrail in order to execute the error block otherwise it cant run ,its typescript mechanism
    if(error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}

// declaring data (unknown) as string
const data: unknown = "some string data"
// forcefully declaring expected data as string in stringdata,otherwise it throws error
const stringdata :string = data as string