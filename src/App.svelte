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
        /* center the .stopwatch container in the viewport */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    /* display the content of the .stopwatch container in a column */
    :global(.stopwatch) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
    }

    :global(.stopwatch > * + *) {
        margin-top: 0.75rem;
    }

    /* for devices supporting css grid */
    @supports (display: grid) {
        /* for larger viewports */
        @media (min-width: 600px) {
            :global(.stopwatch) {
                display: grid;
                grid-gap: 20px 50px;
                grid-template-columns: 300px 250px;
                grid-template-rows: 225px auto;
                grid-template-areas: "watch list" "watch controls";
                justify-content: space-between;
            }

            :global(.stopwatch svg) {
                grid-area: watch;
                align-self: center;
            }

            :global(.stopwatch ul) {
                grid-area: list;
            }

            :global(.stopwatch > * + *) {
                margin-top: 0;
            }
        }
    }

</style>

<div class="stopwatch">
    <Title/>

    <!-- pass the number of milliseconds to the stopwatch component -->
    <Stopwatch {lapse}/>
</div>
