import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
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

      // After successfully submitting matricula, move to the next question
      setCurrentQuestion(currentQuestion + 1);
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or error
    }
  };

  const onSubmitSatisfaction = (data) => {
    console.log(data);
    // Handle satisfaction data submission
  };

  console.log(errors);

  return (
      
<>
   <video id="background-video" loop autoPlay>
    <source src="./assets/fundo.mp4" type="video/mp4" />
</video>

    <div className="container">
    
 
    
      {isLoading && 
        <div className="loadingScreen">
          <h2>Por favor, aguarde alguns segundos...</h2>
        </div>
      } 
      
      {currentQuestion === 1 && !isLoading && (
        <form onSubmit={handleSubmit(onSubmitMatricula)}>
          <h1>Opina FACOMP</h1>
          <h2>Digite o seu número de matrícula:</h2>
          <input type="text" placeholder="Ex: 201911140000" {...register('matricula')} />
          <input type="submit" value="Enviar" />
        </form>
      )}

      {currentQuestion >= 2 && currentQuestion <= 38 && !isLoading && (
        <form onSubmit={handleSubmit(onSubmitSatisfaction)}>
          {currentQuestion === 2 && (<>
            <h1>Ensino</h1>
            <h2>Como você avalia a didática das disciplinas assistidas no período avaliado?</h2>
            </>
          )}
          {currentQuestion === 3 && (
            <>
            <h1>Ensino</h1>
            <h2>A comunicação entre os professores e os alunos têm sido adequadas?</h2>
            </>
          )}
          {currentQuestion === 4 && (
            <>
            <h1>Ensino</h1>
            <h2>Você sente que os colegas de turma se comunicam de maneira efetiva durante as aulas e atividades acadêmicas?</h2>
            </>
          )}
          {currentQuestion === 5 && (
            <>
            <h1>Ensino</h1>
            <h2>Quais estratégias você considera mais eficientes para o seu aprendizado?</h2>
            </>
          )}
          {currentQuestion === 6 && (
            <>
            <h1>Ensino</h1>
            <h2>Em relação a motivação dos professores, como você avaliaria a disciplina X?</h2>
            </>
          )}
          {currentQuestion === 7 && (
            <>
            <h1>Ensino</h1>
            <h2>Quais recursos adicionais (como materiais complementares, tutoriais, etc.) têm sido úteis para o seu aprendizado?</h2>
            </>
          )}
          {currentQuestion === 8 && (
            <>
            <h1>Ensino</h1>
            <h2>Você acredita que as avaliações (provas, trabalhos e outros) aplicadas são justas e coerentes com os conteúdos ministrados?
</h2>
            </>
          )}
          {currentQuestion === 9 && (
            <>
            <h1>Ensino</h1>
            <h2>Você sente que há espaço para a expressão de suas dúvidas e opiniões durante as aulas?</h2>
            </>
          )}
          {currentQuestion === 10 && (
            <>
            <h1>Ensino</h1>
            <h2>Como você avalia a interação entre os alunos e os professores fora do horário das aulas?</h2>
            </>
          )}
          {currentQuestion === 11 && (
            <>
            <h1>Ensino</h1>
            <h2>Quais sugestões você teria para melhorar a qualidade do ensino na Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 12 && (
            <>
            <h1>Pesquisa</h1>
            <h2>. Você tem conhecimento das pesquisas que acontecem dentro da Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 13 && (
            <>
            <h1>Pesquisa</h1>
            <h2>Alguma vez você sentiu-se motivado a procurar um professor ou laboratório para iniciar uma pesquisa?</h2>
            </>
          )}
          {currentQuestion === 14 && (
            <>
            <h1>Pesquisa</h1>
            <h2>Você tem noção como um estágio em um laboratório de pesquisa pode evoluir para um trabalho de conclusão de curso (TCC)?</h2>
            </>
          )}
          
          {currentQuestion === 15 && (
            <>
            <h1>Pesquisa</h1>
            <h2>Você tem conhecimento de que os laboratórios de pesquisa abordam temas atuais, tanto em âmbito mundial quanto em relação à região amazônica?</h2>
            </>
          )}
          
          {currentQuestion === 16 && (
            <>
            <h1>Pesquisa</h1>
            <h2>Você já teve interesse em saber mais sobre algum projeto de pesquisa em específico?</h2>
            </>
          )}
          {currentQuestion === 17 && (
            <>
            <h1>Pesquisa</h1>
            <h2>Você tem interesse em participar de algum projeto de pesquisa na Faculdade de Computação?</h2>
            </>
          )}
          
          {currentQuestion === 18 && (
            <>
            <h1>Extensão</h1>
            <h2>17. Quantos projetos de extensão você conhece que ocorrem na Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 19 && (
            <>
            <h1>Extensão</h1>
            <h2>Você tem ciência de que a maioria dos projetos de extensão são interdisciplinares e envolvem a comunidade, instituições públicas, privadas e terceiro setor?</h2>
            </>
          )}
          {currentQuestion === 20 && (
            <>
            <h1>Extensão</h1>
            <h2>Você já demonstrou interesse em obter mais informações sobre algum projeto de extensão específico?</h2>
            </>
          )}
          {currentQuestion === 21 && (
            <>
            <h1>Extensão</h1>
            <h2>Você tem interesse em participar de um projeto de extensão na Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 22 && (
            <>
            <h1>Extensão</h1>
            <h2>Você acredita que a participação em projetos de extensão pode contribuir para o seu desenvolvimento acadêmico e profissional?</h2>
            </>
          )}
          {currentQuestion === 23 && (
            <>
            <h1>Extensão</h1>
            <h2>Você considera importante a relação entre a universidade e a comunidade por meio dos projetos de extensão?</h2>
            </>
          )}
          {currentQuestion === 24 && (
            <>
            <h1>Administração</h1>
            <h2>A comunicação pessoal, redes sociais e e-mail da administração são eficazes para transmitir informações importantes?</h2>
            </>
          )}
          {currentQuestion === 25 && (
            <>
            <h1>Administração</h1>
            <h2>Você sente que a Faculdade compreende suas necessidades e expectativas como aluno?</h2>
            </>
          )}
          {currentQuestion === 26 && (
            <>
            <h1>Administração</h1>
            <h2>Você acredita que a administração está realizando um planejamento adequado para atender às demandas dos alunos?</h2>
            </>
          )}
          {currentQuestion === 27 && (
            <>
            <h1>Administração</h1>
            <h2>Como você avalia a eficiência dos processos administrativos na Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 28 && (
            <>
            <h1>Administração</h1>
            <h2>Você acredita que a administração está fazendo o melhor possível para promover um ambiente acadêmico favorável?</h2>
            </>
          )}
          {currentQuestion === 29 && (
            <>
            <h1>Administração</h1>
            <h2>Sobre o visual das publicações, você considera criativos?</h2>
            </>
          )}
          
          {currentQuestion === 30 && (
            <>
            <h1>Administração</h1>
            <h2>Como você sugere que a administração pode melhorar seus serviços e atendimento aos alunos?</h2>
            </>
          )}
          {currentQuestion === 31 && (
            <>
            <h1>Administração</h1>
            <h2>Existe alguma reclamação específica ou problema que você gostaria de relatar em relação à administração?</h2>
            </>
          )}
          {currentQuestion === 32 && (
            <>
            <h1>Estrutura</h1>
            <h2>. Como você avalia a qualidade dos computadores nos laboratórios da Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 33 && (
            <>
            <h1>Estrutura</h1>
            <h2>Os programas instalados nos computadores dos laboratórios atendem às suas necessidades acadêmicas?</h2>
            </>
          )}
          {currentQuestion === 34 && (
            <>
            <h1>Estrutura</h1>
            <h2>Você considera os laboratórios de ensino a Faculdade de Computação confortáveis em termos de climatização, iluminação e mobiliário?</h2>
            </>
          )}
          
          {currentQuestion === 35 && (
            <>
            <h1>Estrutura</h1>
            <h2>Como você avalia a limpeza e organização dos laboratórios da Faculdade de Computação?</h2>
            </>
          )}
          
          {currentQuestion === 36 && (
            <>
            <h1>Extra</h1>
            <h2>Você sente que tem acesso adequado aos professores para tirar dúvidas fora do horário das aulas ou por meio de e-mail?</h2>
            </>
          )}
          {currentQuestion === 37 && (
            <>
            <h1>Extra</h1>
            <h2>Você gostaria de fazer alguma sugestão adicional ou expressar alguma reclamação sobre a Faculdade de Computação?</h2>
            </>
          )}
          {currentQuestion === 38 && (
            <>
            <h1>Extra</h1>
            <h2>Existe algum ponto que não foi abordado nas perguntas anteriores que você gostaria de comentar sobre a sua experiência na Faculdade de Computação?</h2>
            </>
          )}
          
          <input type="range" placeholder="Satisfação" {...register(`nivelSatisfacao${currentQuestion - 1}`)} />
          
          <div className="Botoes">
          {currentQuestion !== 2 && (
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Voltar</button>
          )}
          
          {currentQuestion !== 38 && (
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Próxima</button>
          )}
          
          {currentQuestion === 38 && (
            <input type="submit" value="Enviar" />
          )}
          </div>
        </form>
      )}
    </div>
    
    </>
  );
}
