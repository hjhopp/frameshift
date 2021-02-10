<script>
    import Nav      from "./components/nav.svelte";
    import Children from "./components/children.svelte";
</script>

<style>
    main {
        display: flex;
    }
</style>

<main data-testid="layout">
    <Nav />
    <Children />
</main>
