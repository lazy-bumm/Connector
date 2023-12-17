<script lang="ts">
	import type { LayoutData } from './$types';
	import { auth, user } from "$lib/firebase";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
	import { goto } from '$app/navigation';

	export let data: LayoutData;

    async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);

	 goto("/login");
	}
	
</script>

 
	

<div class="navbar bg-base-100">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</div>
		<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
		  <li><a>Profile</a></li>
			  <li><a>Edit</a></li>
		</ul>
	  </div>
	  <a class="btn btn-active btn-primary" href="/">Connector</a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1">
		
		<li class="btn btn-outline btn-accent"><a href="/{data.username}">👀Profile</a></li>
		<li><p>&ensp;</p></li>
		{#if data.check}
		<li class="btn btn-outline btn-secondary"><a href="/{data.username}/edit">🍳 Edit</a></li>
		{/if}
	  </ul>
	</div>
	<div class="navbar-end">
		{#if data.check}
	  <a class="btn btn-outline btn-error" on:click={signOutSSR}>LogOut</a>
        {/if}
	</div>
  </div>

  <slot/>