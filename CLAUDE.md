# Snap Sport - Configuración de Claude

## 🎯 Contexto del Proyecto
- **Framework:** Next.js 14+ con TypeScript
- **Styling:** Tailwind CSS
- **Node:** v18+
- **Propósito:** Landing page y portfolio para agencia fotográfica de deportes

## 📐 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx      (Layout global)
│   ├── page.tsx        (Página principal)
│   └── globals.css     (Estilos globales)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Gallery.tsx
│   ├── Services.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── public/
└── images/
```

## 🎨 Estándares de Código

### TypeScript
- Usar tipos explícitos
- Interfaces para props de componentes
- No usar `any`

### React/Next.js
- Componentes funcionales con hooks
- Use `'use client'` solo cuando sea necesario
- Componentes reutilizables en `src/components/`

### Tailwind CSS
- Colores principales:
  - Primary: `#FF6B35` → `orange-500`
  - Secondary: `#004E89` → `blue-900`
  - Accent: `#FFD700` → `yellow-400`
- Usar clases de Tailwind, NO CSS personalizado
- Mobile-first approach

### Ejemplo de componente:
```tsx
'use client';

import React from 'react';

interface Props {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: Props) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
  );
}
```

## 🔧 Comandos Frecuentes
- `npm run dev` - Desarrollo
- `npm run build` - Compilar producción
- `npm run lint` - Verificar código

## 📋 Checklist para Nuevas Features
- [ ] Crear componente en `src/components/`
- [ ] Usar TypeScript con tipos explícitos
- [ ] Responsive design (mobile-first)
- [ ] Accesibilidad (semantic HTML, aria labels)
- [ ] Sin console.log en producción

## 🎬 Notas Importantes
- Las imágenes van en `public/images/`
- Usar componentes de Next.js: `Image`, `Link`
- Para animaciones: usar Framer Motion o CSS puro
- Mantener performance: lazy load donde sea posible

## 📞 Información del Proyecto
- **Email:** contacto@snapsport.com
- **Sitio:** snapsport.com.mx
- **Galería:** Fotos de deportes variados
- **CTA Principal:** "Solicita un Presupuesto"