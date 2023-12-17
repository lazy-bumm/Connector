<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 style="font-size: larger; color:red">{$page.status}: {$page.error?.message}</h1>

<img src="/tenor.gif" height="800" width="800">