
<script lang="ts">
    import { base } from '$app/paths';
	import Card from "../components/Card.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    let active_tag = "";

    const updateActive = (value: string) => {
        if (active_tag == value) {
            active_tag = ""
            return;
        }
        active_tag=value
    }

    $: all_clips = active_tag === "" ? 
                        data.clips:
                        data.clips.filter((x) => x.attributes.tags0 === active_tag || x.attributes.tags1 === active_tag)

</script>


<div class="tags">
    filters: 
    {#each Array.from(data.tags.keys()) as value}     
    <button on:click={(e) => {updateActive(value)}} style="background-color:{active_tag==value?"black":""}; color:{active_tag==value?"#cdcdc2":""}">
        {value}
    </button>
    {/each}
</div>


<div class="clip_container">
    {#each all_clips as clip}
    <Card clip_data={clip} />
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

.tags {
    padding: 50px;
}

a{
    display: none;
}

button {
    color: inherit;
    font: inherit;
    background-color: inherit;
    margin-left: 10px;
}


</style>