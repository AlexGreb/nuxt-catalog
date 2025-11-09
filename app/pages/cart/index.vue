<script setup>
  const cartStore = useCartStore();
  const productStore = useProductStore();
</script>

<template>
  <article>
    <h1 class="text-3xl mb-5">Shopping cart</h1>
    <div v-if="cartStore.getCartItemsCount" class="grid gap-4">
      <div class="grid p-5 items-start sm:items-center gap-x-4 grid-cols-[100px__1fr] md:grid-cols-[150px__1fr] bg-[#f2f2f2]"
           v-for="product in cartStore.cartItems">
        <div>
            <NuxtImg :src="product.image"
                     :alt="product.title"/>
        </div>
        <div class="grid sm:items-center sm:grid-cols-[2fr__1fr__50px__100px__25px] md:grid-cols-[2fr__1fr__80px__150px__25px] gap-y-1 gap-x-4">
          <div class="break-all col-[1/3] sm:col-[1/2]">
            <div class="text-2xl">{{product.title}}</div>
            <div class="text-md mt-1">{{product.brand.title}}</div>
          </div>

          <div v-if="product.regular_price.value"
               class="text-lg break-all font-bold hidden sm:block sm:col-[2/3]">
            {{formatPrice(product.regular_price.value, productStore.currentCurrency)}}
          </div>
          <div class="col-[1/2] sm:col-[3/4]">
            <input class="sm:w-full w-[60px] p-2.5"
                   :value="product.amount"
                   name="amount"
                   @input="cartStore.setAmount(product.id, $event.target.value)"
                   min="1"
                   type="number">
          </div>
          <div class="break-all sm:text-right font-bold text-lg col-[1/3] row-[2] sm:row-[1] sm:col-[4/5]">
            {{formatPrice(cartStore.totalItemPrice(product), productStore.currentCurrency)}}
          </div>
          <div class="col-[2/3] sm:col-[5/6] self-center justify-self-end">
            <button type="button" class="box-border text-black">
              <SvgoIcon @click="cartStore.removeItem(product.id)"
                        name="icon:remove"
                        width="25"
                        height="25"
                        fill="currentColor" />
            </button>
          </div>
        </div>

      </div>
      <div class="text-right text-2xl">
        Total: <span class="font-bold">
        {{formatPrice(cartStore.totalPrice, productStore.currentCurrency)}}
      </span>
      </div>
      <div class="flex justify-end mt-2">
        <Button @click="cartStore.clearCart()">
          Checkout
        </Button>
      </div>
    </div>
    <div v-else
        class="grid justify-center">
      <div class="text-xl">Cart is empty</div>
      <NuxtLink to="/" class="mt-2 bg-black w-full text-center text-md text-white p-2.5">
        To shopping
      </NuxtLink>
    </div>
  </article>
</template>
