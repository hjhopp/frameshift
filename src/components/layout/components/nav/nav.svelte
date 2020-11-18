<script>
    const buttons = [
        {
            name: "New",
        },
        {
            name: "Archive",
        },
        {
            name: "Statistics",
        },
    ];

    function handleClick() {
        // set active state of view
    }
</script>

<link rel="stylesheet" href="../layout.css" />

<div>
    {#each buttons as button}
        <button on:click={handleClick}>{button.name[0]}</button>
    {/each}
</div>
