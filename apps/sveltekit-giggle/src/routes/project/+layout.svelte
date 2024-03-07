<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<nav>
    <a href="general">General</a>
    <a href="logic">Logic</a>
</nav>

Topic title:<strong>{data.topic}</strong>
<br />
<slot />
