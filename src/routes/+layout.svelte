
<script lang="ts">
    
    import {scale, fade, blur} from "svelte/transition"

    export let data;
</script>


{#key data.pathname }
<div class="header">
    <p>
        <a href="/">one thousand voices</a>, a destiny 2 clip showcase, a moody rahman project
    </p>
    <p>
        <a href="https://github.com/moodyRahman/1kv">source code</a>, <a href="./writeup">technical writeup</a>
    </p>
</div>

    <slot></slot>
{/key}

<style>
    slot {
        margin: 100px;
        padding: 100px;
    }

    .header {
        padding-left: 50px;
    }

    :global(body) {
            margin: 0;
            padding-left: 100px;
            padding-right: 100px;
            padding-top: 50px;
            padding-bottom: 50px;
            background-color: #cdcdc2;
    }
    @media screen and (max-width: 600px) {
        :global(body) {
            margin: 0;
            padding: 0;
            background-color: #cdcdc2;
        }

        .header {
            padding-left: 5px;
        }
    }
    :global(html) {
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
        font-display: swap;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
</style>