
const fetch = require('node-fetch')
const readline = require('readline-sync')
var username = readline.question('what is your name?: ')
const url = 'https://api.github.com/users/'+username+'/repos'


// code for fetching the github url data from name

// fetching github data  by user_name

async function fetchdata(url){
    let response = await fetch(url)
    let data = await response.json()
     if(data.length>0){
        let mains=new Object(data)
        console.log('s.no  ','   Reponame    ','             RepoDesc    ','                           branch')
        for (var i in mains){
            var des = ""
            if(mains[i]["description"]===null){
                des === null
                console.log(des)
            }
            else{
                for(var k=0;k<=mains[i]["description"].length;k++){
                    if(k<40){
                        des += mains[i]["description"][k]
                    }
                }
            }
            console.log(parseInt(i)+1,"   ",mains[i]["name"]," ",des,"  ",mains[i]["default_branch"])
        }
        // console.log(desc)
    }
    else{
        console.log('No-user found from this name ---')
    }
}
fetchdata(url);
