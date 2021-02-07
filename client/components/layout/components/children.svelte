<script>
    import { tree } from "client/stores/statechart";
</script>

<style>
    .content {
        display: flex;
        justify-content: center;

        width: 100%;
    }
</style>

<div class="content">
    {#each $tree as { component, props, children }}
        <svelte:component this={component} {children} {...props} />
    {/each}
</div>
