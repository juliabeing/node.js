//escreve algo de saida
//process.stdout.write("algo  \n\n\n")
const questions=[
    " o que aprendi hoje?",
    " o que me deixou aborrecido?",
    " o que eu poderia fazer para melhorar?",
    " o que me deixou feliz hoje?",
    " quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] +  ">")
} 

ask()

 const answers = []
 //ao rodar a primeira linha a function data e guardada 
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.lenght < questions.lenght){
       
        ask(answers.lenght)

        

    }else{
        process.exit()
    }
       
    
    
})