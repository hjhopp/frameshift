<script>
    import { fly } from "svelte/transition";

    import { dreams } from "client/stores/dreams";
</script>

<style>
    .archive {
        display: flex;
        flex-wrap: wrap;

        position: absolute;
    }

    .dream {
        width: 200px;
        box-shadow: 0 0 5px black;
        margin: 0.5em;

        border-radius: 3px;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>

<div data-testid="archive" class="archive">
    {#each $dreams as dream}
        <div class="dream" transition:fly="{{ y : 200, duration : 400 }}">
            <img src={dream.image} alt={dream.title}/>
        </div>
    {/each}
</div>
