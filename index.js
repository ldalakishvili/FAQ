const questionBox = document.querySelectorAll(`.question-box`);
const quest = document.querySelectorAll(`.quest`);
const answer = document.querySelectorAll(`.answer`);
const btns = document.querySelectorAll(`.icon`);
const bigBox = document.querySelector(`.big-box`);

questionBox.forEach((btn) => {
	btn.addEventListener(`click`, (e) => {
		console.log(e.currentTarget);

		if (
			!e.currentTarget.firstElementChild.lastElementChild.classList.contains(
				`rotate`
			)
		) {
			e.currentTarget.lastElementChild.style.display = `block`;
			e.currentTarget.firstElementChild.firstElementChild.style.fontWeight = 700;
			e.currentTarget.firstElementChild.lastElementChild.classList.add(
				`rotate`
			);
		} else {
			e.currentTarget.lastElementChild.style.display = `none`;
			e.currentTarget.firstElementChild.firstElementChild.style.fontWeight = 400;
			e.currentTarget.firstElementChild.lastElementChild.classList.remove(
				`rotate`
			);
		}
	});
});
