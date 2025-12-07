export const useBrandsStore = defineStore('brandsStore', () => {
    const config = useRuntimeConfig();
    const router = useRouter();
    const route = useRoute();

    // State
    const brands = ref(null);
    const selectedBrandsId = ref(new Set());

    // Actions
    async function fetchBrands() {
        const res = await useFetch(`${config.public.apiHost}/brands`);
        brands.value = res.data.value;
    }

    function toggleSelectedBrand (brandId) {
        const querySet = new Set(route.query.brand ? route.query.brand.split(','): []);
        querySet[querySet.has(brandId) ? 'delete' : 'add'](brandId);
        router.push({
            query: {
                ...route.query,
                brand: Array.from(querySet).join(','),
            },
        });
    }

    function resetSelectedBrands() {
        selectedBrandsId.value.clear()
    }

    function setSelectedBrands(brandIds) {
        selectedBrandsId.value = new Set(brandIds);
    }

    function getBrandsByIds(brandIds) {
        const brandsSet = new Set(brandIds);
        return brands.value.filter((it) => {
            return brandsSet.has(it.id);
        })
    }

    function setBrandFilterByQuery() {
        const queryBrand = route.query.brand;
        let newBrandIds = [];
        if(queryBrand?.length) {
            newBrandIds = queryBrand.split(',');
        }
        setSelectedBrands(newBrandIds);
    }

    return {
        // State
        brands: readonly(brands),
        selectedBrandsId: readonly(selectedBrandsId),

        // Actions
        fetchBrands,
        toggleSelectedBrand,
        resetSelectedBrands,
        setSelectedBrands,
        getBrandsByIds,
        setBrandFilterByQuery
    }
})
