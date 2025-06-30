import PageBanner from "@/components/common/pagebanner"

export default function SecurityPolicyPage() {
    return (
        <>
            <PageBanner />
            <div className="container mx-auto px-6 py-10 text-lg text-gray-800 text-justify">
                <h1 className="text-3xl font-semibold mb-6">Information Security Policy</h1>

                <p className="mb-4">
                    VENOVOX Group (&quot;VENOVOX&quot;) is committed to putting in place and proactively managing an Information Security Management System (&quot;ISMS&quot;) which recognizes that Confidentiality, Integrity, and Availability in information security are integral parts of its management function.
                </p>

                <p className="mb-4">
                    VENOVOX&lsquo;s objective for the ISMS is to ensure comprehensive protection of its information assets against potential confidentiality breaches, failures of integrity, and/or interruptions to their availability, and to minimize the risk of damage to its information assets by preventing security incidents and reducing their potential impact.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">Policy Objectives</h2>
                <p className="mb-4">The Information Security Policy (&quot;Policy&quot;) ensures that:</p>

                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Information will be protected against any unauthorized access;</li>
                    <li>Confidentiality of information will be assured;</li>
                    <li>Integrity of information will be maintained;</li>
                    <li>Availability of information for business processes will be maintained with minimal disruption;</li>
                    <li>Legal or regulatory requirements will be met;</li>
                    <li>A Business Continuity Plan (&quot;BCP&quot;) is developed, maintained, and tested to counteract interruptions to business activities;</li>
                    <li>All actual or suspected information security breaches will be reported to the Incident Response Team and thoroughly investigated;</li>
                    <li>Continual improvements are implemented by reviewing overall Policy implementation.</li>
                </ul>
            </div>
        </>
    )
}