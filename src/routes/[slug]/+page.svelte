
<script lang="ts">
    export let data;
    const clip = data.clips.find(x => x.slug.includes(data.slug))
</script>


<div>

    <video controls width="50%">
        <source src={`https://moodyrahman.com/files/clips/d2/${data.slug}.mp4`}>
        <track kind="captions">

    </video>

    {JSON.stringify(clip)}
</div>
