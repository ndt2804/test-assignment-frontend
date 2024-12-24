import React, { useState, useEffect } from 'react';

const ModalContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: 'us',
        company: '',
        support: '',
        message: '',
    });
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    useEffect(() => {
        if (window.location.hash === '#contact-us') {
            setIsOpen(true);
        }
    }, []);

    const openModal = () => {
        setIsOpen(true);
        window.history.pushState({}, '', '#contact-us');
    };

    const closeModal = () => {
        setIsOpen(false);
        window.history.pushState({}, '', '/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    country: 'us',
                    company: '',
                    support: '',
                    message: '',
                });
                setIsPrivacyChecked(false);
                closeModal();
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    const validateField = (e) => {
        const { name, value } = e.target;
        if (!value) {
            e.target.setCustomValidity('Please fill out this field.');
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            e.target.setCustomValidity('Please enter an email address.');
        } else {
            e.target.setCustomValidity('');
        }
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="ml-24 cursor-pointer transition-all bg-red-500 text-white px-6 py-2 border-red-600 hover:brightness-110 hover:translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
                Get in touch
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg w-full max-w-5xl flex overflow-hidden">
                        <div className="hidden md:block w-1/2 bg-gradient-to-b from-purple-900 to-blue-600 p-12 relative">
                            <div className="h-full flex flex-col justify-center text-white">
                                <h2 className="text-4xl font-bold mb-4">Let's create something great together</h2>
                                <p className="text-xl opacity-90">Our team will contact you soon.</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-400/20 to-transparent"></div>
                        </div>
                        <div className="flex-1 p-12 relative">
                            <button onClick={closeModal}
                                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18.36 5.64a1.5 1.5 0 00-2.12 0L12 9.88 7.76 5.64a1.5 1.5 0 00-2.12 2.12L9.88 12l-4.24 4.24a1.5 1.5 0 002.12 2.12L12 14.12l4.24 4.24a1.5 1.5 0 002.12-2.12L14.12 12l4.24-4.24a1.5 1.5 0 000-2.12z" />
                                </svg>
                            </button>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-semibold text-gray-900">Contact details</h3>

                                    <div className="space-y-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder=" "
                                                className="peer block w-full py-4 pl-4 pr-6 text-lg text-black rounded-md bg-gray-100 border-gray-300 placeholder-transparent focus:border-purple-500 focus:ring-purple-500"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                onInvalid={validateField}
                                                onInput={validateField}
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className={`absolute left-4 text-lg text-gray-500 transition-all
                                                 ${formData.name ? 'top-[-2px] text-sm text-purple-500' : 'top-4 text-lg text-gray-500'}`}
                                            >
                                                Name <span className="text-red-500">*</span>
                                            </label>

                                        </div>

                                        <div className="flex space-x-4">
                                            <div className="relative flex-1">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder=" "
                                                    className="peer block w-full py-4 pl-4 pr-6 text-lg text-black rounded-md bg-gray-100 border-gray-300 placeholder-transparent focus:border-purple-500 focus:ring-purple-500"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    onInvalid={validateField}
                                                    onInput={validateField}
                                                    required
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className={`absolute left-4 top-4 text-lg text-gray-500 transition-all 
                                                     ${formData.email ? 'top-[-2px] text-sm text-purple-500' : 'top-4 text-lg text-gray-500'}`}
                                                >
                                                    E-mail address <span className="text-red-500">*</span>
                                                </label>
                                            </div>
                                            <div className="relative w-1/3">
                                                <select
                                                    className="peer block w-full py-4 pl-4 pr-6 text-lg text-black rounded-md bg-gray-100 border-gray-300 placeholder-transparent focus:border-purple-500 focus:ring-purple-500"
                                                    value={formData.country}
                                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                    required
                                                >
                                                    <option value="us">🇺🇸 US</option>
                                                    <option value="uk">🇬🇧 UK</option>
                                                    <option value="ca">🇨🇦 CA</option>
                                                    <option value="au">🇦🇺 AU</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                placeholder=" "
                                                className="peer block w-full py-4 pl-4 pr-6 text-lg text-black rounded-md bg-gray-100 border-gray-300 placeholder-transparent focus:border-purple-500 focus:ring-purple-500"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                onInvalid={validateField}
                                                onInput={validateField}
                                                required
                                            />
                                            <label
                                                htmlFor="company"
                                                className={`absolute left-4 top-4 text-lg text-gray-500 transition-all 
                                                 ${formData.company ? 'top-[-2px] text-sm text-purple-500' : 'top-4 text-lg text-gray-500'}`}
                                            >
                                                Company Name <span className="text-red-500">*</span>
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <select
                                                id="support"
                                                name="support"
                                                className="peer block w-full py-4 pl-4 pr-6 text-lg text-black rounded-md bg-gray-100 border-gray-300 placeholder-transparent focus:border-purple-500 focus:ring-purple-500"
                                                value={formData.support}
                                                onChange={(e) => setFormData({ ...formData, support: e.target.value })}
                                                required
                                            >
                                                <option value="">Choose support</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="sales">Sales Inquiry</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <label
                                                htmlFor="support"
                                                className={`absolute left-4 top-4 text-lg text-gray-500 transition-all 
                                                 ${formData.support ? 'top-[-2px] text-sm text-purple-500' : 'top-4 text-lg text-gray-500'}`}
                                            >
                                                Support <span className="text-red-500">*</span>
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder=" "
                                                className="peer block w-full py-4 pl-4 pr-6 text-lg text-black rounded-md bg-gray-100 border-gray-300 placeholder-transparent focus:border-purple-500 focus:ring-purple-500"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                            <label
                                                htmlFor="message"
                                                className={`absolute left-4 top-4 text-lg text-gray-500 transition-all 
                                                 ${formData.message ? 'top-[-2px] text-sm text-purple-500' : 'top-4 text-lg text-gray-500'}`}
                                            >
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-start">
                                                <input
                                                    type="checkbox"
                                                    id="privacyAgreement"
                                                    name="privacyAgreement"
                                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                                    checked={isPrivacyChecked}
                                                    onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                                                    required
                                                />
                                                <label htmlFor="privacyAgreement" className="ml-2 text-sm text-gray-600">
                                                    I agree to share my information with NashTech as per the
                                                    <a href="#" className="text-purple-600 hover:text-purple-800 ml-1">privacy policy</a>
                                                    <span className="text-red-500">*</span>
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className={`py-3 px-8 rounded-md transition-colors text-lg ${isPrivacyChecked ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
                                                disabled={!isPrivacyChecked}
                                            >
                                                Submit
                                            </button>
                                        </div>

                                        <p className="text-sm text-gray-600 mt-4 text-center">
                                            This site is protected by reCAPTCHA and the Google
                                            <a href="#" className="text-purple-600 hover:text-purple-800 ml-1">Privacy Policy</a>
                                            and
                                            <a href="#" className="text-purple-600 hover:text-purple-800 ml-1">Terms of Service</a>
                                            apply.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalContact;