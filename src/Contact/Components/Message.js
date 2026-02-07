/**
 * @file Message.js
 * @description Contact form component that collects visitor information and
 * sends it to the backend API. Includes phone formatting, loading states,
 * and SweetAlert2 success/error feedback.
 */

import React, { useState, useRef } from "react";
import cssMessage from "./CSS/message.module.css";
import Swal from "sweetalert2";
import { api } from "../../Aux/trackingIDs";
import { BUSINESS_EMAIL } from "../../Aux/businessInfo";

/**
 * @description Formats a raw phone string into (XXX) XXX-XXXX when it
 * contains exactly 10 digits and doesn't already match that pattern.
 * @param {string} value - Current input value.
 * @returns {string} Formatted or original value.
 */
const formatPhone = (value) => {
    const stripped = value.replace(/[A-Za-z]/gi, "");
    const digits = stripped.replace(/\D/g, "");
    if (digits.length === 10 && !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(stripped)) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return stripped;
};

/**
 * @description Shows a SweetAlert2 error dialog with a fallback email address.
 */
const fireError = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong. You can still email us at ${BUSINESS_EMAIL}.`,
    });
};

const INITIAL_STATE = { name: "", email: "", phone: "", message: "", subject: "" };

/**
 * @component Message
 * @description Contact form that collects a visitor's name, email, phone,
 * subject, and message, then POSTs the data to the backend API via the
 * browser's native fetch. Displays a success or error alert based on
 * the response.
 * @returns {JSX.Element} The rendered contact form.
 */
const Message = () => {
    const [fields, setFields] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(false);
    const abortRef = useRef(null);

    /**
     * @description Updates form state on every input change. Applies phone
     * formatting when the phone field is edited.
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
     */
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFields((prev) => ({
            ...prev,
            [name]: name === "phone" ? formatPhone(value) : value,
        }));
    };

    /**
     * @description Submits the contact form to the backend using fetch.
     * Prevents duplicate submissions while a request is in flight and
     * cancels the request if the component unmounts.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        abortRef.current = new AbortController();

        try {
            const response = await fetch(`${api}/personaldata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                signal: abortRef.current.signal,
                body: JSON.stringify({
                    name: fields.name,
                    email: fields.email,
                    phone: fields.phone,
                    message: fields.message,
                    subject: fields.subject || "New Email for Beds 4 Less",
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Hurray!",
                    text: "Your Email has been sent!",
                });
            } else {
                fireError();
            }
        } catch (err) {
            if (err.name !== "AbortError") fireError();
        } finally {
            setLoading(false);
            setFields(INITIAL_STATE);
        }
    };

    return (
        <form className={cssMessage.messageGrid} onChange={onChangeHandler} onSubmit={onSubmitHandler}>
            <div>
                <div className={cssMessage.header}>Message</div>
                <div className={cssMessage.intro}>
                    Send us a brief message and our staff will respond to you within two business days.
                </div>
                <input className={cssMessage.shortForm} type="text" name="name" placeholder="Full Name" value={fields.name} required /> <br />
                <input className={cssMessage.shortForm} type="email" name="email" placeholder="Email" value={fields.email} required /> <br />
                <input className={cssMessage.shortForm} type="tel" maxLength="14" name="phone" placeholder="Phone" value={fields.phone} /> <br />
                {loading ? (
                    <div className={cssMessage.sendingContainer}>
                        Sending
                        <span className={cssMessage.sending1}>.</span>
                        <span className={cssMessage.sending2}>.</span>
                        <span className={cssMessage.sending3}>.</span>
                    </div>
                ) : (
                    <input className={cssMessage.shortForm} type="text" maxLength="50" name="subject" placeholder="Subject" value={fields.subject} />
                )}
            </div>
            <div>
                <textarea className={cssMessage.messageForm} type="text" name="message" placeholder="Message" value={fields.message} required />
                <button type="submit" className={cssMessage.submit}>SUBMIT</button>
            </div>
        </form>
    );
};

export default Message;
