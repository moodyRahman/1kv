<script lang="ts">
	import { goto } from "$app/navigation";

    export let title: string;
    export let desc:string;
    export let url:string;

    const click = (e: MouseEvent|KeyboardEvent) => {
        console.log(e)
        goto(url.slice(url.lastIndexOf("/"), url.length-4))
    }
</script>

<div class="card" on:click={click} on:keypress={click}>

    <a href="{url.slice(url.lastIndexOf("/"), url.length-4)}">{title}</a> <br>
    {desc}<br>
</div>

<style>
    .card{
        margin:15px;
        padding: 15px;
        width:50%;
    }
</style>