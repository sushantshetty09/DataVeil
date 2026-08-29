# DataVeil — Privacy-First On-Device AI Browser Assistant

> **ISRO Smart India Hackathon (SIH) 2026** · Problem Statement ID: **PS-26171**  
> *"Your browser sees. Your data stays."*

---

## 👁️ Overview

**DataVeil** is a privacy-first Chrome Extension and AI assistant built specifically for on-device visual layout recognition and browser automation. Unlike standard browser agents (such as ChatGPT Computer Use or Claude for Chrome) that transmit raw screenshots to external cloud servers, DataVeil executes quantized vision models (such as `moondream2`) **entirely inside the browser memory sandbox using WebGPU and Transformers.js**.

Zero visual bits or screenshots ever leave your machine.

---

## ✨ Key Features

- **⚡ 100% On-Device Inference**: Powered by `WebGPU` and `Transformers.js` for sub-second UI element detection without API keys or cloud dependencies.
- **🔒 Zero-Knowledge Architecture**: Screenshots stay in browser RAM and are purged instantly after perception inference.
- **🧩 Universal Compatibility**: Works on any web page, canvas web app, or complex form without requiring integration from the website owner.
- **🤖 Smart Action Suggestions**: Detects input fields, buttons, and navigation nodes automatically to assist with form filling and automation.
- **🌐 Offline Capable**: Once the model weights are loaded during initial installation, DataVeil functions 100% offline.

---

## 🎨 Design Philosophy

DataVeil adheres to an **editorial, Notion-inspired monochrome design system**:
- Pure `#ffffff` background with `#0a0a0a` text and structural `1px solid #e5e5e5` borders.
- Typographic hierarchy featuring `Instrument Serif` (display font with italic emphasis) and `Inter` (body font).
- Single dark inverted architectural section for Privacy Deep-Dive analysis.
- Zero unnecessary dependencies, framer-motion, or generic AI UI templates.

---

## 🛠️ Technical Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **ML Runtime**: `Transformers.js` + `WebGPU` (`moondream2`)
- **Deploy Target**: Vercel / Netlify (SPA compatible)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js `v18.0.0` or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sushantshetty09/DataVeil.git
cd DataVeil

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Deployment Instructions

### Deploy to Vercel

DataVeil includes pre-configured [`vercel.json`](./vercel.json) settings.

1. Import your GitHub repository (`sushantshetty09/DataVeil`) into Vercel.
2. Select **Vite** as the framework preset.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**.

### Deploy to Netlify

DataVeil includes pre-configured [`netlify.toml`](./netlify.toml) settings.

1. Connect your repository (`sushantshetty09/DataVeil`) in the Netlify Dashboard.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📜 License

Built by **Team IndicVision** for the ISRO Smart India Hackathon 2026 under the MIT License.
