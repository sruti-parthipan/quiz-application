// Questions that will be asked
const Questions = [{
	q: "Chandrayaan-3 has been launched form which of the following centres?",
	a: [{ text: "Vikram Sarabhai Space Centre", isCorrect: false },
	{ text: " ISRO", isCorrect: false },
	{ text: " Satish Dhawan Space Centre", isCorrect: true },
	{ text: "Dr. Abdul Kalam Island", isCorrect: false }
	]

},
{
	q: "The Chandrayaan-3 mission’s Lander is known as:",
	a: [{ text: "Bheem", isCorrect: false, isSelected: false },
	{ text: "Pragyaan", isCorrect: false },
	{ text: "Dhruv", isCorrect: false },
	{ text: "Vikram", isCorrect: true }
	]

},
{
	q: "When was Chandrayaan-3 launched?",
	a: [{ text: "14th August", isCorrect: false },
	{ text: "30th June", isCorrect: false },
	{ text: " 14th July", isCorrect: true },
	{ text: "10th September", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
