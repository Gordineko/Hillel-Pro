export const DELETE_LIST='DELETE_LIST'
export const TOGGLE_LIST='TOGGLE_LIST'
export const CREATE_LIST='CREATE_LIST'
export function deleteList(payload){
    return{type:DELETE_LIST,payload};
}
export function toggleList(payload){
    return{type:TOGGLE_LIST,payload};
}
export function createList(payload){
    return{type:CREATE_LIST,payload};
}