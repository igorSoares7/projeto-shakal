const soma = (req, res):void => {
    const soma = 100 + 1

    res.send({soma: soma})
    console.log('ok')

};

const teste = ():void => {
    console.log('aa')
}



export default {
    soma,
    teste
}