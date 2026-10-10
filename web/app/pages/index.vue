<script setup lang="ts"></script>
<template>
  <UPageHero
    title="Ceci est un titre"
    headline="Coming soon"
    :links="[
      {
        label: 'Go to Google',
        to: 'https://google.com',
        icon: 'i-lucide-square-play',
      },
      {
        label: 'Learn more',
        to: '/',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-arrow-right',
      },
    ]"
  >
    <template #description>
      Ceci est un
      <TextLink to="https://fr.wikipedia.org/wiki/Lorem_ipsum"
        >paragraphe de description standard utilisé en imprimerie</TextLink
      >. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus
      turpis, dictum eu mi a, varius mattis ex. Donec tempus nulla sem, sit amet
      vestibulum nunc faucibus id. Etiam congue ipsum eu nunc suscipit, non
      pharetra sem fermentum. Nulla suscipit lacus sagittis, vestibulum neque
      vitae, efficitur ligula. Sed quis nisl volutpat, rhoncus tellus vitae,
      tincidunt nibh. Duis rutrum ligula eget neque consectetur efficitur. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. <br /><br />
      Etiam a magna massa. Sed dolor elit, lacinia sed lacinia non, feugiat a
      urna. Phasellus aliquet elit urna, eu elementum est lacinia at. Aliquam
      rutrum eu tortor at ornare. Vestibulum tincidunt massa pellentesque arcu
      porta scelerisque. Pellentesque non sapien a eros feugiat efficitur. Donec
      lobortis dolor vitae aliquam tempor. Etiam nec interdum augue. Nam auctor
      gravida nisi, vitae fermentum odio suscipit non. In a sem sagittis,
      sodales eros sit amet, condimentum nisl. Nunc vitae quam non dui tincidunt
      tempor id at tortor. Nunc vel urna erat.
    </template>
  </UPageHero>
</template>
