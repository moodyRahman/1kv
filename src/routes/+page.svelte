
<script lang="ts">
    import { base } from '$app/paths';
	import Card from "../components/Card.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

</script>
<div class="clip_container">
    {#each data.clips as clip}
    <Card 
    clip_data={clip}
    />
    <a href={clip.slug}>none</a>
    {/each}
</div>

<style>

.clip_container {
    width: 100%;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

a{
    display: none;
}


</style>