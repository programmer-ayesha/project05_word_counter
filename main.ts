import inquirer from "inquirer";

function counter(paragraph:string){
    let freeWhiteSpace = paragraph.replace(/\s/g,"")

    return freeWhiteSpace.length
}

// console.log(counter("hello ayesha"))

async function startWordCount(counter:(text:string) =>number){
 do{let res:{
    paragraph:string
} = await inquirer.prompt({
 
    type:"input",
    name:"paragraph",
    message:"write paragraph here..."
})

 console.log( counter(res.paragraph))
 }
 while(true)
};

startWordCount(counter);