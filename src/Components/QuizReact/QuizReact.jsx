import { useState } from 'react'
import '../Quiz/Quiz.css'
import {dataReact} from '../../data.js'
import { Link } from 'react-router-dom';

const QuizReact = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0)
    const [selectedAnswerId, setSelectedAnswerId] = useState(null); // временный выбор
    const [confirmedAnswer, setConfirmedAnswer] = useState(null);

    function handleAnswerClick(answersIndex) {
        setSelectedAnswerId(answersIndex)
    }

    function handleNextQuestion() {
        setSelectedAnswerId(null)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setConfirmedAnswer(null)
    }

    function checkQuestion(answer) {
        setConfirmedAnswer(answer)
        if (answer.isCorrect) {
        setScore(score + 1);
    }
    }

    if (currentQuestionIndex >= dataReact.length) {
        return (
            <div className="container">
                <h2>Вы завершили тест ваш результат: {score}</h2>
                <button className="next-button again" onClick={() => setCurrentQuestionIndex(0)}>Попробовать снова</button>
            </div>
        )
    }

    const currentQuestion = dataReact[currentQuestionIndex]

    return (
        <div className='container'>
            <Link className='no-underline' to={'/'}><h1>Quiz</h1></Link>

            <div className="progress">
                <p>Вопрос {currentQuestionIndex + 1} из {dataReact.length}</p>
                <p>Oчки: {score}</p>
            </div>

            <div key={currentQuestionIndex}>
                <h2 className='h'>{currentQuestion.question}</h2>
                <ul>
                    {currentQuestion.answers.map((answers, answersIndex) => (
                        <li
                            key={answersIndex}
                            onClick={() => handleAnswerClick(answersIndex)}
                            className={`
        ${selectedAnswerId === answersIndex ? 'selected' : ''}
        ${confirmedAnswer ? 'disabled' : ''}
        ${confirmedAnswer && answers.isCorrect ? 'correct' : ''}
        ${confirmedAnswer && selectedAnswerId === answersIndex && !answers.isCorrect ? 'incorrect' : ''}
    `}
                        >
                            {answers.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="btn">
                <button className={`confirm-button ${!selectedAnswerId ? 'disabled' : ''}`} onClick={() => checkQuestion(currentQuestion.answers[selectedAnswerId])}>Выбрать ответ</button>
                <button className="next-button" onClick={handleNextQuestion}>{currentQuestionIndex === dataReact.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}</button>
            </div>
        </div>
    )
}

export default QuizReact
