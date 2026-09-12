// Number or string data can be declared in 'unknown' variable by adding string | number and these are known as unions
let unknown: string | number = "string"
// unknown: string | number = 10

// User can define pending or success or error in apiRequestStatus and no other extra data can be declared
let apiRequestStatus: "pending" | "success" | "error" = "pending"
apiRequestStatus = "error"
apiRequestStatus = "pending"
apiRequestStatus = "success"


let variable: unknown;