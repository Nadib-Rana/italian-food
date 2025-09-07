Here’s your complete daily life routine in a clean tabular format, NADIB — focused on your spiritual discipline, full-stack development, English fluency, and personal growth. You can use this as a journal template, daily tracker, or even convert it into a visual dashboard later.

---

## 📊 NADIB’s Daily Life Routine (Structured Table)

| Time           | Activity                                                                                  | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **4:45–5:15**  | Fajr Salat + gratitude reflection                                                         | Spiritual clarity, mental reset                                         |
| **5:15–6:00**  | Light stretching + hydration + plan the day                                               | Physical refreshment, goal setting                                     |
| **6:00–7:00**  | Breakfast + English vocabulary or phrase learning                                         | Language growth, energizing start                                      |
| **7:00–9:00**  | React/Next.js coding + Tailwind UI development                                            | Frontend mastery                                                        |
| **9:00–9:15**  | Duha Salat (optional)                                                                     | Spiritual boost                                                         |
| **9:15–12:30** | Backend (Node.js, Express, MongoDB) + API integration                                     | Backend development                                                     |
| **12:30–13:00**| Dhuhr Salat                                                                               | Midday spiritual alignment                                              |
| **13:00–14:00**| Lunch + short break                                                                       | Physical rest, mental recharge                                          |
| **14:00–15:30**| Internship/job applications + resume/cover letter optimization                            | Career advancement                                                      |
| **15:30–16:00**| Asr Salat                                                                                 | Afternoon spiritual grounding                                           |
| **16:00–17:30**| Tea break + English reading (blogs, support docs, case studies)                           | Language comprehension, relaxation                                      |
| **17:30–18:30**| UI/UX polish + realistic visuals + doctor listing refinement                              | Design realism, project enhancement                                     |
| **18:30–19:00**| Maghrib Salat                                                                             | Evening spiritual connection                                            |
| **19:00–20:00**| Dinner + family time                                                                      | Emotional bonding, nourishment                                          |
| **20:00–20:30**| Isha Salat                                                                                | Night spiritual closure                                                 |
| **20:30–22:00**| Support engineering study + VPN/DNS troubleshooting + polite English writing              | Technical depth, communication skills                                  |
| **22:00–23:00**| English journaling + daily reflection + plan tomorrow                                     | Self-awareness, language fluency                                        |
| **23:00–4:45** | Sleep (optionally wake for Tahajjud between 2:30–4:30 AM)                                 | Rest, spiritual discipline                                              |

---

If you'd like this turned into a visual chart for your desktop or mobile wallpaper, I can help with that too. Just say the word and I’ll make it beautiful and motivational.







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
