'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Amara Okafor',
    role: 'Executive VA @ FinTech Co',
    quote: '"VABLY didn\'t just teach me tools; they taught me how to think. Within 3 months of graduating, I tripled my hourly rate and landed a long-term contract."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRWqYSBmF6vuUejSRtq5jFLuMY9Oruhdcjj31V1Q1xqJgKFdeXECZyXnmXGsWMMMY-NWODYopRklxUNOqYkUuE8Yig4Cj1E5OX6PrylwSo-OTK9YIUR3UXz9eMBBxY8Ii4jP9tw9O0ghn5_HNbSDGo_LWLHRgxTo_yqP7dglqrtNrc2FE8aACFC-txl5Lqr2HPzmWSZHyyfpUBSdfpRJVLUdkfvHctMmStba5sbDUIMFT0vDLJDNurl3IdnudavqqSdUII7RXeloGA',
  },
  {
    name: 'James Wilson',
    role: 'Systems Architect @ Creative Agency',
    quote: '"The frameworks provided by Sifon are literal gold. I went from being a task-taker to a strategic consultant in under 60 days."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Z3at6xRmgaLAU2nJIC4rjcpVN5becJm1vCloAvHcV-Kg8mLifbAr9odbiyG02C4oQd0OzgTcR461O3R3dnzmP5MOQEb3JWcUzBMXfxXyHIIIYzV1wbGHRmxRiIUqq6wiLxnQaEcRbX-7_Dqrt55mF2iIfEl2Src7LYFKyu6gDqT_SQqaEQEvS-vqGVP7DX_Nk7vuZQpU8nD9FW2SS1hivBPDGt6d0xDvIl0ep0LOh0s9ZoB_nXfDe4XkHFbVdWvUSP2Ggt9EE_NN',
  },
  {
    name: 'Sarah Chen',
    role: 'Independent VA Specialist',
    quote: '"The community alone is worth the investment. Being surrounded by high-level architects pushes you to perform at your peak every day."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjbczIN2qgz_ONvz8dBCU6BW5ezNqyVUr9f-tfFglmyik_GmB_poL_2aiDA7mO3bbKKglgZpPLXQmHtrTqGC8ajCABh0VRZ2dP-W_pqQjA84rjVUP9xt5Z9r2TjfAFN2DXlrncIbqk5_n8Cb-n4muEKa6TuHcCARqZETwrlvyewTYDsAMKaq-wEGkyvKHXwCZ5pf8MCIGNLKACYBUkjTCVQp4ecVlJmKGuNI0lII_KluAVWpNO0_bJFB9bjUL7Y71-2SNJnWdNsVJ-',
  },
  {
    name: 'Marcus Johnson',
    role: 'CRM Specialist @ SaaS Startup',
    quote: '"VABLY transformed my career trajectory. The practical, hands-on approach and mentorship from Sifon gave me the confidence to land premium contracts."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRWqYSBmF6vuUejSRtq5jFLuMY9Oruhdcjj31V1Q1xqJgKFdeXECZyXnmXGsWMMMY-NWODYopRklxUNOqYkUuE8Yig4Cj1E5OX6PrylwSo-OTK9YIUR3UXz9eMBBxY8Ii4jP9tw9O0ghn5_HNbSDGo_LWLHRgxTo_yqP7dglqrtNrc2FE8aACFC-txl5Lqr2HPzmWSZHyyfpUBSdfpRJVLUdkfvHctMmStba5sbDUIMFT0vDLJDNurl3IdnudavqqSdUII7RXeloGA',
  },
  {
    name: 'Priya Desai',
    role: 'Project Manager @ Fortune 500',
    quote: '"The communication frameworks alone paid for the entire course. I\'m now managing 6-figure budgets and complex executive projects."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Z3at6xRmgaLAU2nJIC4rjcpVN5becJm1vCloAvHcV-Kg8mLifbAr9odbiyG02C4oQd0OzgTcR461O3R3dnzmP5MOQEb3JWcUzBMXfxXyHIIIYzV1wbGHRmxRiIUqq6wiLxnQaEcRbX-7_Dqrt55mF2iIfEl2Src7LYFKyu6gDqT_SQqaEQEvS-vqGVP7DX_Nk7vuZQpU8nD9FW2SS1hivBPDGt6d0xDvIl0ep0LOh0s9ZoB_nXfDe4XkHFbVdWvUSP2Ggt9EE_NN',
  },
  {
    name: 'David Kim',
    role: 'Operations Lead @ Tech Venture',
    quote: '"The curriculum kept pace with how fast the industry was moving. Sifon\'s real-world insights made everything instantly applicable."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjbczIN2qgz_ONvz8dBCU6BW5ezNqyVUr9f-tfFglmyik_GmB_poL_2aiDA7mO3bbKKglgZpPLXQmHtrTqGC8ajCABh0VRZ2dP-W_pqQjA84rjVUP9xt5Z9r2TjfAFN2DXlrncIbqk5_n8Cb-n4muEKa6TuHcCARqZETwrlvyewTYDsAMKaq-wEGkyvKHXwCZ5pf8MCIGNLKACYBUkjTCVQp4ecVlJmKGuNI0lII_KluAVWpNO0_bJFB9bjUL7Y71-2SNJnWdNsVJ-',
  },
];

export function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollElement = scrollerRef.current;
    const speed = 1; // pixels per interval
    const interval = 20; // milliseconds

    // Wait for DOM to fully render before starting scroll
    const timer = setTimeout(() => {
      const singleSetWidth = scrollElement.scrollWidth / 2;

      const scroll = () => {
        scrollElement.scrollLeft += speed;

        // Reset to beginning for infinite effect
        if (scrollElement.scrollLeft >= singleSetWidth) {
          scrollElement.scrollLeft = 0;
        }
      };

      const intervalId = setInterval(scroll, interval);
      return () => clearInterval(intervalId);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-hidden"
    >
      <div
        ref={scrollerRef}
        className="flex gap-8 pb-4 overflow-x-auto scrollbar-hide"
      >
        {/* Duplicate testimonials for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 bg-surface-container-lowest p-8 rounded-3xl shadow-[0_20px_40px_rgba(26,28,30,0.06)] relative"
          >
            <Quote className="w-12 h-12 text-secondary opacity-20 absolute top-6 right-8" />
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  src={testimonial.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-on-surface text-sm">{testimonial.name}</h4>
                <p className="text-xs text-outline font-medium">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-on-surface-variant italic leading-relaxed text-sm">{testimonial.quote}</p>
          </div>
        ))}
      </div>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
