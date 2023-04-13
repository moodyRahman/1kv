<slot></slot>

<style>
    slot {
        margin: 100px;
        padding: 100px;
    }
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #cdcdc2;
    }
    :global(html) {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
</style>