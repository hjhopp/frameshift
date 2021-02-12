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

    function handleClick(e) {
        const buttonIdx = e.target.dataset.button;

        send(buttons[buttonIdx].send);
    }
</script>

<style>
    div {
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

<div data-testid="nav">
    {#each buttons as button, idx}
        <button
            data-testid={`${button.name}-nav`}
            data-button={idx}
            on:click={handleClick}
        >
            {button.name[0]}
        </button>
    {/each}
</div>
