
<script lang="ts">
    
    import {scale} from "svelte/transition"

    export let data;
</script>


{#key data.pathname }
<div transition:scale>
    <slot></slot>
</div>
{/key}

<style>
    slot {
        margin: 100px;
        padding: 100px;
    }

    :global(body) {
            margin: 0;
            padding: 60px;
            background-color: #cdcdc2;
    }
    @media screen and (max-width: 600px) {
        :global(body) {
            margin: 0;
            padding: 0;
            background-color: #cdcdc2;
        }
    }
    :global(html) {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
</style>