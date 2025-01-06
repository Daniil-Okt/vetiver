function estimFeedback() {
    const stars = document.querySelectorAll('.estim-feedback__star');
	const input = document.querySelector('.estim-feedback__input');
	const feedbackNumber = document.querySelector('.estim-feedback__number');

	if (stars.length > 0 && input && feedbackNumber) {
		stars.forEach((star, index) => {
			star.addEventListener('click', () => {
				const rating = index + 1;
				feedbackNumber.textContent = rating;
				input.value = rating;

				stars.forEach((s, i) => {
					if (i < rating) {
						s.classList.add('marked');
					} else {
						s.classList.remove('marked');
					}
				});
			});
		});

		const existingRating = parseInt(input.value, 10) || 0;
		if (existingRating > 0) {
			stars.forEach((s, i) => {
				if (i < existingRating) {
					s.classList.add('marked');
				} else {
					s.classList.remove('marked');
				}
			});
			feedbackNumber.textContent = existingRating;
		}
	}
}

export default estimFeedback;