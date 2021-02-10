<script>
    import { fly } from "svelte/transition";

    import { dreams, schema } from "client/stores/dreams";
    import { send }           from "client/stores/statechart";

    import { events } from "client/statechart/consts";

    export let dream = { ...schema };
    export let editing;

    // https://github.com/sveltejs/svelte/issues/4442
    $: dream = dream || { ...schema };

    function handleSubmit() {
        if (editing) {
            dreams.edit(dream);

            return send(events.ARCHIVE);
        }

        dreams.create(dream);

        return send(events.EDITFORM, { dream });
    }
</script>

<style>
    div {
        width: 87%;
        height: 92%;

        background-color: rgb(255, 255, 255, 0.5);
        border-radius: 5px;
        padding: 0.5em;
        position: absolute;
    }

    input,
    textarea {
        width : 100%;
        background-color:rgb(255, 255, 255, 0.85);
    }
</style>

<div data-testid="dream-form" data-editing={editing} transition:fly="{{ y : 200, duration : 400 }}">
    <form on:submit|preventDefault={handleSubmit}>
        <label for="title">Title</label>
        <input type="text" name="title" bind:value={dream.title}>

        <label for="date">Date</label>
        <input type="date" name="date" bind:value={dream.date}>

        <label for="dream">Dream</label>
        <textarea name="dream" rows="13" cols="30"  bind:value={dream.description}/>

        <button>{editing ? "Save" : "Create"}</button>
        <button>Clear</button>
    </form>
</div>
