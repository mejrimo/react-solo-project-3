import { useState } from 'react';
import { nanoid } from 'nanoid';
import Question from './components/Question';
import Answers from './components/Answers';

function App() {
	const [isStarted, setIsStarted] = useState(false);
	const [quizGame, setQuizGame] = useState([]);

	function getQuestions() {
		fetch('https://opentdb.com/api.php?amount=5&encode=url3986')
			.then((res) => res.json())
			.then((data) => {
				let dataWithoutId = data.results;
				let dataWithId = [];
				for (let i = 0; i < dataWithoutId.length; i++) {
					dataWithoutId[i] = { ...dataWithoutId[i], id: nanoid() };
					dataWithId.push(dataWithoutId[i]);
				}
				setQuizGame(dataWithId);
				setIsStarted((x) => !x);
			});
	}

	function handleClick(e) {
		const target = e.target;
		target.style.backgroundColor = '#D6DBF5';
	}

	const quizElements = quizGame.map((quiz) => {
		return (
			<div key={quiz.id}>
				<Question {...quiz} />
				<Answers {...quiz} handleClick={handleClick} />
				<hr></hr>
			</div>
		);
	});

	return (
		<main>
			{isStarted ? (
				<div className="quiz-started">
					{quizElements}
					<div className="check-section">
						<button>Check Answers</button>
					</div>
				</div>
			) : (
				<div className="starting-page">
					<h1>Quizzical</h1>
					<p>Multiple-choices quiz game made with React</p>
					<button onClick={getQuestions}>Start Quiz</button>
				</div>
			)}
		</main>
	);
}

export default App;
