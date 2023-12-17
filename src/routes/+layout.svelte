<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
import { user, userData } from "$lib/firebase";
   import "../app.css";


  $user;
  $userData; 

</script>
 
<div class="min-h-screen flex flex-col">
   <slot />
</div>
