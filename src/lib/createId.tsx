let id:number=parseInt(localStorage.getItem('idMax') ||'0');
const createId=():number=>{
    id+=1;
    localStorage.setItem('idMax',JSON.stringify(id));
    return id;
};

export {createId};