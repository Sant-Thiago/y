import { useState, useEffect, useRef } from "react";

export function useToast() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1500);
  };

  return { toastVisible, toastMsg, showToast, setToastVisible };
}

export function useModalHandlers(onClose) {
  const modalRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [closeByDrag, setCloseByDrag] = useState(false);

  const closeModal = () => {
    setTransitionEnabled(true);
    setTranslateY(modalHeight);
    setClosing(true);
    setTimeout(() => onClose?.(), 600);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
  };

  const handleMouseDown = (e) => {
    const target = e.target.tagName.toLowerCase();
    if (["input", "button", "select", "textarea", "label"].includes(target)) return;
    
    e.preventDefault();
    const startY = e.clientY;

    const handleMouseMove = (e) => {
      const diff = e.clientY - startY;
      setTranslateY(diff > 0 ? diff : 0);
    };

    const handleMouseUp = (e) => {
      const diff = e.clientY - startY;
      if (diff > modalHeight * 0.3) {
        setCloseByDrag(true);
        closeModal();
      } else {
        setTranslateY(0);
        setCloseByDrag(false);
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleAnimationEnd = () => setAnimationDone(true);

  useEffect(() => {
    setVisible(true);
    if (modalRef.current) setModalHeight(modalRef.current.offsetHeight);

    document.addEventListener("mousedown", handleClickOutside);

    const originalStyle = {
      body: window.getComputedStyle(document.body).overflow,
      html: window.getComputedStyle(document.documentElement).overflow,
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle.body;
      document.documentElement.style.overflow = originalStyle.html;
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [translateY]);

  return {
    modalRef,
    translateY,
    transitionEnabled,
    visible,
    closing,
    animationDone,
    closeByDrag,
    handleMouseDown,
    handleAnimationEnd,
    closeModal,
  };
}

export async function handleShare({ id, name, description, showToast }) {
  const url = `${window.location.origin}/cardapio?item=${id}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: name, text: description, url });
      showToast("Link compartilhado com sucesso!");
    } catch {}
  } else {
    try {
      await navigator.clipboard.writeText(url);
      showToast("Link copiado para a área de transferência!");
    } catch {
      showToast("Erro ao copiar link.");
    }
  }
}
