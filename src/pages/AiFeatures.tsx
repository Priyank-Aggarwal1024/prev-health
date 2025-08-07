import { heroAi, heroAIMobile } from "../assets";
import { Button, Contact, Faq, Features, Testimonials, Workflow } from "../components";

function AiFeatures() {
    return (
        <div className="w-full">
            <section className="w-full px-5 overflow-hidden md:pt-[120px] pt-24 pb-20 md:pb-24">
                <div className="w-full flex flex-col justify-start items-center gap-6 md:gap-8 lg:gap-12 max-w-[750px] mx-auto">
                    <div className="flex flex-col justify-start items-start gap-3 md:gap-5 w-full">
                        <h2 className="w-full text-center text-[#23586A] text-3xl sm:text-4xl lg:text-6xl font-medium font-['Lora'] leading-[135%]">
                            Everything you need for faster, Smarter care
                        </h2>
                        <p className="w-full text-center text-[#555] text-base sm:text-lg lg:text-xl font-normal font-['Work_Sans'] leading-[135%]">
                            Explore how PrevHealth's AI works quietly in the background to streamline care, reduce clicks, and empower providers and patients alike.
                        </p>
                    </div>
                    <Button>
                        See how it Works
                    </Button>
                </div>
                <div className="w-full max-w-full md:pt-12 pt-24 min-w-[calc(100vw-20px)] md:min-w-[unset]">
                    <img src={heroAi} alt="Everything you need for faster, Smarter care" className="max-w-[1168px] mx-auto w-full md:block hidden" />
                    <img src={heroAIMobile} alt="Everything you need for faster, Smarter care" className="w-full relative md:hidden" />
                </div>
            </section>
            <Features />
            <Workflow />
            <Testimonials />
            <Faq />
            <Contact />
        </div>
    );
}

export default AiFeatures;