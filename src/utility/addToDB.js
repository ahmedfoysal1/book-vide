const getStoredReadList = () =>{
    const storesListStr = localStorage.getItem('read-list');
    if(storesListStr){
        const storesList = JSON.parse(storesListStr);
        return storesList;
    }
    else{
        return [];
    }
}


const addToStoredReadList = (id) =>{
    const  storesList = getStoredReadList();
    if(storesList.includes(id)){
        //alredy exist and do not add it again
        console.log(id,'alreay exist')
    }
    else{
        storesList.push(id);
        const storesListStr = JSON.stringify(storesList);
        localStorage.setItem('read-list', storesListStr);
    }
}

export {addToStoredReadList}