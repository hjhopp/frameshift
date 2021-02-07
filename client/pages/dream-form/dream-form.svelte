<script>
    import { fly } from "svelte/transition";

    import { form } from "client/stores/form";
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

<div data-testid="dream-form" transition:fly="{{ y : 200, duration : 400 }}">
    <form>
        <label for="title">Title</label>
        <input type="text" name="title" bind:value={$form.title}>

        <label for="date">Date</label>
        <input type="date" name="date" bind:value={$form.date}>

        <label for="dream">Dream</label>
        <textarea name="dream" rows="13" cols="30"  bind:value={$form.description}/>

        <button>Save</button>
        <button>Clear</button>
    </form>
</div>
