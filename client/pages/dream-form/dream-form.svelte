<style>
    div {
        width: 100%;
        height: 95%;
        background-color: rgb(255, 255, 255, 0.5);
        border-radius: 5px;
        padding: 0.5em;
    }

    input,
    textarea {
        width : 100%;
    }
</style>

<div>
    <form>
        <label for="title">Title</label>
        <input type="text" name="title">

        <label for="date">Date</label>
        <input type="date" name="date">

        <label for="dream">Dream</label>
        <textarea name="dream" rows="4" cols="30" />

        <button>Save</button>
        <button>Clear</button>
    </form>
</div>
