import { useState, useEffect } from 'react'
import './App.css'
  const options = ['Мушт', 'Қайчӣ', 'Чапот'];

  const Lesson = () => {
    const [youplayer, setPlayerChoice] = useState(null);
    const [computerplayer, setComputerChoice] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
  
    useEffect(() => {
      if (youplayer) {
        const randomIndex = Math.floor(Math.random() * 3);
        const computerplayer = options[randomIndex];
        setComputerChoice(computerplayer);
        determineWinner(youplayer, computerplayer);
      }
    }, [youplayer]);
  
    const determineWinner = (you, computer) => {
      if (you === computer) {
        return;
      } else if (
        (you === 'Мушт' && computer === 'Қайчӣ') ||
        (you === 'Қайчӣ' && computer === 'Чапот') ||
        (you === 'Чапот' && computer === 'Мушт')
      ) {
        setPlayerScore(prevScore => prevScore + 1);
        if (playerScore + 1 === 3) {
          alert('Шумо ғолиб шудед!');
          setPlayerScore(0);
          setComputerScore(0);
        }
      } else {
        setComputerScore(prevScore => prevScore + 1);
        if (computerScore + 1 === 3) {
          alert('Компьютер ғолиб шуд!');
          setPlayerScore(0);
          setComputerScore(0);
        }
      }
    };
    const handleChoice = choice => {
      setPlayerChoice(choice);
    };
  

  return (
    <>
     <div className='section'>
      <h2>Яктаашро интихоб намо:</h2>
      <div>
        {options.map(option => (
          <button key={option} onClick={() => handleChoice(option)} className='btn'>
            {option}
          </button>
        ))}
      </div>
      <h3>Интихоби шумо: {youplayer}</h3>
      <h3>Интихоби компютер: {computerplayer}</h3>
      <h3>Ҳисоб: Шумо: {playerScore} - {computerScore} :Компютер</h3>
    </div>
   
    </>
  )
}


export default   Lesson
