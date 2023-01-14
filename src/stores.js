import { readable } from 'svelte/store';

export const time = readable(0, function start(set) {
	const countToThisDate = new Date('2023-03-26T18:25:00');
	const endTime = countToThisDate.getTime();

	const interval = setInterval(() => {
		const current = new Date();
		const currentTime = current.getTime();
		set(endTime - currentTime);
	}, 10);

	return function stop() {
		set(0);
		clearInterval(interval);
	};
});
