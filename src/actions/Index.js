export const incNumber = (num) =>{
    return {
        type:"INCREMENT",
        payload:num
    }
}
export const decNumber = () =>{
    return {
        type:"DECREMENT"
    }
}
export const formData = (data) =>{
    return {
        type:"STOREDATA",
        payload:data
    }
}
