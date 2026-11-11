import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Waves, Fish, Activity, CheckCircle2, Sparkles, Truck, Layers, ChevronRight } from 'lucide-react';
import { processSteps, ProcessStep } from '../data/process';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-5 h-5" />;
      case 'Fish':
        return <Fish className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const currentStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white bg-water-texture border-t border-[#DCE7EF] relative overflow-hidden">
      {/* Decorative Fluid Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-[#69BCE0]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#087EAC] mb-3">
            <Layers className="w-4 h-4" />
            <span>Alur Budidaya & Penanganan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] tracking-tight text-balance">
            Dari Kolam Budidaya Hingga ke Meja Makan.
          </h2>
          <p className="mt-3 text-base text-[#526477]">
            Setiap tahapan usaha menjadi bagian penting dalam upaya kami menghadirkan produk ikan nila yang berkualitas.
          </p>
        </div>

        {/* Step Selector Horizontal Bar (Desktop) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-4 rounded-2xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#102A43] text-white border-[#102A43] shadow-md -translate-y-1'
                    : 'bg-[#F4FAFD]/90 text-[#526477] border-[#DCE7EF] hover:border-[#69BCE0] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif text-sm font-bold ${
                      isActive ? 'text-[#69BCE0]' : 'text-[#087EAC]'
                    }`}
                  >
                    STEP {step.stepNumber}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-white/10 text-[#69BCE0]' : 'bg-[#D9F0FA] text-[#087EAC]'
                    }`}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                </div>
                <div
                  className={`text-xs font-semibold line-clamp-1 ${
                    isActive ? 'text-white' : 'text-[#102A43]'
                  }`}
                >
                  {step.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Showcase (Desktop & Tablet) with Gradient Border */}
        <div className="hidden md:block gradient-border-subtle mb-16">
          <div className="bg-[#F4FAFD]/95 backdrop-blur-sm rounded-[1.2rem] p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087EAC] mb-2">
                  <span>Tahapan {currentStep.stepNumber} dari 06</span>
                  <span className="text-[#8495A5]">·</span>
                  <span>Biofloc Quality Control</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#102A43] mb-4">
                  {currentStep.title}
                </h3>
                <p className="text-base text-[#526477] leading-relaxed mb-6">
                  {currentStep.description}
                </p>

                {/* Step Key Highlights */}
                <div className="space-y-2.5 mb-6">
                  {currentStep.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-[#DCE7EF] text-xs sm:text-sm text-[#102A43] shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#087EAC] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation controls for timeline */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2.5 text-xs font-semibold rounded-xl border border-[#DCE7EF] bg-white text-[#102A43] hover:bg-[#EAF6FB] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    Sebelumnya
                  </button>
                  <button
                    type="button"
                    disabled={activeStepIndex === processSteps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#087EAC] hover:bg-[#06658b] text-white disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Tahap Berikutnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Visual Image: Dedicated Distinct Image for each step */}
              <div className="lg:col-span-5">
                <div className="gradient-border-ocean">
                  <div className="rounded-[1.4rem] overflow-hidden bg-white shadow-lg relative h-72 lg:h-84">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentStep.stepNumber}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        src={currentStep.image}
                        alt={currentStep.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>
                    {/* Soft Bottom Gradient Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-xs border-t border-[#DCE7EF] flex items-center justify-between z-10">
                      <span className="text-xs font-medium text-[#526477]">
                        Tahap {currentStep.stepNumber}: {currentStep.shortTitle}
                      </span>
                      <span className="text-xs font-semibold text-[#087EAC]">
                        Reret Heula Bioflok
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Interactive Timeline (Mobile-First View) with individual images */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="gradient-border-subtle"
            >
              <div className="bg-[#F4FAFD] rounded-[1.15rem] overflow-hidden">
                {/* Step Image */}
                <div className="relative h-44 w-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#102A43]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    STEP {step.stepNumber}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#087EAC] uppercase tracking-wider">
                      {step.shortTitle}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#D9F0FA] text-[#087EAC] flex items-center justify-center">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#526477] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-1.5 border-t border-[#DCE7EF] pt-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#526477]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087EAC] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
