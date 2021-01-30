<script>
    import { events } from "src/statechart/frameshift";
    import { send }   from "src/stores/statechart";

    const buttons = [
        {
            name : "+",
            send : events.NEWDREAM
        },
        {
            name : "Dreams",
            send : events.ARCHIVE
        },
        // {
        //     name : "Statistics",
        // }
    ];

    function handleClick(button) {
        send(button.send);
    }
</script>

<style>
    div {
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
        <button data-testid={`${button.name}-nav`} on:click={() => handleClick(button)}>{button.name[0]}</button>
    {/each}
</div>
