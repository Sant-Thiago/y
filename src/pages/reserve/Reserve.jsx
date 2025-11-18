import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Reserve.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Select from "../../components/select/Select";
import { IoCalendarNumberOutline, IoPersonAdd, IoPersonAddOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FiEdit2 } from "react-icons/fi";
import Toast from "../../components/toast/Toast";
import { useToast } from "../../hooks/useModalUtils";
import InputText from "../../components/input/InputText";
import { BsPhone } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";

export default function Reserve({ name = "empresaX" }) {

    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();

    function validate() {
        let errorMessage;

        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmailValue)) {
            errorMessage = "Email inválido.";
        }
        
        // Nome
        if (!inputNameValue.trim() || inputNameValue.trim().split(" ").length < 2) {
            errorMessage = "Informe nome e sobrenome.";
        }
        
        // Telefone brasileiro
        const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;
        if (!phoneRegex.test(inputNumberValue)) {
            errorMessage = "Número de telefone inválido.";
        }

        return errorMessage;
    }

    function generateReservationDays() {
        const days = [];
        const today = new Date();
        const endDate = new Date();
        endDate.setMonth(today.getMonth() + 2);

        const options = { day: "2-digit", month: "long", year: "numeric", weekday: "long" };

        let currentDate = new Date(today);

        while (currentDate <= endDate) {
            const formattedDate = currentDate.toLocaleDateString("pt-BR", options); // "28 January 2026, Wednesday"
            days.push(formattedDate);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return days;
    }

    function generatePartySizes() {
        const sizes = [];
        for (let i = 1; i <= 20; i++) {
            sizes.push(`${i.toString()} pessoa${i > 1 ? "s" : ""}`);
        }
        return sizes;
    }

    function generateHourlyOptions() {
        const options = [];
        for (let hour = 14; hour < 22; hour++) {
            options.push(`${hour}:00`);
            options.push(`${hour}:30`);
        }
        return options;
    }

    const [selectedCity, setSelectedCity] = useState("");
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [step, setStep] = useState(1);

    const reservationDays = generateReservationDays();
    const partySizes = generatePartySizes();
    const hourlyOptions = generateHourlyOptions();

    const [selectedReservationDay, setSelectedReservationDay] = useState(null);
    const [selectedPartySize, setSelectedPartySize] = useState(null);
    const [selectedHourly, setSelectedHourly] = useState(null);

    const [inputOptionalValue, setInputOptionalValue] = useState("");
    const [inputNumberValue, setInputNumberValue] = useState("");
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputEmailValue, setInputEmailValue] = useState("");

    const [openSelectReservationDay, setOpenSelectReservationDay] = useState(false);
    const [openSelectPartySize, setOpenSelectPartySize] = useState(false);
    const [openSelectHourly, setOpenSelectHourly] = useState(false);

    const locations = [
        {
            name: `${name} - Shopping Estação BH`,
            city: "Belo Horizonte",
            state: "MG",
        },
        {
            name: `${name} Águas Claras`,
            city: "Brasília",
            state: "DF",
        },
        {
            name: `${name} Alphaville`,
            city: "Barueri",
            state: "SP",
        },
        {
            name: `${name} Amazonas`,
            city: "Manaus",
            state: "AM",
        },
    ];

    // Gera lista única e ordena por UF (abreviação do estado)
    const locationsSorted = locations
    .sort((a, b) => a.state.localeCompare(b.state)
    );

  const filtered =
    selectedCity === ""
      ? locations
      : locations.filter((l) => l.state === selectedCity);

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
        nextStep();
    }

    const handleBackClick = () => {
        // setSelectedLocation(null);
        prevStep();
    }

    const handleNextClick = () => {
        if (!selectedReservationDay || !selectedPartySize || !selectedHourly) {
            showToast("Por favor, preencha os campos antes de continuar");
            return;
        }
        nextStep();
    }

    const handleReserveClick = () => {
        const errorMessage = validate();
        if (errorMessage) {
            showToast("Por favor, corrija os erros antes de continuar " + errorMessage, 3000);
        } else {
            showToast("Reserva realizada com sucesso!", 3000);
        }
    }

    const nextStep = () => {
        setStep(prev => prev + 1);
    }

    const prevStep = () => {
        setStep(prev => prev - 1);
    }

  return (
    <>
        <Navbar 
            hideAfterScroll={true}
        />
        <main className={styles.container}>
            <div className={styles.wrapperImage}>
                <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200"
                alt="Restaurant"
                className={styles.image}
                />
            </div>

            {step == 1 ? (
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Qual unidade da {name} você prefere?
                    </h2>

                    {/* Select */}
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                        >
                            <option value="">Selecione a cidade</option>
                            {locationsSorted.map((loc, idx) => (
                                <option key={idx} value={loc.state}>
                                    {loc.city} - {loc.state}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Locations */}
                    <div className={styles.locations}>
                    {filtered.map((loc, i) => (
                        <div 
                            key={i} 
                            className={styles.locationItem}
                            onClick={() => handleSelectLocation(loc)}
                        >
                            <FaMapMarkerAlt className={styles.icon} />
                            <div>
                                <div className={styles.locationName}>{loc.name}</div>
                                <div className={styles.locationCity}>
                                    {loc.city} • {loc.state}
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            ) : (
                <div className={styles.contentReserve}>
                    <div 
                        className={styles.buttonBack}
                        onClick={handleBackClick}
                    >
                        <IoIosArrowBack /> 
                        <p>voltar</p>
                    </div>
                    <div className={styles.titleAndCity}>
                        <h2 className={styles.title}>
                            {selectedLocation.name}
                        </h2>
                        <p className={styles.city}>{selectedLocation.city} <span>-</span> {selectedLocation.state}</p>
                    </div>

                    {step === 2 ? (
                        <div className={styles.wrapperOption}>
                            <Select
                                options={reservationDays}
                                selectedOption={selectedReservationDay}
                                setSelectedOption={setSelectedReservationDay}
                                openSelect={openSelectReservationDay}
                                setOpenSelect={setOpenSelectReservationDay}
                                text="Dia de reserva"
                                placeholder="Selecione o dia"
                                icon={<IoCalendarNumberOutline />}
                            />      
                            
                            <Select
                                options={partySizes}
                                selectedOption={selectedPartySize}
                                setSelectedOption={setSelectedPartySize}
                                openSelect={openSelectPartySize}
                                setOpenSelect={setOpenSelectPartySize}
                                text="Tamanho da festa"
                                placeholder="Selecione o tamanho"
                                icon={<IoPersonAddOutline />}
                            />
    
                            <Select 
                                options={hourlyOptions}
                                selectedOption={selectedHourly}
                                setSelectedOption={setSelectedHourly}
                                openSelect={openSelectHourly}
                                setOpenSelect={setOpenSelectHourly}
                                text="Horario"
                                placeholder="Selecione o horário"
                                icon={<RxCounterClockwiseClock />}
                            />
                            <InputText
                                label="Você precisa de algo especial?"
                                type="text"
                                value={inputOptionalValue}
                                onChange={(e) => setInputOptionalValue(e.target.value)}
                                placeholder="Ex: Aniversário, Ocasiões especiais, etc."
                                icon={<FiEdit2 />}
                                isOptional={true}
                            />
                        </div>
                        
                    ) : (
                        <div className={styles.contentInputs}>
                            <InputText
                                label="Número de Telefone"
                                value={inputNumberValue}
                                onChange={(e) => setInputNumberValue(e.target.value)}
                                placeholder="(00) 12345-6789"
                                icon={<BsPhone />}
                            />
                            <InputText
                                label="Nome e sobrenome"
                                value={inputNameValue}
                                onChange={(e) => setInputNameValue(e.target.value)}
                                placeholder="Ex: Henrique Freitas"
                                icon={<IoPersonOutline />}
                            />
                            <InputText
                                label="Email"
                                value={inputEmailValue}
                                onChange={(e) => setInputEmailValue(e.target.value)}
                                placeholder="Ex: henriquefreitas@gmail.com"
                                icon={<VscMail />}
                            />
                        </div>
                        
                    )}
                    <button 
                            className={styles.buttonNext}
                            onClick={step == 2 ? handleNextClick : handleReserveClick}
                        >
                            {step === 2 ? "Próximo" : "Reservar"}
                    </button>
                    </div>
            )}
            <Toast 
                message={toastMsg}
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
            />
        </main>
        <Footer />
    </>
  );
}
