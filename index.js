const fetch = require('node-fetch')
const readline = require('readline-sync')
var username = readline.question('what is your name?: ')
const url = 'https://api.github.com/users/'+username+'/repos'

async function fetchdata(url){
    let response = await fetch(url)
    let data = await response.json()

    let mains=new Object(data)
    var NameLis = []
    var desc=[]
    var branch=[]
    var result = {}
    for (var i of mains){
        NameLis.push(i.full_name)
        desc.push(i.description)
        branch.push(i.default_branch)
        
    }
    for(var j in NameLis){
        result["name"]= NameLis[j],
        result["desc"]=desc[j],
        result["default_branch"]=branch[j]
        console.log(result)
    }

}
fetchdata(url);