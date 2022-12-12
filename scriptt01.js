


// #############################################################
/**
 * * Exercicio 02
 * * 
 */



const alunosList = [
    {
       nome:"Valdeir",
       nota1: 10,
       nota2:7,
    },
    {
       nome:"Paula",
       nota1: 10,
       nota2:10,
    },
    {
       nome:"Gustavo",
       nota1: 9,
       nota2:9,
    },
    {
       nome:"Epaminondas",
       nota1: 0,
       nota2:3,
    }
 ]
 
 
 function calculaNota(lista){
    for(aluno of lista){
       let notaFinal  = (((Number(aluno.nota1)+Number(aluno.nota2)))/2).toFixed(2);
       notaFinal >=7.0?alert(`Parabéns ${aluno.nome} você foi aprovado no concurso \n sua nota é ${notaFinal}`):alert(`Infelizmente ${aluno.nome} Não foi desta vez! \n sua nota é ${notaFinal} mais sorte na proxima!`)
    }
 }
 
 calculaNota(alunosList)