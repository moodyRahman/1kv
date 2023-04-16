<script lang="ts">
	import { goto } from "$app/navigation";

    export let title: string;
    export let desc:string;
    export let player_class:string;
    export let slug:string

    const click = (e: MouseEvent|KeyboardEvent) => {
        goto(`./${slug}`)
    }
</script>

<div class="card" on:click={click} on:keypress={click}>

    <p>{title}</p>
    {desc}<br>
    {player_class}
</div>

<style>
    .card{
        margin:15px;
        padding: 15px;
        width:30%;
        cursor:pointer;
        background-color: #34425c;
        color: #cdcdc2;
        border-radius: 10px;
    }


</style>