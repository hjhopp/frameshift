<script>
    import { tree } from "client/stores/statechart";
</script>

{#each $tree as { component, props, children }}
    <svelte:component this={component} {children} {...props} />
{/each}
