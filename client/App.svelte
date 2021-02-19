<script>
    import { events } from "client/statechart/consts";
    import { send }   from "client/stores/statechart";

    import Layout from "client/components/layout/layout.svelte";
</script>

<svelte:body on:keyup={({ code }) => {
    if (code === "Escape") {
        send(events.HOME);
    }
}} />

<div data-testid="app">
    <Layout />
</div>
