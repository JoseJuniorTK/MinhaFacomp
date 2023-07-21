import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitMatricula = async (data) => {
    try {
      setIsLoading(true); // Set loading state to true

      const url = `http://152.67.42.101:4008/listamatriculas?matricula=${data.matricula}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();
      // Do something with the response data
      console.log(responseData)

      const dataArray = responseData.split(',').reverse();
      setDisciplinas(dataArray);

      // After successfully submitting matricula, move to the next question
      setCurrentQuestion(currentQuestion + 1);
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or error
    }
  };


  const onSubmitSatisfaction = async (data) => {
    try {
      setIsLoading(true); // Set loading state to true
      const jsonString = JSON.stringify(data);
      const url = `http://152.67.42.101:4008/recebeform?form=${jsonString}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();
      // Do something with the response data
      console.log(responseData)
      setCurrentQuestion(currentQuestion + 1);
      // After successfully submitting matricula, move to the next question
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or error
    }
  };


  // ---- Código novo/alterado ----

  const [disciplinas, setDisciplinas] = useState('');

  const listaPerguntas = [
    {
      categoria: 'Minha FACOMP',
      pergunta: 'Digite o seu número de matrícula:',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Como você avalia a didática das disciplinas assistidas no período avaliado?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'A comunicação entre os professores e os alunos têm sido adequadas?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Você sente que os colegas de turma se comunicam de maneira efetiva durante as aulas e atividades acadêmicas?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Quais estratégias você considera mais eficientes para o seu aprendizado?',
      caixa_de_texto: true,
    },

    // PERGUNTAS DINÂMICAS

    {
      categoria: 'Ensino',
      pergunta: 'Quais recursos adicionais (como materiais complementares, tutoriais, etc.) têm sido úteis para o seu aprendizado?',
      caixa_de_texto: true,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Você acredita que as avaliações (provas, trabalhos e outros) aplicadas são justas e coerentes com os conteúdos ministrados?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Você sente que há espaço para a expressão de suas dúvidas e opiniões durante as aulas?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Como você avalia a interação entre os alunos e os professores fora do horário das aulas?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Ensino',
      pergunta: 'Quais sugestões você teria para melhorar a qualidade do ensino na Faculdade de Computação?',
      caixa_de_texto: true,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Você tem conhecimento das pesquisas que acontecem dentro da Faculdade de Computação?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Alguma vez você sentiu-se motivado a procurar um professor ou laboratório para iniciar uma pesquisa?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Você tem noção como um estágio em um laboratório de pesquisa pode evoluir para um trabalho de conclusão de curso (TCC)?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Você tem conhecimento de que os laboratórios de pesquisa abordam temas atuais, tanto em âmbito mundial quanto em relação à região amazônica?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Você já teve interesse em saber mais sobre algum projeto de pesquisa em específico?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Pesquisa',
      pergunta: 'Você tem interesse em participar de algum projeto de pesquisa na Faculdade de Computação?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extensão',
      pergunta: '17. Quantos projetos de extensão você conhece que ocorrem na Faculdade de Computação?',
      caixa_de_texto: true,
    },
    {
      categoria: 'Extensão',
      pergunta: 'Você tem ciência de que a maioria dos projetos de extensão são interdisciplinares e envolvem a comunidade, instituições públicas, privadas e terceiro setor?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extensão',
      pergunta: 'Você já demonstrou interesse em obter mais informações sobre algum projeto de extensão específico?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extensão',
      pergunta: 'Você tem interesse em participar de um projeto de extensão na Faculdade de Computação?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extensão',
      pergunta: 'Você acredita que a participação em projetos de extensão pode contribuir para o seu desenvolvimento acadêmico e profissional?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extensão',
      pergunta: 'Você considera importante a relação entre a universidade e a comunidade por meio dos projetos de extensão?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'A comunicação pessoal, redes sociais e e-mail da administração são eficazes para transmitir informações importantes?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'Você sente que a Faculdade compreende suas necessidades e expectativas como aluno?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'Você acredita que a administração está realizando um planejamento adequado para atender às demandas dos alunos?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'Como você avalia a eficiência dos processos administrativos na Faculdade de Computação?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'Você acredita que a administração está fazendo o melhor possível para promover um ambiente acadêmico favorável?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'Sobre o visual das publicações, você considera criativos?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Administração',
      pergunta: 'Como você sugere que a administração pode melhorar seus serviços e atendimento aos alunos?',
      caixa_de_texto: true,
    },
    {
      categoria: 'Administração',
      pergunta: 'Existe alguma reclamação específica ou problema que você gostaria de relatar em relação à administração?',
      caixa_de_texto: true,
    },
    {
      categoria: 'Estrutura',
      pergunta: 'Como você avalia a qualidade dos computadores nos laboratórios da Faculdade de Computação?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Estrutura',
      pergunta: 'Os programas instalados nos computadores dos laboratórios atendem às suas necessidades acadêmicas?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Estrutura',
      pergunta: 'Você considera os laboratórios de ensino a Faculdade de Computação confortáveis em termos de climatização, iluminação e mobiliário?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Estrutura',
      pergunta: 'Como você avalia a limpeza e organização dos laboratórios da Faculdade de Computação?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extra',
      pergunta: 'Você sente que tem acesso adequado aos professores para tirar dúvidas fora do horário das aulas ou por meio de e-mail?',
      caixa_de_texto: false,
    },
    {
      categoria: 'Extra',
      pergunta: 'Você gostaria de fazer alguma sugestão adicional ou expressar alguma reclamação sobre a Faculdade de Computação?',
      caixa_de_texto: true,
    },
    {
      categoria: 'Extra',
      pergunta: 'Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre a sua experiência na Faculdade de Computação?',
      caixa_de_texto: true,
    },
  ];

  const totalPerguntas = useRef(0);

  if(disciplinas.length > 0){
    disciplinas.forEach((disciplina) => {
      const pergunta = `Em relação a motivação dos professores, como você avaliaria a disciplina ${disciplina}?`;
      listaPerguntas.splice(5, 0, {
        categoria: 'Ensino',
        pergunta: pergunta,
        caixa_de_texto: false,
      });
    });
  };

  totalPerguntas.current = listaPerguntas.length;

  //console.log(listaPerguntas)

  return (
      
    <>
      <video id="background-video" loop autoPlay>
        <source src="./assets/fundo.mp4" type="video/mp4" />
      </video>

      <div className="container">
        {isLoading && (
          <div className="loadingScreen">
            <h2>Por favor, aguarde alguns segundos...</h2>
          </div>
        )}

        {currentQuestion === 0 && !isLoading && (
          <form onSubmit={handleSubmit(onSubmitMatricula)}>
            <h1>{listaPerguntas[0].categoria}</h1>
            <h2>{listaPerguntas[0].pergunta}</h2>
            <input type="text" placeholder="Ex: 201911140000" {...register('matricula')} />
            <input type="submit" value="Enviar" />
          </form>
        )}

        {currentQuestion >= 1 && currentQuestion < totalPerguntas.current && !isLoading && (
<form onSubmit={handleSubmit(onSubmitSatisfaction)}>
  <h1>{listaPerguntas[currentQuestion].categoria}</h1>
  <h2>{listaPerguntas[currentQuestion].pergunta}</h2>
  {listaPerguntas[currentQuestion].caixa_de_texto ? (
    //<textarea name="caixaDeTexto" id="caixaDeTexto" cols="60" rows="10"></textarea>
    <input type="text" placeholder="Escreva aqui" {...register(`nivelSatisfacao${currentQuestion - 1}`)} />
  ) : (
    <div className="Radiobox">
      {/* Use separate variables for radio input values */}
      {Array.from({ length: 10 }, (_, i) => i + 1).map(value => (
        <React.Fragment key={value}>
          <input {...register(`nivelSatisfacao${currentQuestion - 1}`)} type="radio" value={`${value}§${listaPerguntas[currentQuestion].pergunta}`} />
          <span>{value}</span>
        </React.Fragment>
      ))}
    </div>
  )}

            <div className="Botoes">
            {currentQuestion !== 1 && (
              <button onClick={(event) => { event.preventDefault(); setCurrentQuestion(currentQuestion - 1); }}>Voltar</button>
            )}
            
            {currentQuestion !== totalPerguntas.current-1 && (
              <button onClick={(event) => { event.preventDefault(); setCurrentQuestion(currentQuestion + 1); }}>Próxima</button>
            )}
            
            {currentQuestion === totalPerguntas.current-1 && (
              <input type="submit" value="Enviar" />
            )}
            </div>
          </form>
        )}
      </div>
    </>
  );
}