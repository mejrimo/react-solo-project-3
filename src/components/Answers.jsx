export default function Answers(props) {
	const answerArr = [];
	const correctAnswer = decodeURIComponent(props.correct_answer);
	const incorrectAnswers = props.incorrect_answers;

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	answerArr.push(correctAnswer);
	incorrectAnswers.map((aws) => answerArr.push(decodeURIComponent(aws)));

	shuffle(answerArr);

	const styles = {
		backgroundColor: props.isHeld ? '#D6DBF5' : '#F5F7FB',
	};

	const choices = answerArr.map((answer) => (
		<button
			onClick={(e) => props.handleClick(e)}
			key={answer}
			value={answer}
			className="answer-button"
			style={styles}>
			{answer}
		</button>
	));

	return <div className="answers-container">{choices}</div>;
}
