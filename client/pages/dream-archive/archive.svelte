<script>
    import { fly } from "svelte/transition";

    import { dreams } from "client/stores/dreams";
    import { send }   from "client/stores/statechart";

    import { events } from "client/statechart/consts";

    function handleClick(dream) {
        send(events.EDITFORM, { dream });
    }
</script>

<style>
    .archive {
        display: flex;
        flex-wrap: wrap;

        position: absolute;
    }

    .dream {
        position: relative;

        width: 200px;
        height: 150px;
        margin: 0.825em;

        border-radius: 3px;
        box-shadow: 0 0 5px black;

        cursor: pointer;
    }

    .dream:hover {
        box-shadow: inset 0 0 5px white;
    }

    .title {
        position: absolute;
        bottom: 13px;

        width: 100%;

        background-color: rgb(255, 255, 255, 0.5);
    }

    h1 {
        margin: 0;
        padding-left: 0.25em;
    }

    img {
        position: absolute;

        width: 100%;
    }
</style>

<div data-testid="archive" class="archive">
    {#each $dreams as dream, idx}
        <div
            class="dream"
            data-testid={`dream-${idx}`}
            transition:fly="{{ y : 200, duration : 400 }}"
            on:click={() => handleClick(dream)}
        >
            <img src={dream.image} alt={dream.title}/>
            <div class="title">
                <h1>{dream.title}</h1>
            </div>
        </div>
    {/each}
</div>
