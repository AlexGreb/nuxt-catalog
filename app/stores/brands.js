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

    // TODO вынести работу со строками
    function toggleSelectedBrand (brandId) {
        const brandIdsString = route.query.brand ?? '';
        const brandIdsArray = brandIdsString.length ? brandIdsString.split(',') : [];
        const brandIdsNumbArray = brandIdsArray.map(Number);
        const querySet = new Set(brandIdsNumbArray);
        querySet[querySet.has(brandId) ? 'delete' : 'add'](brandId);
        router.push({
            query: {
                ...route.query,
                brand: Array.from(querySet).map(Number).join(','),
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

    // TODO вынести работу с query в composable
   //  сделать сортировку
   //  вынести работу со строками
   function setBrandFilterByQuery() {
        const queryBrandString = route.query.brand ?? '';
        const queryBrandArray = queryBrandString.length ? queryBrandString.split(',') : [];
        const queryBrandArrayNumb = queryBrandArray.map(Number);
        setSelectedBrands(queryBrandArrayNumb);
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
