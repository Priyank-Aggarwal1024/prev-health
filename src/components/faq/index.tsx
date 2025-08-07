import { useState } from "react";
import { cross } from "../../assets"; // Make sure this is a valid import

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: "What kind of healthcare providers is PrevHealth built for?",
        answer:
            "PrevHealth is designed for clinics, hospitals, and digital health providers offering services across any speciality. From primary care and sexual health to psychiatry and speech therapy - our flexible modules adapt to your care model.",
    },
    {
        question: "How does PrevHealth improve clinical efficiency?",
        answer:
            "PrevHealth is an end-to-end platform, from digital triage and patient communication to clinical workflows and AI-powered documentation. We don't just offer isolated AI tools; we support the full care journey with integrated solutions that reduce administrative burden and let providers focus on what matters most: delivering care.",
    },
    {
        question: "Is PrevHealth compliant with European regulations?",
        answer:
            "Yes, PrevHealth is fully GDPR-compliant and built to meet regional healthcare requirements, including secure data storage, patient consent workflows, and integrations with national EHRs.",
    },
    {
        question: "Does PrevHealth support different languages and localizations?",
        answer:
            "Yes, PrevHealth supports region and language specific configurations. We currently serve providers across Sweden and broader Europe.",
    },
    {
        question: "How long does it take to go live with PrevHealth?",
        answer:
            "Depending on your scope and configuration needs, providers can typically launch within 2 to 6 weeks. Our team supports onboarding, customization, and training every step of the way.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="w-full  px-5 md:py-24 pt-16 pb-12">
            <div className="w-full max-w-[868px] mx-auto flex flex-col items-center gap-10 md:gap-14">
                {/* Header */}
                <div className="w-full max-w-[582px] flex flex-col items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-1 py-0.5 rounded-[10px]">
                        <div className="w-2.5 h-2.5 bg-[#FD8883] rounded-full" />
                        <span className="text-sm md:text-base text-[#555] font-normal font-[Work_Sans] leading-tight md:leading-snug">
                            FAQS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl text-[#23586A] font-medium font-[Lora] leading-10 md:leading-[62.40px] text-center">
                        Your Questions Answered
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="w-full flex flex-col gap-2 md:gap-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="w-full">
                            <div className="flex flex-col gap-2 md:gap-3 py-3 md:py-4">
                                <div
                                    className="flex justify-between items-start gap-4 cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-xl text-[#555] font-normal font-[Work_Sans] leading-snug md:leading-7">
                                            {item.question}
                                        </h3>
                                        {openIndex === index && (
                                            <p className="mt-1 md:mt-2 text-base md:text-xl text-zinc-500 font-normal font-[Work_Sans] leading-snug md:leading-7 transition-all duration-300 ease-in-out">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>
                                    <img
                                        src={cross}
                                        alt="toggle"
                                        className={`w-5 h-5 md:w-8 md:h-8 transition-transform duration-300 ${openIndex === index ? "" : "rotate-45"
                                            }`}
                                    />
                                </div>
                            </div>
                            {index < faqData.length - 1 && (
                                <div className="w-full h-px bg-neutral-100" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
