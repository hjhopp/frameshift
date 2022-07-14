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

        min-width: 75px;
        height: 45px;
        margin: 0.5em;

        border-radius: 10px;

        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #D6D6E7 0 -3px 0 inset;
    }

    button:hover {
        cursor: pointer;
    }
</style>

<nav data-testid="nav">
    {#each buttons as button}
        <button
            data-testid={`${button.name}-nav`}
            on:click={() => handleClick(button)}
        >
            {button.name}
        </button>
    {/each}
</nav>
