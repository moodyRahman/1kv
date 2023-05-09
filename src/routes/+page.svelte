
<script lang="ts">
    import { base } from '$app/paths';
	import Card from "../components/Card.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

</script>
<div class="clip_container">
    {#each data.clips as clip}
    <Card 
    title={clip.attributes.title} 
    desc={clip.attributes.description} 
    player_class={clip.attributes.player_class}
    slug={clip.slug}
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