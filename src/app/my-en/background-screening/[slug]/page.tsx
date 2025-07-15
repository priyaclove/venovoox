import ServicePageClient from "./ServicePageClient";
import servicesData from "@/data/our-services.json";

export async function generateStaticParams() {
    return servicesData.services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <ServicePageClient slug={slug} />;
}
