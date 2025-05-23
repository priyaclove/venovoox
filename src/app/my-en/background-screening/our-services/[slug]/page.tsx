"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import servicesData from "@/data/our-services.json";

// Define TypeScript interfaces for our data structure
interface InternalLink {
  text: string
  url: string
}

interface Service {
  id: string
  title: string
  url: string
  metaTitle: string
  metaDescription: string
  h1: string
  h2: string[]
  h3: string[]
  content: string[]
  internalLinks: InternalLink[]
}

export default function ServicePage() {
  const params = useParams()
  const slug = params?.slug as string
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the service that matches the slug
    const foundService = servicesData.services.find((service) => service.id === slug)

    if (foundService) {
      setService(foundService)
      // Update metadata
      document.title = foundService.metaTitle
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute("content", foundService.metaDescription)
      }
    }

    setLoading(false)
  }, [slug])

  // Animation variants
  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  // If loading, show a loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-16 h-16 relative">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-red-600 rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  // If service not found, show a not found message
  if (!service) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <h1 className="text-3xl font-bold mb-4 text-black">Service Not Found</h1>
        <p className="mb-6 text-gray-700">The service you are looking for does not exist.</p>
        <Link
          href="/my-en/background-screening/our-services"
          className="px-6 py-3 bg-red-600 text-white rounded-none hover:bg-red-700 transition-colors"
        >
          Back to Services
        </Link>
      </div>
    )
  }

  // Helper function to get image for each service
  const getServiceImage = (serviceId: string) => {
    return `/placeholder.svg?height=400&width=600&text=${serviceId.replace(/-/g, ' ').toUpperCase()}`
  }

  // Render the service content
  return (
    <motion.div
      className="bg-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero section with image */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <Image 
          src={getServiceImage(service.id) || "/placeholder.svg"}
          alt={service.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {service.h1}
          </motion.h1>
        </div>
      </div>

      {/* Breadcrumb navigation */}
      <div className="bg-gray-100 py-3 px-4 border-b border-gray-200">
        <div className="container mx-auto ">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/my-en" className="hover:text-red-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/my-en/background-screening" className="hover:text-red-600 transition-colors">Background Screening</Link>
            <span className="mx-2">/</span>
            <Link href="/my-en/background-screening/our-services" className="hover:text-red-600 transition-colors">Our Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content column */}
          <motion.div 
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="text-3xl font-bold mb-6 text-black border-b-2 border-red-600 pb-2 inline-block">
                Overview
              </h2>
              <p className="text-gray-800 leading-relaxed text-lg  text-justify">
                {service.content[0]}
              </p>
            </motion.div>

            <h2 className="text-3xl font-bold mb-6 text-black border-b-2 border-red-600 pb-2 inline-block mb-12">Explore Further</h2>

            {/* Main content sections */}
            {service.h2.map((heading, idx) => (
              <motion.section 
                key={idx} 
                className="mb-12  text-justify"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-6 text-black border-l-4 border-red-600 pl-4">
                  {heading}
                </h2>
                
                {/* Find content related to this heading */}
                {service.content.map((paragraph, pIdx) => {
                  if (paragraph === heading) {
                    // This is the heading itself, so we skip it
                    return null
                  }
                  
                  // Check if this paragraph is related to the current heading
                  const nextHeadingIndex = service.content.findIndex((p, i) => 
                    i > pIdx && service.h2.includes(p)
                  )
                  
                  const isInCurrentSection = 
                    service.content.indexOf(heading) < pIdx && 
                    (nextHeadingIndex === -1 || pIdx < nextHeadingIndex)
                  
                  if (isInCurrentSection) {
                    // Check if this is a subheading (h3)
                    if (service.h3.includes(paragraph)) {
                      return (
                        <h3 
                          key={pIdx} 
                          className="text-xl font-semibold mt-6 mb-4 text-gray-900"
                        >
                          {paragraph}
                        </h3>
                      )
                    }
                    
                    // Check if this is a list item
                    if (paragraph.startsWith("✔") || paragraph.startsWith("✅")) {
                      return (
                        <div key={pIdx} className="flex items-start mb-3 group">
                          <span className="text-red-600 mr-2 transform group-hover:scale-110 transition-transform">
                            {paragraph.substring(0, 1)}
                          </span>
                          <p className="text-gray-700">{paragraph.substring(2)}</p>
                        </div>
                      )
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={pIdx} className="mb-4 text-gray-700 leading-relaxed  text-justify">
                        {paragraph}
                      </p>
                    )
                  }
                  
                  return null
                })}
              </motion.section>
            ))}

            {/* Call to action */}
            <motion.div 
              className="mt-16 bg-black text-white p-8"
              variants={scaleIn}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
                  <p className="text-gray-300  text-justify">
                    Let our experts help you navigate the complexities of your business challenges.
                  </p>
                </div>
                <Link
                  href="/my-en/contact-us"
                  className="mt-6 md:mt-0 px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar column */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="sticky top-8 space-y-8">
              {/* Service quick info */}
              <div className="bg-gray-100 p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-4 text-black">About This Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Comprehensive solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Expert consultants</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Tailored to your business</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Global coverage</span>
                  </li>
                </ul>
              </div>

              {/* Related services */}
              <div className="bg-white p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-black">Related Services</h3>
                <ul className="space-y-4">
                  {service.internalLinks.map((link, index) => (
                    <li key={index} className="group">
                      <Link 
                        href={link.url} 
                        className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
                      >
                        <div className="w-2 h-2 bg-red-600 mr-3 group-hover:w-3 transition-all duration-300"></div>
                        <span>{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact box */}
              <div className="bg-black text-white p-6">
                <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
                <p className="text-gray-300 mb-6  text-justify">
                  Our team of experts is ready to help you with your specific needs.
                </p>
                <Link
                  href="/my-en/contact-us"
                  className="block w-full py-3 bg-red-600 text-center text-white font-medium hover:bg-red-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-100 p-6 border-t-4 border-red-600">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-black">Client Testimonial</h3>
                </div>
                <p className="text-gray-700 italic  text-justify">
                &ldquo;VENOVOX provided exceptional service that helped us identify and mitigate risks we weren&ldquo;t even aware of. Their expertise was invaluable to our business operations.&ldquo;
                </p>
                <p className="mt-4 text-gray-900 font-medium  text-justify">
                  — Director of Operations, Fortune 500 Company
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
