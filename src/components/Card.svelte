<script lang="ts">
	import { goto } from "$app/navigation";

    export let title: string;
    export let desc:string;
    export let player_class:string;
    export let slug:string

    const click = (e: MouseEvent|KeyboardEvent) => {
        goto(`${slug}`)
    }
</script>

<div class="card" on:click={click} on:keypress={click}>
    <img alt="{slug}" src="https://moodyrahman.com/files/clips/clipart/{slug.substring(1, 6)}.png" />
    <p class="title">{title}</p>
    <div class="desc">
        {desc}
    </div>
    {player_class}
</div>

<style>

    .card{
        margin:15px;
        padding: 15px;
        width:20%;
        cursor:pointer;
        background-color: #34425c;
        color: #cdcdc2;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .card > img {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        .card{
            margin-bottom:15px;
            padding: 15px;
            width:100%;
        }
    }


</style>