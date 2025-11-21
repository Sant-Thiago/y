import emailjs from "@emailjs/browser";

export async function emailService({name, email, phone, message, subject}) {

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        subject: subject,
    };
    
    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        return { success: true, response };
    } catch (error) {
        return { success: false, error };
    }
}
