export const setStorage = (key:string, content:any) =>{
   const storage = localStorage.setItem(key, JSON.stringify(content))
   return storage
}

export const removeStorage = (key: string) => {
   const storage = localStorage.removeItem(key);
   return storage; 
}

export const findStorage = (key: string) => {
   const storage = localStorage.getItem(key);
   return storage; 
}