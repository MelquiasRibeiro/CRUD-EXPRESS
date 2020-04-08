const express = require('express');

const server =express()

server.listen(3333)
server.use(express.json());

const tarefas = [
                {"titulo":'exemplo',
                    "id":"0",
                    "tasks":{"task1":'isso',
                            "task2":'aquilo'}
                },
]

let count= 0

    server.use((req,res, next)=>{
        console.log( `já foram feitas ${count} requisições`)
        count = count+1
        return next()

    })

    function checkIndex(req,res,next){
        if(!tarefas[req.params.index]){
            return res.status(404).json({"message":"este usuario não existe"})
        }
        return next()

    }


    server.get('/tarefas',(req, res)=>{
    return res.json(tarefas);

    })
    server.get('/tarefas/:index',checkIndex,(req, res)=>{
    const {index}= req.params

    return res.json(tarefas[index]);

})

server.post('/tarefas',(req, res)=>{

    const {titulo,id,tasks} = req.body 


    tarefas.push({titulo,id,tasks});

    return res.json(tarefas);

})


server.put('/tarefas/:index',checkIndex,(req, res)=>{
    const {index}= req.params

    const tarefa = req.body

    tarefas[index]=tarefa;

    return res.send();

})

server.delete('/tarefas/:index',checkIndex,(req, res)=>{
    const {index}= req.params

    tarefas.slice(index,1);

    return res.send(tarefas);

})