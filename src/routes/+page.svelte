
<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;

    let count = 0

    const click = () => {
        count += 1;
    }

    $: {
        console.log(data.clips[1])
    }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{count}</p>
<button on:click={click} >click me</button>
<pre>
    {JSON.stringify(data.clips, null, 2)}
</pre>

<style>

</style>