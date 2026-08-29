// Human-crafted design system. Avoid modifying with AI tools without reading DESIGN.md first.

import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  Shield, 
  Cpu, 
  Layers, 
  ArrowUpRight, 
  Play, 
  Check, 
  ChevronDown, 
  Chrome, 
  Terminal, 
  Globe, 
  Award, 
  Sparkles, 
  BookOpen, 
  Code,
  Github
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [videoScene, setVideoScene] = useState(0); // 0 = Install, 1 = Scan, 2 = Autofill
  const [openFaq, setOpenFaq] = useState(null);

  // Monitor scroll to update header border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Scroll Reveals
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Typewriter effect lines list
  const typewriterLines = [
    "> Capturing viewport...",
    "> Running moondream2 via WebGPU",
    "> Detected: 3 inputs, 1 button, 6 links",
    "> Confidence: 0.94",
    "> Action: autofill suggested",
    "> Bytes sent to server: 0"
  ];

  // Run typewriter effect on load
  useEffect(() => {
    setTerminalLines([]);
    let timers = [];
    typewriterLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 750);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [activeStep]); // Re-runs when active step changes to feel alive

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#ffffff] text-[#0a0a0a] min-h-screen selection:bg-neutral-100 flex flex-col items-center w-full">
      
      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-center transition-all duration-150 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-[#e5e5e5]' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="w-full max-w-[1100px] px-6 flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <svg className="w-4 h-4 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="font-sans font-medium text-[15px] tracking-tight text-[#0a0a0a]">DataVeil</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="font-sans font-normal text-sm text-[#737373] hover:text-[#0a0a0a] transition-colors duration-150">How it works</a>
            <a href="#features" className="font-sans font-normal text-sm text-[#737373] hover:text-[#0a0a0a] transition-colors duration-150">Features</a>
            <a href="#privacy" className="font-sans font-normal text-sm text-[#737373] hover:text-[#0a0a0a] transition-colors duration-150">Privacy</a>
            <a href="#faq" className="font-sans font-normal text-sm text-[#737373] hover:text-[#0a0a0a] transition-colors duration-150">Docs</a>
          </div>

          {/* Call to Actions */}
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="font-sans font-normal text-sm text-[#737373] hover:text-[#0a0a0a] transition-colors duration-150 flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#install" 
              className="font-sans font-normal text-sm bg-[#0a0a0a] text-white px-[18px] py-[8px] rounded-btn hover:bg-[#171717] transition-colors duration-150"
            >
              Install Extension
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-16 w-full flex flex-col items-center">
        <div className="w-full max-w-[1100px] px-6 flex flex-col items-center text-center">
          
          {/* Eyebrow badge */}
          <div className="reveal inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-[#e5e5e5] rounded-pill text-[12px] text-[#737373] font-sans font-normal mb-8">
            <span>ISRO Smart India Hackathon 2026</span>
            <span className="text-[#0a0a0a] font-medium">·</span>
            <span>Problem 26171</span>
          </div>

          {/* Headline */}
          <h1 className="reveal font-serif text-[68px] leading-[1.1] tracking-tightest text-[#0a0a0a] max-w-[760px] font-normal mb-6">
            Your browser <br />
            <span className="italic">finally sees</span> <br />
            what you see.
            <span className="block text-[#737373] mt-2">Privately.</span>
          </h1>

          {/* Sub-headline */}
          <p className="reveal font-sans font-normal text-lg text-[#737373] leading-relaxed max-w-[540px] mb-10 text-left md:text-center">
            DataVeil runs a vision AI model entirely in your browser using <code className="font-mono text-xs px-1.5 py-0.5 bg-[#f9f9f9] border border-[#e5e5e5] rounded text-[#0a0a0a]">WebGPU</code>. No API keys. No cloud. No data ever leaves your machine.
          </p>

          {/* CTA Row */}
          <div className="reveal flex flex-col sm:flex-row gap-3 mb-10 justify-center w-full sm:w-auto">
            <a 
              href="#install" 
              className="px-7 py-3 bg-[#0a0a0a] text-white text-[15px] font-medium rounded-btn hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-150 text-center"
            >
              Install on Chrome
            </a>
            <a 
              href="#how-it-works" 
              className="px-7 py-3 bg-transparent border border-[#e5e5e5] text-[#0a0a0a] text-[15px] font-medium rounded-btn hover:border-[#0a0a0a] transition-all duration-150 text-center"
            >
              See how it works ↓
            </a>
          </div>

          {/* Trust Row */}
          <div className="reveal flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-[#737373] font-sans">
            <span>🔒 Zero data sent</span>
            <span className="text-[#e5e5e5]">|</span>
            <span>⚡ WebGPU powered</span>
            <span className="text-[#e5e5e5]">|</span>
            <span>🧠 On-device AI</span>
            <span className="text-[#e5e5e5]">|</span>
            <span>🇮🇳 Built for ISRO</span>
          </div>

          {/* Hero visual: Browser Mockup */}
          <div className="reveal w-full mt-16 max-w-[900px] border border-[#e5e5e5] rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden bg-white text-left">
            {/* Toolbar */}
            <div className="h-10 bg-[#f9f9f9] border-b border-[#e5e5e5] px-4 flex items-center justify-between">
              {/* Traffic light dots */}
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/30" />
              </div>
              {/* URL input */}
              <div className="w-[280px] bg-white border border-[#e5e5e5] rounded-pill px-3 py-0.5 text-[12px] text-[#737373] font-mono text-center select-none">
                dataveil.isro.gov.in
              </div>
              <div className="w-8" />
            </div>

            {/* Content area */}
            <div className="h-[280px] flex relative bg-white overflow-hidden">
              
              {/* Left page content */}
              <div className="flex-1 p-6 space-y-4">
                {/* Fake page Header */}
                <div className="h-10 bg-[#f9f9f9] border-b border-[#e5e5e5] -mx-6 -mt-6 px-6 flex items-center">
                  <div className="w-20 h-3 bg-[#e5e5e5] rounded" />
                </div>
                {/* Text lines */}
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-[60%] bg-[#f5f5f5] rounded" />
                  <div className="h-2.5 w-[40%] bg-[#f5f5f5] rounded" />
                </div>
                {/* Fake Form */}
                <div className="space-y-3 max-w-[280px] pt-2">
                  <div className="space-y-1">
                    <div className="w-12 h-2.5 bg-[#e5e5e5] rounded" />
                    <div className="h-9 border border-[#e5e5e5] rounded-btn w-full bg-white px-2.5 flex items-center text-[11px] text-neutral-400">
                      Team Leader Name
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-16 h-2.5 bg-[#e5e5e5] rounded" />
                    <div className="h-9 border border-[#e5e5e5] rounded-btn w-full bg-white px-2.5 flex items-center text-[11px] text-neutral-400">
                      Security Clearance Pin
                    </div>
                  </div>
                </div>
              </div>

              {/* DataVeil sidebar overlay */}
              <div className="w-[200px] border-l border-[#e5e5e5] bg-white p-4 flex flex-col justify-between font-sans relative z-20">
                <div className="space-y-4">
                  {/* Brand header */}
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span className="font-medium text-[12px] text-[#0a0a0a]">DataVeil Panel</span>
                  </div>
                  
                  <div className="border-t border-[#e5e5e5] pt-3">
                    <p className="text-[11px] text-[#737373] mb-2 font-mono uppercase tracking-wider">Detected elements</p>
                    <div className="space-y-1.5">
                      <div className="border border-[#e5e5e5] rounded-[4px] px-2 py-1 text-[11px] text-[#0a0a0a] bg-[#f9f9f9] flex items-center gap-1.5 font-sans">
                        <span>📝</span> 2 input fields
                      </div>
                      <div className="border border-[#e5e5e5] rounded-[4px] px-2 py-1 text-[11px] text-[#0a0a0a] bg-[#f9f9f9] flex items-center gap-1.5 font-sans">
                        <span>✅</span> 1 submit button
                      </div>
                      <div className="border border-[#e5e5e5] rounded-[4px] px-2 py-1 text-[11px] text-[#0a0a0a] bg-[#f9f9f9] flex items-center gap-1.5 font-sans">
                        <span>🔗</span> 4 nav links
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#e5e5e5] pt-3">
                    <p className="text-[11px] text-[#737373] mb-2 font-mono uppercase tracking-wider">Suggested action</p>
                    <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-btn p-2.5 text-[11px] text-[#0a0a0a] font-normal leading-normal">
                      Fill 'Name' field → type your name
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-[#16a34a] font-mono font-medium flex items-center gap-1">
                  <span>🔒</span> 0 bytes sent
                </div>
              </div>

              {/* Animated scan line */}
              <div className="absolute left-0 right-0 h-[1.5px] bg-[#0a0a0a] opacity-20 pointer-events-none animate-scan z-10" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. LOGOS / USED BY */}
      <section className="w-full py-12 border-t border-b border-[#e5e5e5] bg-white flex flex-col items-center">
        <div className="w-full max-w-[1100px] px-6 text-center">
          <p className="text-[12px] font-sans font-normal uppercase tracking-wider text-[#737373] mb-6">Recognised by</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            <span className="font-sans font-semibold text-lg text-[#d4d4d4] hover:text-[#0a0a0a] transition-colors duration-150 select-none">ISRO</span>
            <span className="font-sans font-semibold text-lg text-[#d4d4d4] hover:text-[#0a0a0a] transition-colors duration-150 select-none">AICTE</span>
            <span className="font-sans font-semibold text-lg text-[#d4d4d4] hover:text-[#0a0a0a] transition-colors duration-150 select-none">SIH 2026</span>
            <span className="font-sans font-semibold text-lg text-[#d4d4d4] hover:text-[#0a0a0a] transition-colors duration-150 select-none">Smart Automation</span>
            <span className="font-sans font-semibold text-lg text-[#d4d4d4] hover:text-[#0a0a0a] transition-colors duration-150 select-none">Atria Institute</span>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-32 w-full flex flex-col items-center bg-white">
        <div className="w-full max-w-[1100px] px-6">
          
          <div className="text-center mb-20">
            <h2 className="font-serif text-[40px] text-[#0a0a0a] tracking-tight mb-4">Four steps to a smarter browser</h2>
            <p className="font-sans text-[16px] text-[#737373] max-w-[480px] mx-auto">
              DataVeil handles perception. You keep control.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Steps Left List */}
            <div className="lg:col-span-6 space-y-10">
              {/* Step 1 */}
              <div 
                className={`pl-5 border-l-2 transition-all duration-150 cursor-pointer ${
                  activeStep === 0 ? 'border-[#0a0a0a]' : 'border-[#e5e5e5]'
                }`}
                onClick={() => setActiveStep(0)}
              >
                <div className="text-[13px] font-mono text-[#737373] mb-1">01</div>
                <h3 className={`text-lg font-medium mb-2 ${activeStep === 0 ? 'text-[#0a0a0a]' : 'text-neutral-400'}`}>Open any webpage</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  Navigate to any site in Chrome. DataVeil works on every page — forms, dashboards, portals, anything.
                </p>
              </div>

              {/* Step 2 */}
              <div 
                className={`pl-5 border-l-2 transition-all duration-150 cursor-pointer ${
                  activeStep === 1 ? 'border-[#0a0a0a]' : 'border-[#e5e5e5]'
                }`}
                onClick={() => setActiveStep(1)}
              >
                <div className="text-[13px] font-mono text-[#737373] mb-1">02</div>
                <h3 className={`text-lg font-medium mb-2 ${activeStep === 1 ? 'text-[#0a0a0a]' : 'text-neutral-400'}`}>Click the extension icon</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  DataVeil takes a screenshot locally. Nothing is transmitted. The image stays in your browser's memory.
                </p>
              </div>

              {/* Step 3 */}
              <div 
                className={`pl-5 border-l-2 transition-all duration-150 cursor-pointer ${
                  activeStep === 2 ? 'border-[#0a0a0a]' : 'border-[#e5e5e5]'
                }`}
                onClick={() => setActiveStep(2)}
              >
                <div className="text-[13px] font-mono text-[#737373] mb-1">03</div>
                <h3 className={`text-lg font-medium mb-2 ${activeStep === 2 ? 'text-[#0a0a0a]' : 'text-neutral-400'}`}>Vision model runs on your GPU</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  A quantized model runs via WebGPU + Transformers.js. Buttons, inputs, and links are detected in under a second.
                </p>
              </div>

              {/* Step 4 */}
              <div 
                className={`pl-5 border-l-2 transition-all duration-150 cursor-pointer ${
                  activeStep === 3 ? 'border-[#0a0a0a]' : 'border-[#e5e5e5]'
                }`}
                onClick={() => setActiveStep(3)}
              >
                <div className="text-[13px] font-mono text-[#737373] mb-1">04</div>
                <h3 className={`text-lg font-medium mb-2 ${activeStep === 3 ? 'text-[#0a0a0a]' : 'text-neutral-400'}`}>Agent acts or assists</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  DataVeil fills forms, suggests clicks, or explains what it sees. You decide what happens next.
                </p>
              </div>
            </div>

            {/* Stepper Right Panel Terminal */}
            <div className="lg:col-span-6">
              <div className="border border-[#e5e5e5] rounded-[12px] bg-[#f9f9f9] p-6 flex flex-col justify-between h-[360px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                {/* Console */}
                <div className="bg-[#0a0a0a] rounded-[8px] p-5 font-mono text-[13px] text-[#a3a3a3] flex-1 flex flex-col justify-start space-y-1.5 overflow-hidden">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="flex items-center">
                      <span className={i === terminalLines.length - 1 ? 'typewriter-cursor pr-1 text-white' : ''}>
                        {line}
                      </span>
                    </div>
                  ))}
                  {terminalLines.length === 0 && (
                    <div className="typewriter-cursor w-2 h-4 text-white">&gt; </div>
                  )}
                </div>

                {/* Local Status Indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a]" />
                    <span className="text-[12px] font-sans font-medium text-[#16a34a]">Model running locally</span>
                  </div>
                  <button 
                    onClick={() => setTerminalLines([])}
                    className="text-[11px] font-sans font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors"
                  >
                    Reset Terminal log
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Line Divider */}
      <div className="w-full h-[1px] bg-[#e5e5e5]" />

      {/* 5. VIDEO SECTION */}
      <section className="py-32 w-full flex flex-col items-center bg-[#ffffff]">
        <div className="w-full max-w-[1100px] px-6 flex flex-col items-center text-center">
          
          <h2 className="font-serif text-[40px] text-[#0a0a0a] tracking-tight mb-4">Watch it work</h2>
          <p className="font-sans text-[16px] text-[#737373] max-w-[440px] mb-12">
            A 90-second walkthrough of DataVeil detecting and acting on a live government form.
          </p>

          {/* Interactive Player Mockup */}
          <div className="w-full max-w-[800px] border border-[#e5e5e5] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-[#0a0a0a] p-1">
            <div className="w-full aspect-video bg-[#0a0a0a] rounded-[12px] relative flex flex-col items-center justify-center p-6 text-left select-none overflow-hidden">
              
              {/* Play symbol center overlay */}
              <div className="absolute inset-0 bg-[#0a0a0f]/20 hover:bg-[#0a0a0f]/10 transition-all flex items-center justify-center cursor-pointer group z-10">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-[4px] border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105">
                  <Play className="w-6 h-6 fill-white text-white ml-1" />
                </div>
              </div>

              {/* Dynamic screen display */}
              {videoScene === 0 && (
                <div className="text-center max-w-sm space-y-4 text-white z-0 mt-8">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto text-white">
                    <Chrome className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-sans font-medium text-sm">Download Extension</h4>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    DataVeil loads as a standard developer tool unpacked folder or direct Chrome store release.
                  </p>
                </div>
              )}

              {videoScene === 1 && (
                <div className="w-full h-full flex flex-col justify-between text-white z-0 p-4 border border-white/5 bg-[#111111] rounded-[8px]">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[11px] font-mono text-white/50">isro.gov.in/portal/login</span>
                    <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">Capturing local view</span>
                  </div>
                  <div className="space-y-2.5 py-4">
                    <div className="h-6 bg-white/5 rounded border border-white/10 flex items-center px-3 text-[10px] font-mono text-[#a3a3a3]">
                      Detected Input Box: UID_MEMBER_1 (Clearance Required)
                    </div>
                    <div className="h-6 bg-white/5 rounded border border-white/10 flex items-center px-3 text-[10px] font-mono text-[#a3a3a3]">
                      Detected Button: SUBMIT_PROPOSAL_VERIFY
                    </div>
                  </div>
                  <div className="h-1 bg-[#16a34a] w-full rounded animate-pulse" />
                </div>
              )}

              {videoScene === 2 && (
                <div className="text-center max-w-sm space-y-4 text-white z-0 mt-8">
                  <div className="w-12 h-12 bg-[#16a34a]/10 border border-[#16a34a]/30 rounded-xl flex items-center justify-center mx-auto text-[#16a34a]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans font-medium text-sm">Automated Autofill Form Filled</h4>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    UI fields recognized, credentials populated in safety sandbox, transaction complete in 0.8 seconds.
                  </p>
                </div>
              )}

              {/* Sub-bar captions */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[13px] text-[#a3a3a3] z-20">
                <span className="font-sans font-normal">DataVeil Demo · {videoScene === 0 ? '1:32' : videoScene === 1 ? '1:02' : '0:22'}</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Video Scene Selection Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button 
              onClick={() => setVideoScene(0)}
              className={`px-4 py-2 border rounded-pill text-[13px] transition-all duration-150 ${
                videoScene === 0 ? 'border-[#0a0a0a] text-[#0a0a0a] bg-neutral-50' : 'border-[#e5e5e5] text-[#737373] hover:border-[#0a0a0a]'
              }`}
            >
              0:00 — Install the extension
            </button>
            <button 
              onClick={() => setVideoScene(1)}
              className={`px-4 py-2 border rounded-pill text-[13px] transition-all duration-150 ${
                videoScene === 1 ? 'border-[#0a0a0a] text-[#0a0a0a] bg-neutral-50' : 'border-[#e5e5e5] text-[#737373] hover:border-[#0a0a0a]'
              }`}
            >
              0:34 — Scan a government form
            </button>
            <button 
              onClick={() => setVideoScene(2)}
              className={`px-4 py-2 border rounded-pill text-[13px] transition-all duration-150 ${
                videoScene === 2 ? 'border-[#0a0a0a] text-[#0a0a0a] bg-neutral-50' : 'border-[#e5e5e5] text-[#737373] hover:border-[#0a0a0a]'
              }`}
            >
              1:10 — Agent fills it automatically
            </button>
          </div>

        </div>
      </section>

      {/* Decorative Line Divider */}
      <div className="w-full h-[1px] bg-[#e5e5e5]" />

      {/* 6. FEATURES */}
      <section id="features" className="py-32 w-full flex flex-col items-center bg-white">
        <div className="w-full max-w-[1100px] px-6">
          
          <div className="mb-16">
            <h2 className="font-serif text-[40px] text-[#0a0a0a] tracking-tight mb-4">Everything on your device</h2>
          </div>

          {/* Asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch">
            
            {/* Row 1: Wide Card (6/6 columns) */}
            <div className="md:col-span-6 p-8 bg-[#f9f9f9] border border-[#e5e5e5] rounded-card hover:border-[#0a0a0a] transition-all duration-150 min-h-[220px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-[480px]">
                <h3 className="font-sans font-medium text-lg text-[#0a0a0a] mb-3">On-device vision inference</h3>
                <p className="text-[14px] text-[#737373] leading-relaxed">
                  A quantized moondream2 model runs entirely inside your Chrome tab via Transformers.js and WebGPU. No round-trip to any server. Inference in under 800ms on a mid-range laptop.
                </p>
              </div>
              <div className="bg-white border border-[#e5e5e5] rounded-[6px] p-4 flex-1 w-full max-w-lg overflow-x-auto text-[11px] font-mono text-[#0a0a0a]">
                <code>{"const model = await pipeline('image-to-text', 'moondream2', { device: 'webgpu' });"}</code>
              </div>
            </div>

            {/* Row 2: Two equal cards (3/6 columns each) */}
            <div className="md:col-span-3 p-8 bg-white border border-[#e5e5e5] rounded-card hover:border-[#0a0a0a] transition-all duration-150 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-btn bg-[#f9f9f9] border border-[#e5e5e5] flex items-center justify-center mb-6">
                  {/* Eye Outline SVG */}
                  <svg className="w-4.5 h-4.5 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="font-sans font-medium text-lg text-[#0a0a0a] mb-2">Screenshot-based perception</h3>
                <p className="text-[14px] text-[#737373] leading-relaxed">
                  Sees your screen exactly as you do — rendered pixels, not DOM. Works on canvas apps, SPAs, and iframes where HTML parsing fails.
                </p>
              </div>
            </div>

            <div className="md:col-span-3 p-8 bg-white border border-[#e5e5e5] rounded-card hover:border-[#0a0a0a] transition-all duration-150 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-btn bg-[#f9f9f9] border border-[#e5e5e5] flex items-center justify-center mb-6">
                  {/* Shield SVG */}
                  <svg className="w-4.5 h-4.5 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                </div>
                <h3 className="font-sans font-medium text-lg text-[#0a0a0a] mb-2">Structural metadata only (if sent)</h3>
                <p className="text-[14px] text-[#737373] leading-relaxed">
                  When server assistance is needed, only field names and element counts leave your device. The screenshot is never transmitted.
                </p>
              </div>
            </div>

            {/* Row 3: Three narrower cards (2/6 columns each) */}
            <div className="md:col-span-2 p-8 bg-white border border-[#e5e5e5] rounded-card hover:border-[#0a0a0a] transition-all duration-150">
              <h3 className="font-sans font-medium text-base text-[#0a0a0a] mb-2">Works on any website</h3>
              <p className="text-[13px] text-[#737373] leading-relaxed">
                No integration required from the site owner. Operates fully locally on legacy layouts, internal gateways, and complex forms.
              </p>
            </div>

            <div className="md:col-span-2 p-8 bg-white border border-[#e5e5e5] rounded-card hover:border-[#0a0a0a] transition-all duration-150">
              <h3 className="font-sans font-medium text-base text-[#0a0a0a] mb-2">Sub-second detection</h3>
              <p className="text-[13px] text-[#737373] leading-relaxed">
                WebGPU acceleration keeps inference under 800ms, bringing real-time visual UI processing offline to the edge.
              </p>
            </div>

            <div className="md:col-span-2 p-8 bg-white border border-[#e5e5e5] rounded-card hover:border-[#0a0a0a] transition-all duration-150">
              <h3 className="font-sans font-medium text-base text-[#0a0a0a] mb-2">Open source</h3>
              <p className="text-[13px] text-[#737373] leading-relaxed">
                Every layer of the stack is auditable. Built for the ISRO Smart India Hackathon 2026, ensuring structural transparency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PRIVACY ARCHITECTURE — INVERTED DARK SECTION */}
      <section id="privacy" className="w-full bg-[#0a0a0a] text-white py-32 flex flex-col items-center">
        <div className="w-full max-w-[1100px] px-6">
          
          <div className="max-w-[520px] mb-20 text-left">
            <h2 className="font-serif text-[40px] text-white tracking-tight mb-4">
              Privacy isn't a feature. <br />
              <span className="italic text-[#737373]">It's the architecture.</span>
            </h2>
            <p className="font-sans text-[16px] text-[#737373] leading-relaxed">
              Every other browser agent sends your screen to a cloud server. DataVeil processes vision entirely on-device. Here is exactly what happens.
            </p>
          </div>

          {/* Three column pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#262626] divide-y md:divide-y-0 md:divide-x divide-[#262626] mb-16">
            
            {/* Col 1 */}
            <div className="py-8 md:py-12 md:pr-10">
              <h3 className="font-sans font-medium text-base text-white mb-6 uppercase tracking-wider text-[11px] font-mono text-[#737373]">What you see</h3>
              <div className="space-y-4 text-sm text-[#a3a3a3]">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] mt-2" />
                  <p>Screenshot captured in browser memory</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] mt-2" />
                  <p>Passed to local model process</p>
                </div>
              </div>
              <div className="mt-8 text-[12px] font-mono text-[#16a34a] font-medium flex items-center gap-1.5">
                <span>🔒</span> Stays in Chrome. Always.
              </div>
            </div>

            {/* Col 2 */}
            <div className="py-8 md:py-12 md:px-10">
              <h3 className="font-sans font-medium text-base text-white mb-6 uppercase tracking-wider text-[11px] font-mono text-[#737373]">What DataVeil does</h3>
              <div className="space-y-4 text-sm text-[#a3a3a3]">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] mt-2" />
                  <p>Vision model detects UI elements</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] mt-2" />
                  <p>Agent reasons about next action</p>
                </div>
              </div>
              <div className="mt-8 text-[12px] font-mono text-[#16a34a] font-medium flex items-center gap-1.5">
                <span>🔒</span> Runs in your GPU. No APIs called.
              </div>
            </div>

            {/* Col 3 */}
            <div className="py-8 md:py-12 md:pl-10">
              <h3 className="font-sans font-medium text-base text-white mb-6 uppercase tracking-wider text-[11px] font-mono text-[#737373]">What leaves your device</h3>
              <div className="space-y-4 text-sm text-[#a3a3a3]">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] mt-2" />
                  <p>Optional: field names + element count</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#737373] mt-2" />
                  <p>Never: screenshots, raw pixels, visual data</p>
                </div>
              </div>
              <div className="mt-8 text-[12px] font-mono text-[#16a34a] font-medium flex items-center gap-1.5">
                <span>🔒</span> 0 bytes of visual data. Ever.
              </div>
            </div>

          </div>

          {/* Comparison callout */}
          <div className="border border-[#262626] rounded-card p-6 md:p-8 bg-[#111111] max-w-[640px] mx-auto">
            <div className="space-y-4 text-[14px] text-[#737373]">
              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span>ChatGPT Computer Use</span>
                <span className="text-[#a3a3a3]">sends your screen to OpenAI servers.</span>
              </div>
              <div className="flex justify-between border-b border-[#262626] pb-2">
                <span>Gemini Nano (cloud mode)</span>
                <span className="text-[#a3a3a3]">sends your screen to Google servers.</span>
              </div>
              <div className="flex justify-between items-center text-white font-medium pt-1">
                <span>DataVeil</span>
                <span className="text-white">sends your screen nowhere.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. HOW TO INSTALL */}
      <section id="install" className="py-32 w-full flex flex-col items-center bg-white">
        <div className="w-full max-w-[1100px] px-6">
          
          <div className="text-center mb-20">
            <h2 className="font-serif text-[40px] text-[#0a0a0a] tracking-tight mb-4">Up and running in 60 seconds</h2>
          </div>

          {/* 3 Step horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative items-start">
            
            {/* Step 1 */}
            <div className="space-y-6 relative z-10 bg-white">
              <div className="space-y-2">
                <div className="text-[13px] font-mono text-[#737373]">STEP 1</div>
                <h3 className="text-[18px] font-sans font-medium text-[#0a0a0a]">Visit Chrome Web Store</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  Go to the extensions index and search for the DataVeil repository distribution.
                </p>
              </div>

              {/* Mockup */}
              <div className="border border-[#e5e5e5] rounded-card p-4 bg-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-btn bg-[#f9f9f9] border border-[#e5e5e5] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0a0a0a]">DataVeil</h4>
                    <p className="text-[10px] text-[#737373]">★★★★★ 5.0 rating</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-[#0a0a0a] text-white text-[11px] font-medium rounded-btn">Add</button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6 relative z-10 bg-white">
              <div className="space-y-2">
                <div className="text-[13px] font-mono text-[#737373]">STEP 2</div>
                <h3 className="text-[18px] font-sans font-medium text-[#0a0a0a]">Click Add to Chrome</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  Authorize the permission prompt. The extension files install in a single click.
                </p>
              </div>

              {/* Mockup */}
              <div className="border border-[#e5e5e5] rounded-card p-4 bg-[#f9f9f9] text-left space-y-3 max-w-[280px] mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                <p className="text-xs font-bold text-[#0a0a0a]">Add "DataVeil"?</p>
                <p className="text-[10px] text-[#737373]">It will verify layout layers locally on pages.</p>
                <div className="flex gap-2 justify-end pt-1">
                  <button className="px-2 py-1 bg-white border border-[#e5e5e5] text-[10px] text-[#0a0a0a] rounded-btn">Cancel</button>
                  <button className="px-2.5 py-1 bg-[#0a0a0a] text-white text-[10px] rounded-btn">Add extension</button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-6 relative z-10 bg-white">
              <div className="space-y-2">
                <div className="text-[13px] font-mono text-[#737373]">STEP 3</div>
                <h3 className="text-[18px] font-sans font-medium text-[#0a0a0a]">Open on any page</h3>
                <p className="text-[15px] text-[#737373] leading-relaxed">
                  Click the extension pin in your toolbar to activate scanning layout parameters offline.
                </p>
              </div>

              {/* Mockup */}
              <div className="border border-[#e5e5e5] rounded-card p-4 bg-white flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f9f9f9] border border-[#e5e5e5] flex items-center justify-center animate-pulse-ring">
                    <svg className="w-3.5 h-3.5 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono text-[#0a0a0a]">Extension Pinned & Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Line Divider */}
      <div className="w-full h-[1px] bg-[#e5e5e5]" />

      {/* 9. FAQ */}
      <section id="faq" className="py-32 w-full flex flex-col items-center bg-[#ffffff]">
        <div className="w-full max-w-[680px] px-6">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-[40px] text-[#0a0a0a] tracking-tight mb-4">Questions</h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ Item 1 */}
            <div className="border-b border-[#e5e5e5]">
              <button 
                onClick={() => toggleFaq(0)} 
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans font-medium text-[16px] text-[#0a0a0a]">Does DataVeil send my screenshots to the cloud?</span>
                <span className="text-[20px] font-light text-[#737373] ml-4">{openFaq === 0 ? '−' : '+'}</span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-200" 
                style={{ maxHeight: openFaq === 0 ? '200px' : '0' }}
              >
                <p className="pb-5 text-[15px] text-[#737373] leading-relaxed">
                  Never. The screenshot is captured in your browser's local memory, processed by a model running on your GPU via WebGPU, and discarded after inference. No pixel of your screen ever leaves your device.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-[#e5e5e5]">
              <button 
                onClick={() => toggleFaq(1)} 
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans font-medium text-[16px] text-[#0a0a0a]">Which browsers are supported?</span>
                <span className="text-[20px] font-light text-[#737373] ml-4">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-200" 
                style={{ maxHeight: openFaq === 1 ? '200px' : '0' }}
              >
                <p className="pb-5 text-[15px] text-[#737373] leading-relaxed">
                  Chrome and Edge (any Chromium-based browser with WebGPU enabled). Firefox support is planned once WebGPU reaches stable release there.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-[#e5e5e5]">
              <button 
                onClick={() => toggleFaq(2)} 
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans font-medium text-[16px] text-[#0a0a0a]">What AI model does it use?</span>
                <span className="text-[20px] font-light text-[#737373] ml-4">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-200" 
                style={{ maxHeight: openFaq === 2 ? '200px' : '0' }}
              >
                <p className="pb-5 text-[15px] text-[#737373] leading-relaxed">
                  DataVeil uses a quantized build of moondream2 (~1.8GB), loaded via Transformers.js. On WebGPU-capable hardware, inference runs in under 800ms.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-[#e5e5e5]">
              <button 
                onClick={() => toggleFaq(3)} 
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans font-medium text-[16px] text-[#0a0a0a]">Does it work without internet?</span>
                <span className="text-[20px] font-light text-[#737373] ml-4">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-200" 
                style={{ maxHeight: openFaq === 3 ? '200px' : '0' }}
              >
                <p className="pb-5 text-[15px] text-[#737373] leading-relaxed">
                  Yes. Once the model is downloaded on first install (one-time, ~1.8GB), DataVeil works fully offline. No internet connection is required.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-[#e5e5e5]">
              <button 
                onClick={() => toggleFaq(4)} 
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans font-medium text-[16px] text-[#0a0a0a]">Is it free?</span>
                <span className="text-[20px] font-light text-[#737373] ml-4">{openFaq === 4 ? '−' : '+'}</span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-200" 
                style={{ maxHeight: openFaq === 4 ? '200px' : '0' }}
              >
                <p className="pb-5 text-[15px] text-[#737373] leading-relaxed">
                  Yes. DataVeil is fully open-source and free. Built for ISRO's Smart India Hackathon 2026 — the code is auditable by anyone.
                </p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="border-b border-[#e5e5e5]">
              <button 
                onClick={() => toggleFaq(5)} 
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-sans font-medium text-[16px] text-[#0a0a0a]">How is this different from browser-use or Claude for Chrome?</span>
                <span className="text-[20px] font-light text-[#737373] ml-4">{openFaq === 5 ? '−' : '+'}</span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-200" 
                style={{ maxHeight: openFaq === 5 ? '200px' : '0' }}
              >
                <p className="pb-5 text-[15px] text-[#737373] leading-relaxed">
                  Both browser-use and Claude for Chrome send your screen to cloud APIs. DataVeil's core difference is the on-device inference pipeline. Your visual context never leaves your machine.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="w-full py-16 border-t border-[#e5e5e5] bg-white flex flex-col items-center">
        <div className="w-full max-w-[1100px] px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-[#f5f5f5]">
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#0a0a0a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="font-sans font-medium text-[15px] tracking-tight text-[#0a0a0a]">DataVeil</span>
              </a>
              <p className="font-sans text-[13px] text-[#737373]">
                Your browser sees. Your data stays.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-[13px] text-[#737373] font-sans">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#0a0a0a] transition-colors">GitHub</a>
              <a href="#faq" className="hover:text-[#0a0a0a] transition-colors">Docs</a>
              <a href="#" className="hover:text-[#0a0a0a] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0a0a0a] transition-colors">SIH 2026</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-[12px] font-sans text-[#a3a3a3]">
            <div>
              Built by <span className="text-[#737373]">Team IndicVision</span> for ISRO Smart India Hackathon 2026.
            </div>
            <div className="flex items-center gap-1.5">
              <span>Powered by</span>
              <code className="font-mono text-neutral-500 border border-[#e5e5e5] px-1 py-0.2 bg-[#f9f9f9] rounded">Transformers.js</code>
              <span>and</span>
              <code className="font-mono text-neutral-500 border border-[#e5e5e5] px-1 py-0.2 bg-[#f9f9f9] rounded">WebGPU</code>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
