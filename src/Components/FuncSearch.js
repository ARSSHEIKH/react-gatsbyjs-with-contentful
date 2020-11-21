import React from "react"

let orgData;
function GetSearchData(data) {
    orgData = data.map(projects => {
        return(
            projects.title

        )
    })
    console.log(orgData) 
    return (
        <div></div>
    )
}
export function FuncSearch(e) {
    let searchValue = e.target.value;
    console.log(searchValue)  
    for(let i = 0; i<orgData.length; i++){
        for(let j = 0; i<orgData.length; j++)
        if(searchValue == orgData[i[j]]){
            console.log(orgData[i[j]])
        }
    }
    console.log(orgData) 

    return (
        <div>
            
        </div>
    )
}

export default GetSearchData