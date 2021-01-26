<script>
    import { tree } from "src/stores/statechart";
</script>

{#each $tree as { component, props, children }}
    <svelte:component this={component} {children} {...props} />
{/each}
