# Snap Sport - Configuración de Claude

## 🎯 Contexto del Proyecto
- **Monorepo:** Turborepo + npm workspaces
- **Framework:** Next.js 16 con TypeScript
- **Styling:** Tailwind CSS v4
- **Node:** v18+
- **Deploy:** AWS (S3 + CloudFront + API Gateway + Lambda + DynamoDB)
- **IaC:** AWS CDK (TypeScript) en `infra/`

## 📐 Estructura del Monorepo

```
snap-sport/
├── apps/
│   ├── frontend/        ← Next.js (output: export → S3)  puerto 3000
│   ├── admin/           ← Next.js (output: export → S3)  puerto 3001
│   └── api/             ← Hono + Lambda handlers          puerto 4000
├── packages/
│   ├── types/           ← @snapsport/types (interfaces compartidas)
│   └── config/          ← @snapsport/config (tsconfig/eslint base)
├── infra/               ← AWS CDK stacks
│   ├── bin/app.ts
│   └── lib/
│       ├── frontend-stack.ts
│       ├── api-stack.ts
│       └── media-stack.ts
├── turbo.json
└── package.json
```

## 🔧 Comandos Frecuentes

```bash
# Desde la raíz del monorepo:
npm run dev              # levanta todas las apps en paralelo
npm run build            # build de todo el monorepo
turbo dev --filter=frontend   # solo frontend
turbo dev --filter=api        # solo API
turbo build --filter=frontend # build de una sola app

# Infra:
cd infra && npm run synth      # CDK synth
cd infra && npm run deploy     # deploy a AWS
cd infra && npm run diff       # ver cambios pendientes
```

## 🎨 Estándares de Código

### TypeScript
- Usar tipos explícitos — nunca `any`
- Interfaces para props de componentes
- Tipos compartidos van en `packages/types/src/`

### React/Next.js (apps/frontend y apps/admin)
- Componentes funcionales con hooks
- `'use client'` solo cuando sea necesario
- Componentes en `components/` dentro de cada app
- `next export` habilitado (`output: 'export'` en next.config.ts)

### Tailwind CSS
- Colores principales:
  - Primary: `#FF6B35` → `orange-500`
  - Secondary: `#004E89` → `blue-900`
  - Accent: `#FFD700` → `yellow-400`
- Mobile-first approach

### API (apps/api)
- Hono como router — `src/app.ts`
- Handlers por recurso en `src/handlers/`
- `src/lambda.ts` = entrypoint Lambda (producción)
- `src/local.ts` = servidor Node local (desarrollo)

## 📋 Checklist para Nuevas Features

### Frontend / Admin
- [ ] Componente en `apps/{frontend|admin}/components/`
- [ ] Tipos necesarios en `packages/types/src/`
- [ ] Responsive design (mobile-first)
- [ ] Accesibilidad (semantic HTML, aria labels)
- [ ] Sin console.log en producción

### API
- [ ] Handler en `apps/api/src/handlers/`
- [ ] Ruta registrada en `apps/api/src/app.ts`
- [ ] Tipos de request/response en `packages/types/`
- [ ] Permisos IAM actualizados en `infra/lib/api-stack.ts`

## 🎬 Notas Importantes
- Las imágenes van en S3 (`snapsport-media-{account}`) — acceso por presigned URLs
- Usar componentes de Next.js: `Image`, `Link`
- Para animaciones: Framer Motion o CSS puro
- DynamoDB en on-demand (PAY_PER_REQUEST) — sin costos fijos

## 📞 Información del Proyecto
- **Email:** contacto@snapsport.com
- **Sitio:** snapsport.com.mx
- **Galería:** Fotos de deportes variados
- **CTA Principal:** "Solicita un Presupuesto"
