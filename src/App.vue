<template>
  <RouterView v-slot="{ Component }">
    <Transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
