
<script lang="ts">
	import Card from "../components/Card.svelte";
import type { PageData } from "./$types";

    export let data: PageData;

</script>

{#each data.clips as clip}
    <Card 
        title={clip.attributes.title} 
        desc={clip.attributes.description} 
        url={clip.attributes.url} />
{/each}

<style>

</style>