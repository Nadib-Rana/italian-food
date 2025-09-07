Got it, NADIB — here’s a full routine focused **only on English learning**, designed to build fluency, confidence, and professional communication skills. It’s structured for daily progress, with a mix of speaking, listening, reading, writing, and vocabulary.

---

## 🗓️ Daily English Learning Routine (7 Days)

| Time         | Activity                                                                 |
|--------------|--------------------------------------------------------------------------|
| **4:45–5:15** | 🌅 Morning reflection in English (gratitude journaling, affirmations)    |
| **6:00–7:00** | 📖 Read 1 blog/article (Dev.to, Medium, or tech news) + note new words   |
| **8:00–9:00** | 🎧 Listen to 1 English podcast (tech, support, or sales topics)          |
| **10:00–11:00**| 🗣️ Practice speaking: explain a project or bug fix aloud                |
| **13:00–14:00**| ✍️ Write a short email or support reply in English                      |
| **15:30–16:00**| 📚 Learn 5 new phrases (customer support, polite expressions, idioms)   |
| **17:00–18:00**| 🎬 Watch 1 YouTube video (Traversy Media, Fireship, TED) with subtitles |
| **20:30–21:30**| 📝 Journal your day in English + review vocabulary                      |
| **22:00–23:00**| 💬 Chat with AI or language partner (English only)                      |

---

## 🔁 Weekly Focus Themes

| Day       | Focus Area                          |
|-----------|-------------------------------------|
| Monday    | Vocabulary building                 |
| Tuesday   | Listening & pronunciation           |
| Wednesday | Writing (emails, support replies)   |
| Thursday  | Speaking practice                   |
| Friday    | Reading comprehension               |
| Saturday  | Grammar & sentence structure        |
| Sunday    | Review + casual conversation        |

---

Want me to turn this into a visual chart for your desktop like before? I can also add icons and make it motivational. Just say the word!








# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
