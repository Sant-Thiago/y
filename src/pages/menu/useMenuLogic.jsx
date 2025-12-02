// useMenuLogic.js
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { companies } from "../../data/Companies";

export default function useMenuLogic(data, itens, infoWines) {
    const navigate = useNavigate();

    const navRef = useRef(null);
    
    const dishRef = useRef([]);
    const wineRef = useRef([])
    
    const sectionDishesRefs = useRef([]);
    const sectionWinesRefs = useRef([]);
    
    const originalNavTopRef = useRef(null);
    const isFixedRef = useRef(false);

    const [filterOpen, setFilterOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [linkProcessed, setLinkProcessed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const [navPosition, setNavPosition] = useState(null);
    
    const [selected, setSelected] = useState(0);
    const [selectedDish, setSelectedDish] = useState(null);
    const [selectedWine, setSelectedWine] = useState(null);
    const [showWineMenu, setShowWineMenu] = useState(false);

    const [searchParams] = useSearchParams();
    const itemParam = searchParams.get("item");
    const wineParam = searchParams.get("wine");

    const ulRef = useRef(null);
    const liRefs = useRef([]);
    liRefs.current = [];

    const [currentFilters, setCurrentFilters] = useState({
        text: "",
        countries: [],
        types: [],
        grapes: [],
        volumes: [],
        priceRange: [0, Math.max(...infoWines.flatMap(group => group.wines.map(w => w.price)))]
    });

    const [filteredWines, setFilteredWines] = useState(infoWines);

    const handleFilter = (filters) => {
        setCurrentFilters(filters);
        const { text, countries, types, grapes, volumes, priceRange } = filters;
        const [minPrice, maxPrice] = priceRange;

        const filtered = infoWines.map(group => {
            const winesFiltered = group.wines.filter(wine => {
                const matchText =
                    !text ||
                    wine.name.toLowerCase().includes(text.toLowerCase()) ||
                    wine.description.toLowerCase().includes(text.toLowerCase());

                const matchCountry =
                    countries.length === 0 || countries.includes(wine.country.name);

                const matchType =
                    types.length === 0 || types.includes(wine.type.name);

                const matchGrape =
                    grapes.length === 0 ||
                    grapes.some(g =>
                    wine.grape.toLowerCase().includes(g.toLowerCase())
                    );

                const matchVolume =
                    volumes.length === 0 || volumes.includes(wine.volume);

                const matchPrice = wine.price >= minPrice && wine.price <= maxPrice;

                return (
                    matchText &&
                    matchCountry &&
                    matchType &&
                    matchGrape &&
                    matchVolume &&
                    matchPrice
                );
            });

            return { ...group, wines: winesFiltered };
        }).filter(group => group.wines.length > 0);

        setFilteredWines(filtered);
        setFilterOpen(false); // fecha o modal
    };

    const handleCloseModal = () => {
        setSelectedDish(null);
        setSelectedWine(null);

        // Remove o parâmetro dish da URL sem recarregar a página
        const params = new URLSearchParams(searchParams);
        params.delete("item");
        navigate({ search: params.toString() }, { replace: true });
    };

    // Move para a categoria clicada
    const handleClick = (index) => {
        const element = sectionDishesRefs.current[index];
        const offset = -100;
        
        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top, index);
    };

    const handleClickWine = (index) => {
        const element = sectionWinesRefs.current[index];        
        const offset = -140;

        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top, index);
    }

    const scrollOnItem = (element, top, index) => {
        if (!element) return;

        setSelected(index);
        setIsClicking(true);

        window.scrollTo({
            top,
            behavior: "smooth"
        })

        setTimeout(() => setIsClicking(false), 500);
    }

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;
        setNavPosition(nav.getBoundingClientRect().top + window.scrollY);
    }, []);

    const linkHandler = (param, infos, ref, types, offset, functionSelected, functionOptional) => {
        if (!param) return;

        if (functionOptional) functionOptional(true);
        
        // Achar o prato com base no ID da URL
        console.log();
        
        const found = infos.flatMap(cat => cat[types]).find(d => d.id == param);
        if (!found) return
            
        // Rolar até a categoria do prato
        if (ref.current[param]) {
            const el = ref.current[param];
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            setTimeout(() => {
                window.scrollTo({ top, behavior: "smooth" });
            }, 300);
        }

            // Esperar rolar e abrir o modal
        setTimeout(() => {
            functionSelected(found)
            setLinkProcessed(true);
        }, 600);
    }

    // Processa o link do item
    useEffect(() => {
        if (linkProcessed) return;
        
        linkHandler(
            itemParam,
            itens, 
            dishRef,
            "itens",
            320,
            setSelectedDish
        );

        linkHandler(
            wineParam,
            infoWines,
            wineRef,
            "wines",
            200,
            setSelectedWine,
            setShowWineMenu
        )
        
    }, [itemParam, wineParam, itens, infoWines]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        setTimeout(() => {
            originalNavTopRef.current = nav.getBoundingClientRect().top + window.scrollY;
            setNavHeight(nav.offsetHeight);
        }, 100);
    }, [showWineMenu]);

    // Move para a categoria que o scroll está
    useEffect(() => {
        const nav = navRef.current;
        
        if (!nav) return;       
        
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navTop = nav.getBoundingClientRect().top + window.scrollY;

            // só recalcula quando não está fixo
            if (!isFixedRef.current && Math.abs(navTop - (originalNavTopRef.current || 0)) > 5) {
                originalNavTopRef.current = navTop;
            }

            const shouldBeFixed = scrollY >= (originalNavTopRef.current || 0);
            if (shouldBeFixed !== isFixedRef.current) {
                isFixedRef.current = shouldBeFixed;
                setIsFixed(shouldBeFixed);
            }

            if (isClicking) return;

            const refs = showWineMenu ? sectionWinesRefs.current : sectionDishesRefs.current;
            refs.forEach((section, idx) => {
                if (!section) return;
                const offset = -150;
                const top = section.getBoundingClientRect().top + window.scrollY + offset;
                const bottom = top + section.offsetHeight;
                if (window.scrollY >= top && window.scrollY < bottom) setSelected(idx);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClicking, showWineMenu]);

    // 👉 Quando troca o menu, sobe até o nav
    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        setTimeout(() => {
            
            if (window.scrollY > navPosition + 10) {
                window.scrollTo({
                    top: Math.max(0, navPosition - 60), // ajusta -60 se quiser mostrar um espacinho
                    behavior: "smooth"
                });
            }
        }, 200);
    }, [showWineMenu]);

    // Move para o item do link
    useEffect(() => {
        if (!ulRef.current || !liRefs.current[selected]) return;
        
        const item = liRefs.current[selected];

        item.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    }, [selected])

    return {
        data,
        itens,
        selected,
        setSelected,
        showWineMenu,
        setShowWineMenu,
        selectedDish,
        setSelectedDish,
        selectedWine,
        setSelectedWine,
        filterOpen,
        setFilterOpen,
        handleFilter,
        handleClick,
        handleClickWine,
        handleCloseModal,
        navHeight,
        isFixed,
        currentFilters,
        filteredWines,
        liRefs,
        dishRef,
        wineRef,
        sectionDishesRefs,
        sectionWinesRefs, 
        navRef,
    };
}
