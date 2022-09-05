<script lang="ts">
  import copy from 'copy-to-clipboard'

  const resources = Object.values(
    import.meta.glob('./assets/**', {
      eager: true,
      as: 'url',
    })
  )

  const imgClick = (src: string) => {
    const url = `${window.origin}${src}`
    copy(url)
  }
</script>

<main>
  <div>
    <h1>Static Resource</h1>
    <div class="wrapper">
      {#each resources as src}
        <div class="box">
          <img
            on:click={() => imgClick(src)}
            title={src}
            class="img"
            alt={src}
            {src}
          />
          <p class="url">{src}</p>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .wrapper {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, 200px);
  }

  @media screen and (max-width: 640px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
    .box {
      height: auto;
    }
  }

  .box {
    width: 100%;
    height: 200px;
    border: 1px solid #ccc;
    padding: 12px 4px;
    cursor: pointer;
    position: relative;
  }

  .box:active .img {
    transform: scale(0.1);
  }

  .img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s linear;
  }

  .url {
    font-size: 12px;
    color: #999;
    position: absolute;
    left: 5px;
    bottom: 0;
  }
</style>
