import React, { useState } from 'react'
import './Quiz.css'
import data from '../../data'

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0)

    function handleAnswerClick(answers) {
        setSelectedAnswer(answers)
        answers.isCorrect ? setScore(score + 1) : score
    }

    function handleNextQuestion() {
        setSelectedAnswer(null)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    } 

    if (currentQuestionIndex >= data.length) {
        return (
            <div className="container">
                <h2>Вы завершили тест ваш результат: {score}</h2>
                <button className="next-button" onClick={() => setCurrentQuestionIndex(0)}>Попробовать снова</button>
            </div>
        )
    }

    const currentQuestion = data[currentQuestionIndex]

    return (
        <div className='container'>
            <h1>Quiz HTML</h1>

            <div className="progress">
                <p>Вопрос {currentQuestionIndex + 1} из {data.length}</p>
                <p>Oчки: {score}</p>
            </div>

            <div key={currentQuestionIndex}>
                <h2 className='h'>{currentQuestion.question}</h2>
                <ul>
                    {currentQuestion.answers.map((answers, answersIndex) => (
                        <li
                            key={answersIndex}
                            onClick={() => !selectedAnswer && handleAnswerClick(answers)}
                            className={`
                                ${selectedAnswer ? 'disabled' : ''}
                                ${selectedAnswer && answers.isCorrect ? 'correct' : ''}
                                ${selectedAnswer === answers && !answers.isCorrect ? 'incorrect' : ''}
                                `}
                        >
                            {answers.text}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="next-button" onClick={handleNextQuestion}>{currentQuestionIndex === data.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}</button>
        </div>
    )
}

export default Quiz
