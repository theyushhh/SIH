# 🌲 AI-powered FRA Atlas + WebGIS DSS for Forest Rights Act Monitoring

> **Smart India Hackathon Project** — Focused on Madhya Pradesh, Odisha, Telangana, Tripura

## 🚀 Features

- Interactive Mapbox map showing FRA claims (approved/pending/rejected)
- Legal AI Assistant powered by **Qwen** for FRA-related queries
- Decision Support System (DSS) for matching government schemes
- KPI dashboard & CSV export
- Fully responsive dark theme

## ⚙️ Setup

### Prerequisites

- Node.js 18+
- Supabase project with PostGIS enabled
- Mapbox account
- n8n Cloud account
- HuggingFace account (for Qwen inference)

### Environment Variables

Create `.env` in `/frontend`:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
VITE_MAPBOX_TOKEN=your_mapbox_token
VITE_N8N_WEBHOOK_URL=https://your-n8n-subdomain.n8n.cloud/webhook
