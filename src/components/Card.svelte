<script lang="ts">
	import { goto } from "$app/navigation";
	import dayjs from 'dayjs'
    import type { Clip } from "../routes/+layout.server";

    export let clip_data: Clip;


    $: ({slug} = clip_data)

    $: ({title, description, source_creation, tags0, tags1} = clip_data.attributes)

    const click = (e: MouseEvent|KeyboardEvent) => {
        goto(`${slug}`)
    }

</script>

<div class="card" on:click={click} on:keypress={click}>
    <img loading="lazy" alt="{slug}" src="https://moodyrahman.com/files/clips/clipart/{slug.substring(1, 6)}.png" />
    
    <p class="title"><b>{title}</b></p>
    <div>
        <b>
            {dayjs(source_creation).format("MMM DD YYYY, hh:mm:ss A")}
        </b>
    </div>
    <div class="desc">
        <i>{description}</i>
    </div>


    <div>
        {tags0!==null?tags0:""}{tags0 && tags1?", ":""}{tags1!==null?tags1:""}
    </div>


</div>

<style>

    img {
        display: block;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    
    p {
        margin: 0px;
        padding: 0px;
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
        margin-top: 8px;
    }

    @media screen and (max-width: 600px) {
        .card{
            margin-bottom:15px;
            padding: 15px;
            width:100%;
        }
    }


</style>