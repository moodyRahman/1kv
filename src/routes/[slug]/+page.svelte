
<script lang="ts">
    import { goto } from "$app/navigation";
    export let data;
    const clip_i = data.clips.findIndex(x => x.slug.includes(data.slug))
    const clip = data.clips[clip_i]
    const left = data.clips[clip_i-1]
    const right = data.clips[clip_i+1]
    const random = data.clips[Math.floor(Math.random()*data.clips.length)];

</script>


<div class="video">

    <video controls width="50%">
        <source src={`https://moodyrahman.com/files/clips/d2/${data.slug}.mp4`}>
        <track kind="captions">

    </video>

    <div>
        <b>
            {clip.attributes.title}
        </b>
    </div>
    <div>
        {clip.attributes.description}
    </div>

    <div>
        {#if left}
        <a href={left.slug}>{"<-"} {left.attributes.title}</a>
        {/if}
        

        <a href="/">home</a>

        <a href={random.slug}>random</a>

        {#if right}
        <a href={right.slug}>{right.attributes.title} {"->"}</a>
        {/if}

    </div>

</div>


<style>
    .video{
        display: flex;
        flex-direction: column; /* Stack elements vertically */
        justify-content: center; /* Center vertically */
        align-items: center; /* Center horizontally */
    }
</style>