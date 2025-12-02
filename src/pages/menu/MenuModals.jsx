import DishModal from "../../components/modals/dish_modal/DishModal";
import FilterModal from "../../components/modals/filter_modal/FilterModal";
import WineModal from "../../components/modals/wine_modal/WineModal";

export default function MenuModals({
    selectedDish,
    selectedWine,
    filterOpen,
    handleCloseModal,
    handleFilter,
    currentFilters,
    infoWines
}) {
    return (
        <>
            {selectedDish && <DishModal info={selectedDish} onClose={handleCloseModal} />}
            {selectedWine && <WineModal {...selectedWine} onClose={handleCloseModal} />}
            {filterOpen && 
                <FilterModal 
                    countries={[
                        ...new Map(
                        infoWines
                            .flatMap(group => group.wines)
                            .map(wine => [wine.country.code, wine.country])
                        ).values()
                    ].sort((a, b) => a.name.localeCompare(b.name))}

                    types={[
                        ...new Map(
                        infoWines
                            .flatMap(group => group.wines)
                            .map(wine => [wine.type.name, wine.type])
                        ).values()
                    ].sort((a, b) => a.name.localeCompare(b.name))}

                    grapes={[
                        ...new Set(
                            infoWines
                            .flatMap(group => group.wines)
                            .flatMap(wine =>
                                wine.grape
                                .replace(/ e /gi, ",")     // troca " e " por vírgula
                                .split(",")                // separa por vírgula
                                .map(g => g.trim())        // remove espaços
                                .filter(g => g.length > 0) // remove strings vazias
                            )
                        )
                    ].sort((a, b) => a.localeCompare(b))}


                    volumes={[
                        ...new Set(
                        infoWines
                            .flatMap(group => group.wines)
                            .map(wine => wine.volume.trim())
                        )
                    ].sort((a, b) => a.localeCompare(b))}

                    maxPrice={Math.max(...infoWines.flatMap(group => group.wines.map(w => w.price)))

                    }

                    initialFilters={currentFilters}
                    onFilter={handleFilter}
                    onClose={() => setFilterOpen(false)}
                />
            }
        </>
    );
}
