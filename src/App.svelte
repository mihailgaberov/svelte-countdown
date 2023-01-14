<script>
    import {onDestroy} from 'svelte';
    import Stopwatch from './Stopwatch.svelte';
    import Title from './Title.svelte';
    import {time} from './stores.js';

    let lapse = 0;
    let previous = 0;


    let unsubscribe = time.subscribe(value => {
        lapse = value + previous;
    });

    function terminate() {
        if (unsubscribe) {
            unsubscribe();
            unsubscribe = null;
        }
    }

    onDestroy(() => {
        terminate();
    });

</script>
<style>
    @import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300|Open+Sans:400&display=swap");

    :global(*) {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :global(body) {
        background: hsl(0, 0%, 95%);
        color: hsl(0, 0%, 20%);
        font-family: "Open Sans", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    :global(.stopwatch) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    :global(.stopwatch > * + *) {
        margin-top: 0.75rem;
    }

</style>

<div class="stopwatch">
    <Title/>

    <!-- pass the number of milliseconds to the stopwatch component -->
    <Stopwatch {lapse}/>
</div>
