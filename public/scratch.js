const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\ANKUR\\Downloads\\kali\\public\\index.html', 'utf8');

// Replace body background and color
html = html.replace('color: #1f2937;', 'color: #f3f4f6;');
html = html.replace('background-color: #ffffff;', 'background-color: #030712;');

// bg-pattern
html = html.replace('radial-gradient(#e5e7eb 1px, transparent 1px)', 'radial-gradient(#1f2937 1px, transparent 1px)');
// hero-gradient
html = html.replace('linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 'linear-gradient(135deg, #030712 0%, #111827 100%)');
// glass-nav
html = html.replace('background: rgba(255, 255, 255, 0.9);', 'background: rgba(3, 7, 18, 0.8);');
html = html.replace('border-bottom: 1px solid rgba(229, 231, 235, 0.5);', 'border-bottom: 1px solid rgba(31, 41, 55, 0.5);');
// feature-card
html = html.replace('background: #ffffff;', 'background: #111827;');
html = html.replace('border: 1px solid #f3f4f6;', 'border: 1px solid #1f2937;');
html = html.replace('border-color: #e5e7eb;', 'border-color: #374151;');
html = html.replace('rgba(0, 0, 0, 0.08)', 'rgba(0, 0, 0, 0.5)');
// text-gradient
html = html.replace('linear-gradient(135deg, #111827, #4f46e5)', 'linear-gradient(135deg, #f8fafc, #818cf8)');

// general classes
html = html.replace(/bg-white/g, 'bg-gray-900');
html = html.replace(/bg-gray-50\/50/g, 'bg-gray-900/50');
html = html.replace(/bg-gray-50/g, 'bg-gray-950');
html = html.replace(/text-gray-900/g, 'text-white');
html = html.replace(/text-gray-800/g, 'text-gray-200');
html = html.replace(/text-gray-700/g, 'text-gray-300');
html = html.replace(/text-gray-600/g, 'text-gray-400');
html = html.replace(/border-gray-200/g, 'border-gray-800');
html = html.replace(/border-gray-300/g, 'border-gray-700');
html = html.replace(/border-gray-100/g, 'border-gray-800');
html = html.replace(/hover:bg-gray-100/g, 'hover:bg-gray-800');
html = html.replace(/hover:bg-gray-50/g, 'hover:bg-gray-800');
html = html.replace(/bg-brand-50\b/g, 'bg-brand-900/30');
html = html.replace(/border-brand-100/g, 'border-brand-800');
html = html.replace(/bg-brand-100/g, 'bg-brand-900/50');
html = html.replace(/text-brand-700/g, 'text-brand-300');
html = html.replace(/bg-gray-100/g, 'bg-gray-800');
html = html.replace(/bg-accent-100/g, 'bg-accent-900/30');
html = html.replace(/#e0e7ff/g, '#312e81');

fs.writeFileSync('c:\\Users\\ANKUR\\Downloads\\kali\\public\\index.html', html);
