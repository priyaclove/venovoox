
import VenovoxCredibilitySection from "@/components/Career/credibilitysection";
import FunTeamSection from "@/components/Career/FunTeamSection";
import GrowWithUsSection from "@/components/Career/GrowWithUsSection";
import VenovoxHero from "@/components/Career/top-section";
import Form from "@/components/Career/submit-form";

import React from "react"
export const metadata = {
    title: "Careers at VENOVOX | Join Our Risk Management Team",
    description:
        "Explore exciting career opportunities at VENOVOX. Become part of a global leader in risk consultancy, security advisory, and intelligence analysis.",
};

export default function Careers() {
    return (
        <>

            < VenovoxHero />
            <VenovoxCredibilitySection />
            <GrowWithUsSection />
            <FunTeamSection />
            <Form />

        </>
    )
}
