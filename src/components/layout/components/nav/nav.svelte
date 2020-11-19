<script>
    const buttons = [
        {
            name : "+",
        },
        {
            name : "Dreams",
        },
        {
            name : "Statistics",
        }
    ];

    function handleClick() {
        // set active state of view
    }
</script>

<style>
    div {
        position: fixed;

        left: 0;
        top: 0;
        width: 50px;
        height: 100vh;
    }

    button {
        display: block;

        width: 45px;
        height: 45px;
        margin: 0.5em;
    }
</style>

<div>
    {#each buttons as button}
        <button on:click={handleClick}>{button.name[0]}</button>
    {/each}
</div>
