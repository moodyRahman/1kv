<script lang="ts">
	import { goto } from "$app/navigation";

    export let title: string;
    export let desc:string;
    export let player_class:string;
    export let slug:string

    let active:boolean = false;

    const click = (e: MouseEvent|KeyboardEvent) => {
        goto(`${slug}`)
    }
</script>

<div class="card" on:click={click} on:keypress={click}>
    <img alt="{slug}" src="https://moodyrahman.com/files/clips/clipart/{slug.substring(1, 6)}.png" />
    <p class="title"><b>{title}</b></p>
    <div class="desc">
        {desc}
    </div>
    {player_class}
</div>

<style>

    img {
        display: block;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .card{
        margin-bottom: 30px;
        margin-left: 10px;
        /* padding: 15px; */
        width:20%;
        cursor:pointer;
        color: #34425c;
        background-color: #cdcdc2;
    }
    .card > img {
        width: 100%;
    }

    .title {
        margin-bottom: 15px;
    }

    @media screen and (max-width: 600px) {
        .card{
            margin-bottom:15px;
            padding: 15px;
            width:100%;
        }
    }


</style>