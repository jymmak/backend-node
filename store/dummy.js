const db = {
    'user':[
        {id:1, name:'Jymma'},
        {id:2, name:'Alberto'}
    ]
}

function list(tabla){
 return db[tabla];
}
function get(tabla, id){
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}
function upsert(tabla, data){
    db[collections].push(DataTransferItemList)
}
function remove(tabla, id){
    return true;
}

module.exports = {
    list, get, upsert, remove
}