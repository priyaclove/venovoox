import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle, Shield, Clock, Users, Info, Lock, ShieldCheck, AlertTriangle, Globe, TrendingUp, Search, AlertCircle, Network } from "lucide-react";
import { blogData } from "@/data/blogsData";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: { [key: string]: any } = { CheckCircle, Shield, Clock, Users, Info, Lock, ShieldCheck, AlertTriangle, Globe, TrendingUp, Search, AlertCircle, Network };

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);
    if (!blog) return {};

    return {
        title: blog.seo.metaTitle,
        description: blog.seo.metaDescription,
        keywords: blog.seo.keywords.join(", "),
        alternates: { canonical: blog.seo.canonicalUrl },
        openGraph: {
            title: blog.seo.metaTitle,
            description: blog.seo.metaDescription,
            url: blog.seo.canonicalUrl,
            images: [{ url: blog.featuredImage, width: 800, height: 600, alt: blog.altTag }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.seo.metaTitle,
            description: blog.seo.metaDescription,
            images: [blog.featuredImage],
        },
    };
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) return notFound();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderSection = (section: any, index: number) => {
        switch (section.type) {
            case "introduction":
                return (
                    <section key={index} className="mb-16">
                        <div className=" mx-auto">
                            <p className="text-gray-600 leading-relaxed text-lg text-justify ">
                                {section.content}
                            </p>
                        </div>
                    </section>
                );

            case "content_section":
                return (
                    <section key={index} className="mb-12">
                        <div className="mx-auto py-12">
                            <h2 className="text-4xl font-bold mb-8 text-black text-center mb-12">
                                {section.heading}
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                {section.content}
                            </p>
                        </div>
                    </section>
                );

            case "content_with_image":
                return (
                    <section key={index} className="mb-20">
                        <div className=" mx-auto">
                            <h2 className="text-4xl font-bold mb-12 text-black text-center leading-tight">
                                {section.heading}
                            </h2>
                            <div
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
                                    }`}
                            >
                                <div
                                    className={`space-y-6 ${section.imagePosition === "left" ? "lg:order-last" : ""
                                        }`}
                                >
                                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                        {section.content}
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                                        <Image
                                            src={section.image}
                                            alt={section.imageAlt}
                                            width={500}
                                            height={350}
                                            className="object-cover "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case "benefits_section":
                return (
                    <section key={index} className="mb-20 bg-white py-16">
                        <div className=" mx-auto px-6">
                            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center leading-tight">
                                {section.heading}
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                                        <Image
                                            src={section.image}
                                            alt={section.imageAlt}
                                            width={500}
                                            height={350}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-gray-600 text-lg  leading-relaxed text-justify">
                                        {section.content}
                                    </p>
                                    <div className="space-y-6">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {section.benefits.map((benefit: any, benefitIndex: number) => {
                                            const Icon = iconMap[benefit.icon];
                                            return (
                                                <div
                                                    key={benefitIndex}
                                                    className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                                                >
                                                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                                                        <Icon className="w-6 h-6 text-red-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                                            {benefit.title}
                                                        </h4>
                                                        <p className="text-gray-600 leading-relaxed text-justify">
                                                            {benefit.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case "two_column_section":
                return (
                    <section key={index} className="mb-20">
                        <div className="mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {section.sections.map((subsection: any, subIndex: number) => (
                                    <div
                                        key={subIndex}
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                    >
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900 leading-tight">
                                            {subsection.heading}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                            {subsection.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case "conclusion":
                return (
                    <section key={index} className="mb-20">
                        <div className=" mx-auto">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-2xl shadow-2xl">
                                <h2 className="text-3xl font-bold mb-6 leading-tight">
                                    {section.heading}
                                </h2>
                                <p className="text-lg leading-relaxed text-justify opacity-95">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white ">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] mt-20">
                        <div className="space-y-8">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white">
                                    {blog.h1.split(" ").slice(0, -3).join(" ")}{" "}
                                </span>
                                <span className="text-red-600">
                                    {blog.h1.split(" ").slice(-3).join(" ")}
                                </span>
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-[600px] h-[400px]">
                                <Image
                                    src={blog.featuredImage}
                                    alt={blog.altTag}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <main className="container mx-auto px-6 py-20">
                <div className="space-y-8 text-justify">
                    {blog.sections.map((section, index) => renderSection(section, index))}
                </div>
            </main>
        </div>
    );
}