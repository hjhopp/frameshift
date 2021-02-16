<script>
    import { events } from "client/statechart/consts";

    import { send } from "client/stores/statechart";

    const buttons = [
        {
            name : "create",
            send : events.CREATEFORM
        },
        {
            name : "archive",
            send : events.ARCHIVE
        }
    ];

    function handleClick(button) {
        send(button.send);
    }
</script>

<style>
    nav {
        width: 61px;
        height: 100vh;
    }

    button {
        display: block;

        width: 45px;
        height: 45px;
        margin: 0.5em;

        border-radius: 50%;
    }
</style>

<nav data-testid="nav">
    {#each buttons as button}
        <button
            data-testid={`${button.name}-nav`}
            on:click={() => handleClick(button)}
        >
            {button.name[0]}
        </button>
    {/each}
</nav>
