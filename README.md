# 🇮🇳 Wise Citizen Helper — सरकारी योजना खोजक

A beautiful React app to discover and explore Indian Government Schemes.

---

## ▶️ VS Code में कैसे चलाएं (How to Run)

### Step 1 — Prerequisites (एक बार)
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v18 या उससे ऊपर)
- [VS Code](https://code.visualstudio.com/)

### Step 2 — Folder खोलें
1. इस folder को VS Code में खोलें
2. **File → Open Folder** → `wise-citizen-helper` select करें

### Step 3 — Terminal में चलाएं
VS Code में Terminal खोलें (**Ctrl + `**) और ये commands चलाएं:

```bash
# Dependencies install करें (पहली बार)
npm install

# Development server start करें
npm run dev
```

### Step 4 — Browser में देखें
Terminal में एक link दिखेगा जैसे:
```
➜  Local:   http://localhost:5173/
```

उस link को Ctrl+Click करें या browser में paste करें ✅

---

## 📁 Project Structure

```
wise-citizen-helper/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top navigation + search
│   │   ├── CategoryFilter.jsx  # Filter buttons
│   │   ├── SchemeCard.jsx      # Individual scheme card
│   │   └── StatsBanner.jsx     # Stats overview
│   ├── data/
│   │   └── schemes.js          # All scheme data (edit here to add more)
│   ├── App.jsx                 # Main app
│   ├── main.jsx
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## ✏️ नई योजना कैसे जोड़ें

`src/data/schemes.js` file खोलें और `schemes` array में नई entry जोड़ें:

```js
{
  id: 9,
  name: 'योजना का नाम',
  nameEn: 'Scheme Name in English',
  category: 'kisan',  // kisan / mahila / shiksha / swasthya / awas / rozgar
  ministry: 'मंत्रालय का नाम',
  benefit: 'लाभ की जानकारी',
  description: 'योजना का विवरण...',
  eligibility: ['पात्रता 1', 'पात्रता 2'],
  documents: ['दस्तावेज 1', 'दस्तावेज 2'],
  link: 'https://official-website.gov.in',
  color: '#2980B9',
  tag: 'टैग',
},
```

## 🚀 Build for Production

```bash
npm run build
```
Output `dist/` folder में जाएगा।
