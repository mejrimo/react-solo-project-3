export default function Question(props) {
	let question = decodeURIComponent(props.question);

	return (
		<div className="question-container">
			<h2>{question}</h2>
		</div>
	);
}
