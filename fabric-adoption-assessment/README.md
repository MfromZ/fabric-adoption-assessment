# Microsoft Fabric Adoption Assessment

An interactive self-assessment tool that helps organizations evaluate their Microsoft Fabric adoption maturity across 12 key areas defined in the [Microsoft Fabric Adoption Roadmap](https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap).

![Assessment Results](../docs/images/results-screenshot.png)

## What It Does

Organizations adopting Microsoft Fabric need a structured way to understand where they stand and what to improve. This app provides:

- **12-area maturity assessment** — Answer one question per area to rate your organization from Level 100 (Initial) to Level 500 (Excellent)
- **Radar chart visualization** — See your maturity profile at a glance across all areas
- **Complete roadmap to Level 500** — For each area, get all action items needed to progress from your current level to the highest maturity
- **Prioritized action plans** — Level 400 (Optimal) is highlighted as the primary target; Level 500 (Excellent) is marked as a stretch goal
- **Excel export** — Download a workbook with your summary, full action plan, and maturity level reference
- **Microsoft Planner export** — Download a CSV ready to import into Planner, with tasks, buckets, and priorities pre-configured

## Assessment Areas

| # | Area | Description |
|---|------|-------------|
| 1 | 🏛️ Data Culture | How data-driven is decision-making across the organization? |
| 2 | 👔 Executive Sponsorship | Is there active executive support for analytics initiatives? |
| 3 | 🎯 Business Alignment | Are analytics efforts aligned with business strategy? |
| 4 | 📊 Content Ownership & Management | Who owns and manages analytical content? |
| 5 | 📡 Content Delivery Scope | How broadly is analytical content delivered? |
| 6 | ⭐ Center of Excellence | Is there a formal team driving adoption and best practices? |
| 7 | 🔒 Governance | Are data governance policies defined and enforced? |
| 8 | 🎓 Mentoring & User Enablement | How are users trained and supported? |
| 9 | 👥 Community of Practice | Is there an active analytics community? |
| 10 | 🛟 User Support | What support channels exist for analytics users? |
| 11 | ⚙️ System Oversight | How is the Fabric platform monitored and managed? |
| 12 | 🔄 Change Management | How are changes to analytics solutions managed? |

## Maturity Levels

| Level | Name | Description |
|-------|------|-------------|
| 100 | Initial | Ad-hoc, no formal processes |
| 200 | Repeatable | Some patterns emerging, limited consistency |
| 300 | Defined | Documented processes, organization-wide standards |
| 400 | **Optimal** 🎯 | Measured, optimized — **recommended target** |
| 500 | **Excellent** 🌟 | Continuous improvement, industry-leading |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later

### Run Locally

```bash
cd fabric-adoption-assessment
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

The output is in the `dist/` folder — a static site ready to deploy.

## Deploy to Azure

The recommended approach is **Azure Static Web Apps** (free tier available):

```bash
# Login to Azure
az login

# Create resource group
az group create --name rg-fabric-assessment --location westeurope

# Create Static Web App linked to your GitHub repo
az staticwebapp create \
  --name fabric-adoption-assessment \
  --resource-group rg-fabric-assessment \
  --source https://github.com/YOUR_USERNAME/fabric-adoption-assessment \
  --location westeurope \
  --branch main \
  --app-location "/fabric-adoption-assessment" \
  --output-location "dist" \
  --login-with-github
```

See the [Azure Static Web Apps docs](https://learn.microsoft.com/en-us/azure/static-web-apps/) for more options.

## Tech Stack

- **React 19** + **TypeScript** — UI framework
- **Vite** — Build tool and dev server
- **SheetJS (xlsx)** — Excel file generation
- **CSS custom properties** — Dark theme with Fabric-inspired design
- **SVG** — Radar chart (no charting library dependency)

## Project Structure

```
fabric-adoption-assessment/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.tsx    # Landing page
│   │   ├── ProgressBar.tsx      # Assessment progress indicator
│   │   ├── QuestionCard.tsx     # Single question with 5 maturity options
│   │   ├── RadarChart.tsx       # SVG radar chart visualization
│   │   └── ResultsPage.tsx      # Results, roadmap, and export section
│   ├── data/
│   │   └── assessmentData.ts    # 12 areas, questions, levels, action items
│   ├── utils/
│   │   ├── exportExcel.ts       # Excel workbook generation (3 sheets)
│   │   └── exportPlanner.ts     # Microsoft Planner CSV generation
│   ├── App.tsx                  # Main app state management
│   ├── index.css                # Dark theme styles
│   └── main.tsx                 # Entry point
└── package.json
```

## License

MIT

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
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
