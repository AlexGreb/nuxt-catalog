import {useBrandsStore} from "./brands.js";

export const useProductStore = defineStore('productStore', () => {
    const config = useRuntimeConfig();
    const brandsStore = useBrandsStore();

    // State
    const products = ref([]);
    const currentCurrency = ref('USD');

    // Getters
    const getProductsWithBrands = computed(() => {
        const brandMap = new Map(brandsStore.brands.map(brand => [brand.id, brand]));

        return products.value.map(product => ({
            ...product,
            brand: product.brand != null ? brandMap.get(product.brand) : null
        }))
    });


    const getProductsByBrand = computed(() => {
        if (brandsStore.selectedBrandsId.size === 0) {
            return getProductsWithBrands.value
        }
        return getProductsWithBrands.value.filter(product =>
            product.brand && brandsStore.selectedBrandsId.has(product.brand.id)
        )
    });


    // Actions
    async function fetchProducts() {
        try {
            const res = await useFetch(`${config.public.apiHost}/products`);
            products.value = res.data.value;
        } catch (e) {
            throw new Error(e.message || e);
        }

    }

    return {
        // State
        products: readonly(products),
        currentCurrency: readonly(currentCurrency),

        // Getters
        getProductsWithBrands,
        getProductsByBrand,

        // Actions
        fetchProducts
    }
})
