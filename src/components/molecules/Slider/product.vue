<template>
  <section class="container mx-auto mt-8">
    <h2 class="mb-4 text-2xl font-semibold">Featured Products</h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <!-- Product Card (Repeat as needed) -->
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="bg-white p-4 shadow-md"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="mb-4 h-40 w-full object-cover"
        />
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="mt-2 text-primary">{{ product.price }}</p>
        <div class="mx-2 items-center justify-center">
          <button
            @click="addToCart(product)"
            class="mx-4 mt-4 items-center rounded-full bg-lime-800 px-4 py-2 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const featuredProducts = ref([
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
    image: "https://placekitten.com/300/200",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    price: "$29.99",
    image: "https://placekitten.com/300/201",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    price: "$29.99",
    image: "https://placekitten.com/300/201",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
    image: "https://placekitten.com/300/200",
  },
]);

const addToCart = (product) => {
  console.log("Product added to cart:", product);
};
</script>
