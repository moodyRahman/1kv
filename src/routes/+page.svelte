<script>

    let count = 0

    const click = () => {
        count += 1;
    }

    $: {
        console.log(count)
    }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{count}</p>
<button on:click={click} >click me</button>

<style>

</style>