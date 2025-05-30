import { Link } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Link to={'/QuizHTML'}>
        <button className='next-button'>HTML Quiz</button>
      </Link>
      <Link to={'/QuizReact'}>
        <button className='next-button'>React Quiz</button>
      </Link>
    </>
  )
}

export default App
