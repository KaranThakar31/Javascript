let dbobj = { }

dbobj.user = [
    {
        name : 'alvin',
        city : 'delhi'
    },
    {
        name : 'priya',
        city : 'chandigarh'
    }
]

dbobj.dbquery = {
    find : function(table){return `select * from ${table}`},
    insert:function(table,data){return `insert into ${table} name, city ${data.anme}, ${data.city}`}
}


//es5

module.exports = dbobj


//es6 
// in node, remind sir because of npm package and everything 

