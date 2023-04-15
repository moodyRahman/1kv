
<script lang="ts">
    import { base } from '$app/paths';
	import Card from "../components/Card.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    console.log(base)

</script>
<div class="clip_container">
    {#each data.clips as clip}
    <Card 
    title={clip.attributes.title} 
    desc={clip.attributes.description} 
    player_class={clip.attributes.player_class}
    slug={clip.slug}
    />
    <a href={base}/{clip.slug}>none</a>
    {/each}
</div>

<style>

.clip_container {
    display:flex;
    flex-flow: row wrap;
}

a{
    display: none;
}


</style>