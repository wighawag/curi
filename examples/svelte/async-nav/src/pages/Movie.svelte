{#if error}
  <p>The requested movie could not be found</p>
{:else if movie}
  <h1>{movie.title}</h1>
{/if}
<Link name="Home">Home</Link>

<script>
  import { getResponse } from "@curi/svelte";
  import Link from "@curi/svelte/components/Link.svelte";

  let response = getResponse();

  $: error = $response.data.error;
  $: movie = $response.data.movie;
</script>
