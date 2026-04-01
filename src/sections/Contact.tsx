"use client";

import ParticlesBackground from "@/components/ParticleBackground";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import Image from "next/image";
import Astra from "../../public/assets/images/Astra.png"
import {
    Field,
    FieldContent,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const MotionImage = motion.create(Image);

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("Missing EmailJS credentials");
}

interface FormErrors {
    name?: string;
    email?: string;
    service?: string;
    customService?: string;
    budget?: string;
    idea?: string;
}

interface FormData {
    name: string;
    email: string;
    service: string;
    customService: string;
    budget: string;
    idea: string;
}

const Contact = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        service: '',
        customService: '',
        budget: '',
        idea: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "budget" && value && !/^\d*$/.test(value)) {
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    }

    const validateForm = (): boolean => {
        const requiredFields: (keyof FormData)[] = ['name', 'email', 'service', 'idea'];
        const newErrors: FormErrors = {};


        requiredFields.forEach(field => !formData[field].trim() && (newErrors[field] = 'This field is required'));
        if (formData.service !== "other" && formData.service !== "message" && !formData.budget.trim()) {
            newErrors.budget = 'Budget is required for selected service';
        }

        if (formData.service === "other" && !formData.customService.trim()) {
            newErrors.customService = "Please specify the service";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setStatus('Sending...');

        try {

            const finalService = formData.service === "other" ? formData.customService : formData.service;

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    ...formData,
                    from_name: formData.name,
                    reply_to: formData.email,
                    service: finalService,
                },
                PUBLIC_KEY);

            setStatus("Success");

            setFormData({
                name: '',
                email: '',
                service: '',
                customService: '',
                budget: '',
                idea: ''
            })

        } catch (error) {
            console.error("Email sending error:", error);
            setStatus("Failed to send. Please try again later.");
        };
    };

    const defaultInputStyle = `py-5 rounded-md bg-white/10 border text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500`


    return (
        <section
            id="contact"
            className="h-screen w-full bg-black relative overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
        >
            <ParticlesBackground />
            <div
                className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10"
            >

                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <MotionImage
                        src={Astra}
                        alt="Contact"
                        className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                </motion.div>


                <motion.div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <Field>
                            <FieldLabel>Name<span className="text-red-500">*</span></FieldLabel>
                            <FieldContent>
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`${defaultInputStyle} ${errors.name ? "border-red-500" : "border-gray-500"}`}
                                />
                            </FieldContent>
                            {errors.name && <FieldError>{errors.name}</FieldError>}
                        </Field>


                        <Field>
                            <FieldLabel>Email<span className="text-red-500">*</span></FieldLabel>
                            <FieldContent>
                                <Input
                                    type="email"
                                    placeholder=" someone@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${defaultInputStyle} ${errors.email ? "border-red-500" : "border-gray-500"}`}
                                />
                            </FieldContent>
                            {errors.email && <FieldError>{errors.email}</FieldError>}
                        </Field>

                        <Field className="w-full">
                            <FieldLabel>Service<span className="text-red-500">*</span></FieldLabel>
                            <FieldContent>
                                <Select
                                    value={formData.service}
                                    onValueChange={(value) => {
                                        setFormData(prev => ({ ...prev, service: value }));
                                    }}
                                >
                                    <SelectTrigger
                                        className={`w-full py-5 rounded-md bg-white/10 border ${errors.service ? "border-red-500" : "border-gray-500"} text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                                    >
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent className="z-50 bg-black text-white border border-gray-700 rounded-md">

                                        <SelectItem value="web-development">Website</SelectItem>
                                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                        <SelectItem value="other">Other Services</SelectItem>
                                        <SelectItem value="message">Leave a Message</SelectItem>

                                    </SelectContent>
                                </Select>
                            </FieldContent>
                            {errors.service && <FieldError>{errors.service}</FieldError>}
                        </Field>

                        {formData.service === "other" && (
                            <Field>
                                <FieldContent>
                                    <Input
                                        type="text"
                                        placeholder="Service Name"
                                        name="customService"
                                        value={formData.customService}
                                        onChange={handleChange}
                                        className={`${defaultInputStyle} ${errors.customService ? "border-red-500" : "border-gray-500"}`}
                                    />
                                </FieldContent>
                                {errors.customService && <FieldError>{errors.customService}</FieldError>}
                            </Field>
                        )}

                        {formData.service && formData.service !== "other" && formData.service !== "message" && (
                            <Field>
                                <FieldLabel>Budget<span className="text-red-500">*</span></FieldLabel>
                                <FieldContent>
                                    <div className="relative">
                                        <Input
                                            type="text"
                                            placeholder="Your Budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className={`${defaultInputStyle} ${errors.budget ? "border-red-500" : "border-gray-500"} pr-10`}
                                            required
                                        />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                    </div>
                                </FieldContent>
                                {errors.budget && <FieldError>{errors.budget}</FieldError>}
                            </Field>
                        )}

                        <Field>
                            <FieldLabel>{formData.service === "message" ? "Message" : "Idea"}<span className="text-red-500">*</span></FieldLabel>
                            <FieldContent>
                                <Textarea
                                    placeholder="Enter Your Idea"
                                    name="idea"
                                    value={formData.idea}
                                    onChange={handleChange}
                                    className={`${defaultInputStyle} overflow-hidden py-3 ${errors.idea ? "border-red-500" : "border-gray-500"}`}
                                    required
                                />
                            </FieldContent>
                            {errors.idea && <FieldError>{errors.idea}</FieldError>}
                        </Field>

                        <Button
                            type="submit"
                            className="bg-blue-500 p-5 hover:scale-102 mt-3 text-md font-semibold transition-transform duration-300 font-mono cursor-pointer"
                            disabled={status === "Sending..."}
                        >
                            {status === "Sending..." ? "Sending..." : "Submit"}
                        </Button>

                        {status === "Success" && <p className="text-green-500 mt-2">Your message has been sent successfully!</p>}

                    </form>


                </motion.div>

            </div>
        </section>
    );
};


export default Contact;