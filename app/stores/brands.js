export const useBrandsStore = defineStore('brandsStore', () => {
    const config = useRuntimeConfig();

    // State
    const brands = ref([]);
    const selectedBrandsId = ref(new Set());

    // Actions
    async function fetchBrands() {
        const res = await useFetch(`${config.public.apiHost}/brands`);
        brands.value = res.data.value;
    }

    function toggleSelectedBrand(brandId) {
        const newSet = new Set(selectedBrandsId.value)
        if (newSet.has(brandId)) {
            newSet.delete(brandId)
        } else {
            newSet.add(brandId)
        }
        selectedBrandsId.value = newSet
    }

    function resetSelectedBrands() {
        selectedBrandsId.value.clear()
    }


    return {
        // State
        brands: readonly(brands),
        selectedBrandsId: readonly(selectedBrandsId),

        // Actions
        fetchBrands,
        toggleSelectedBrand,
        resetSelectedBrands
    }
})
