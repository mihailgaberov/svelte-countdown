import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		futureDate: '2023-03-26'
	}
});

export default app;
