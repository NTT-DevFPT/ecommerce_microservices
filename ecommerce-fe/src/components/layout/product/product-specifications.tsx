'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface SpecificationSection {
    title: string
    specs: {
        label: string
        value: string
    }[]
}

interface ProductSpecificationsProps {
    specifications: SpecificationSection[]
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
    const [expandedSections, setExpandedSections] = useState<string[]>([])

    const toggleSection = (title: string) => {
        setExpandedSections(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        )
    }

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <div className="flex justify-center mb-6">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-lg font-semibold">Thông số kỹ thuật</button>
            </div>

            <div className="space-y-4">
                {specifications.map((section) => (
                    <div key={section.title} className=" border rounded-lg overflow-hidden bg-gray-800">
                        <button
                            className="w-full p-4 flex justify-between items-center text-white"
                            onClick={() => toggleSection(section.title)}
                        >
                            <span className="font-medium" style={{ width: '800px' }}>{section.title}</span>
                            {expandedSections.includes(section.title) ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>

                        {expandedSections.includes(section.title) && (
                            <div className="p-4 border-t border-gray-700">
                                <div className="space-y-2">
                                    {section.specs.map((spec, index) => (
                                        <div key={index} className="grid grid-cols-[200px,1fr] gap-6 text-gray-300">
                                            <span>{spec.label}:</span>
                                            <span>
                                                {spec.value.split('\n').map((line, lineIndex) => (
                                                    <div key={lineIndex}>{line}</div>
                                                ))}
                                            </span>
                                            <div className="col-span-2 border-b border-white mt-1"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
