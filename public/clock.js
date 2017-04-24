	$(document).ready(() => {
	let workingTime = 20;
	let breakTime = 5;
	let totalTime = workingTime + breakTime;

	$('#total-time').html(`Total: ${totalTime}:00 Minutes`);
	$('#break-time').html(`${breakTime}:00 Minutes`);
	$('#working-time').html(`${workingTime}:00 Minutes`);
	$('#time-until-break').html(`Time until break: ${workingTime}:00 Minutes `)

	$('#decrease-break').on('click', () => {
		breakTime -= 1;
		totalTime = workingTime + breakTime;
		$('#break-time').html(`${breakTime}:00 Minutes`);
		$('#total-time').html(`${totalTime}:00 Minutes`);
	});

	$('#increase-break').on('click', () => {
		breakTime += 1;
		totalTime = workingTime + breakTime;
		$('#break-time').html(`${breakTime}:00 Minutes`);
		$('#total-time').html(`${totalTime}:00 Minutes`);
	});

	$('#increase-work').on('click', () => {
		workingTime += 1;
		totalTime = workingTime + breakTime;
		$('#working-time').html(`${workingTime}:00 Minutes`);
		$('#total-time').html(`${totalTime}:00 Minutes`);
	});

	$('#decrease-work').on('click', () => {
		workingTime -= 1;
		totalTime = workingTime + breakTime;
		$('#working-time').html(`${workingTime}:00 Minutes`);
		$('#total-time').text(`${totalTime}:00 Minutes`);
	});
});
