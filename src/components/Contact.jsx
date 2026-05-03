import { useState } from "react"

export const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "", 
        phone: "",
        message: "",
        company: "",
    });

    const [status, setStatus] = useState("idle")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("loading");

        try {
            const res = await fetch(
                import.meta.env.PROD 
                    ? "/api/contact" 
                    : "http://localhost:8787/api/contact",
                {
                    method: "POST", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(formData),
                }
            );

            if (!res.ok) throw new Error("Request failed");

            setStatus("success");
            setFormData({
                first_name: "", 
                last_name: "", 
                email: "", 
                phone: "", 
                message: "",
                company: "",
            });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <div className="mx-auto max-w-6xl px-10 py-30">
            <div className="grid grid-cols-1 gap-18 md:grid-cols-2">

                {/* text info (left side) */}
                <div className="flex flex-col gap-6 max-w-md">
                    <div className="space-y-3">
                        <h2 className="text-4xl text-[#009EDB]">We'd love to hear from you!</h2>
                        <p className="text-gray-600">
                            If you're looking to collaborate or just want to know more, get in touch with our team through
                            the contact details below or send us a message.
                        </p>
                    </div>

                    {/* address + contact info  */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 content-center">
                            <img src="/icons/location-icon.png" alt="Location icon" className="mt-1 h-6 w-6" />
                            <p className="text-gray-700">8888 University Drive West Burnaby, BC V5A 1S6</p>
                        </div>

                        <div className="flex items-start gap-3 content-center">
                            <img src="/icons/email-icon.png" alt="Email icon" className="mt-1 h-6 w-6" />
                            <p className="text-gray-700">usfu.club@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* form (right side) */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-2xl font-semibold text-gray-900">Send us a message</h2>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700" htmlFor="first_name">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700" htmlFor="last_name">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows="4"
                                className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            type="text"
                            name="company"
                            tabIndex="-1"
                            autoComplete="off"
                            className="hidden"
                            value={formData.company}
                            onChange={handleChange}
                            />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="rounded-md bg-[#1F145D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-sm text-green-600">Message sent successfully!</p>
                        )}

                        {status === "error" && (
                            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                        )}

                    </form>
                </div>
            </div>
        </div>
    )
}