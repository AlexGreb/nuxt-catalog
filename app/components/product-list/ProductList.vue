<script setup>
  import {formatPrice} from "../../utils/product.js";

  const productStore = useProductStore();
  const cartStore = useCartStore();
  await productStore.fetchProducts();
</script>

<template>
  <article>
    <h1 class="text-3xl mb-5">Сlothing</h1>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(253px,1fr))] gap-10">
      <div class="flex flex-col border border-gray p-4"
           v-for="product in productStore.getProductsByBrand"
           :key="product.id">
        <div class="bg-[#f2f2f2] grid justify-center">
          <NuxtImg :src="product.image"
                   width="300"
                   heigh="300"/>
        </div>
        <div class="text-2xl mt-2">{{product.title}}</div>
        <div class="text-sm mt-1">{{product.brand.title}}</div>
<!--        <div v-if="product.type === 'configurable'">-->
<!--          <div v-for="option in product.configurable_options"-->
<!--               :key="option.attribute_code">-->
<!--            <div v-if="option.attribute_code === 'color'"-->
<!--                 class="flex mt-3 gap-1">-->
<!--              <button-->
<!--                  v-for="value in option.values"-->
<!--                  :key="value.value_index"-->
<!--                  class="flex justify-center items-center aspect-square border border-gray rounded-full w-[25px] h-[25px]"-->
<!--                  type="button"-->
<!--                  :title="value.label">-->
<!--                      <span class="block aspect-square rounded-full w-[20px] h-[20px]"-->
<!--                            :style="{ backgroundColor: value.value }">-->
<!--                      </span>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div v-if="option.attribute_code === 'size'"-->
<!--                 class="mt-3 gap-2 flex">-->
<!--              <button-->
<!--                  v-for="value in option.values"-->
<!--                  type="button"-->
<!--                  :key="value.value_index"-->
<!--                  class="border border-gray px-2 py-1"-->
<!--                  :title="value.label"-->
<!--              >-->
<!--                {{value.label}}-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
        <div v-if="product.regular_price.value"
             class="text-lg mt-2 font-bold">
          {{formatPrice(product.regular_price.value, productStore.currentCurrency)}}
        </div>
        <div class="mt-auto">
          <NuxtLink v-if="cartStore.isInCart(product.id)"
                    class="block mt-2 bg-black text-center w-full text-md text-white p-2.5"
                    to="/cart">
            In cart
          </NuxtLink>
          <Button v-else
                  @click="() => cartStore.addToCart(product)"
                  class="mt-2 w-full">
            Buy
          </Button>
        </div>
      </div>
    </div>
  </article>
</template>
