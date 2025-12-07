export const useCartStore = defineStore('cartStore', () => {
    const cartItems = ref([]);
    const getCartItemsCount = computed(()=> {
        const count = cartItems.value.reduce((acc, it) => {
            return it.amount + acc
        },0)

        return count > 99 ? 99 : count;
    })

    const isInCart = computed(() => (productId) => {
        return cartItems.value.find((product) => {
            return product.id === productId;
        });
    });

    const totalPrice = computed(() => {
        return cartItems.value.reduce((total, item) => {
            return total + (item.regular_price.value * item.amount)
        }, 0);
    });

    const totalItemPrice = computed(() => {
        return (product) => {
            return product.regular_price.value * product.amount;
        }
    })

    function addToCart(product) {
        cartItems.value.push({
            amount: 1,
            ...product
        });
    }

    function setAmount(productId, value) {
        const newAmount = parseInt(value) || 1
        const item = cartItems.value.find(item => item.id === productId)
        if (item && newAmount > 0) {
            item.amount = newAmount
        }
    }

    function removeItem(productId) {
        const index = cartItems.value.findIndex(it => it.id === productId)
        if (index !== -1) {
            cartItems.value.splice(index, 1)
        }
    }

    function clearCart() {
        cartItems.value = [];
    }


    return {
        // State
        cartItems: readonly(cartItems),

        // Getters
        getCartItemsCount,
        totalPrice,
        totalItemPrice,
        isInCart,

        // Actions
        addToCart,
        clearCart,
        setAmount,
        removeItem
    }
})
