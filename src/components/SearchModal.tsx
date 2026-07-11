"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { searchIndex } from "@/data/searchIndex";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuery("");
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle clicking outside modal to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle search matching and ranking
  const results = useMemo(() => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) return [];

    const queryWords = cleanQuery.split(/\s+/);
    return searchIndex
      .map((item) => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const descLower = item.description.toLowerCase();
        const catLower = item.category.toLowerCase();
        
        let allWordsMatch = true;
        for (const word of queryWords) {
          let wordMatch = false;
          
          if (titleLower.includes(word)) {
            wordMatch = true;
            if (titleLower.startsWith(word)) {
              score += 15;
            } else {
              score += 8;
            }
          }
          if (descLower.includes(word)) {
            wordMatch = true;
            score += 3;
          }
          if (catLower.includes(word)) {
            wordMatch = true;
            score += 4;
          }
          
          // Match keywords
          for (const kw of item.keywords) {
            if (kw.toLowerCase().includes(word)) {
              wordMatch = true;
              score += 5;
              break;
            }
          }
          
          if (!wordMatch) {
            allWordsMatch = false;
            break;
          }
        }
        
        return { item, allWordsMatch, score };
      })
      .filter((res) => res.allWordsMatch)
      .sort((a, b) => b.score - a.score)
      .map((res) => res.item);
  }, [query]);

  // Handle keyboard navigation inside search overlay
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          router.push(results[selectedIndex].href);
          onClose();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, results, selectedIndex, router, onClose]);

  // Keep selected item visible in scrolling container
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const activeEl = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        const container = resultsRef.current;
        const activeTop = activeEl.offsetTop;
        const activeHeight = activeEl.offsetHeight;
        const containerHeight = container.clientHeight;
        const containerScrollTop = container.scrollTop;

        if (activeTop < containerScrollTop) {
          container.scrollTop = activeTop;
        } else if (activeTop + activeHeight > containerScrollTop + containerHeight) {
          container.scrollTop = activeTop + activeHeight - containerHeight;
        }
      }
    }
  }, [selectedIndex, results]);

  function highlightText(text: string, searchVal: string) {
    if (!searchVal.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${searchVal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-brand-yellow/30 text-brand-maroon font-bold rounded-sm px-0.5">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 md:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all flex flex-col max-h-[70vh] md:max-h-[75vh]"
      >
        {/* Search Header */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100 bg-slate-50">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-brand-maroon shrink-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 font-medium text-base md:text-lg focus:outline-none"
            placeholder="Search programs, pages, certificates..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button 
            onClick={onClose}
            className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-slate-600 bg-slate-200/50 hover:bg-slate-200 px-2.5 py-1.5 rounded-md transition"
          >
            ESC
          </button>
        </div>

        {/* Results / Empty View */}
        <div className="flex-1 overflow-y-auto min-h-[200px]">
          {query.trim() === "" ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-maroon/5 flex items-center justify-center text-brand-maroon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wide">Quick Navigation Search</h3>
              <p className="text-slate-400 text-xs max-w-sm">
                Type what you are looking for (e.g. &quot;BCA&quot;, &quot;NAAC&quot;, &quot;Hostel&quot;, &quot;Principal&quot;) to immediately locate documents and syllabus outlines.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-700 text-sm">No results found for &quot;{query}&quot;</h3>
              <p className="text-slate-400 text-xs">
                Check spelling or try using alternative keywords.
              </p>
            </div>
          ) : (
            <div ref={resultsRef} className="py-2.5">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  className={`px-6 py-4 flex flex-col justify-center cursor-pointer border-b border-slate-50 transition duration-150 relative ${
                    idx === selectedIndex 
                      ? "bg-slate-50 border-l-4 border-brand-maroon" 
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                      {highlightText(item.title, query)}
                    </span>
                    <span className="text-[10px] font-extrabold tracking-widest text-brand-maroon bg-brand-maroon/5 px-2 py-0.5 rounded-full uppercase shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs mt-1 line-clamp-1">
                    {highlightText(item.description, query)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="hidden sm:flex items-center justify-between px-6 py-3 border-t border-slate-100 bg-slate-50 text-[10px] font-bold text-slate-400 tracking-wider">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-white border border-slate-200 shadow-sm px-1.5 py-0.5 rounded">↑↓</kbd> to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-white border border-slate-200 shadow-sm px-1.5 py-0.5 rounded">Enter</kbd> to select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-white border border-slate-200 shadow-sm px-1.5 py-0.5 rounded">Esc</kbd> to close
            </span>
          </div>
          <span className="text-brand-maroon/60">SCP Search Engine</span>
        </div>
      </div>
    </div>
  );
}
