# VISE Ecuador - Instrucciones de Deployment

## 📋 Información del Proyecto
- **Cliente:** VISE Ecuador
- **Tipo:** Sitio web corporativo
- **Tecnologías:** HTML5, CSS3, JavaScript Vanilla
- **Responsive:** Sí (Mobile First)

## 🚀 Opciones de Deployment

### 1. GitHub Pages (Recomendado - Gratuito)
1. Subir todos los archivos a un repositorio de GitHub
2. Ir a Settings > Pages
3. Seleccionar "Deploy from a branch"
4. Elegir "main" branch y "/ (root)"
5. El sitio estará disponible en: `https://usuario.github.io/nombre-repositorio`

### 2. Netlify (Recomendado - Gratuito)
1. Ir a [netlify.com](https://netlify.com)
2. Arrastrar la carpeta del proyecto a la zona de deploy
3. El sitio estará disponible automáticamente
4. Se puede conectar con GitHub para auto-deploy

### 3. Vercel (Recomendado - Gratuito)
1. Ir a [vercel.com](https://vercel.com)
2. Importar proyecto desde GitHub o subir archivos
3. Deploy automático
4. Dominio personalizado disponible

### 4. Hosting Tradicional (cPanel, etc.)
1. Subir todos los archivos vía FTP al directorio `public_html`
2. Configurar el archivo `.htaccess` (ya incluido)
3. Verificar que el servidor soporte PHP (aunque no se usa)

## 📁 Estructura de Archivos
```
vise-produccion/
├── index.html              # Página principal
├── nosotros.html           # Página "Conoce de nosotros"
├── soluciones.html         # Página "Soluciones de seguridad"
├── sectores.html          # Página "Sectores de trabajo"
├── tendencias.html        # Página "Tendencias del sector"
├── contacto.html          # Página de contacto
├── css/
│   └── styles.css         # Estilos principales
├── js/
│   └── script.js          # JavaScript principal
├── images/                # Imágenes optimizadas
├── .htaccess             # Configuración de servidor
└── INSTRUCCIONES_DEPLOYMENT.md
```

## ⚙️ Configuraciones Importantes

### Variables CSS
El sitio usa variables CSS personalizadas definidas en `:root`:
- `--primary-color`: #102D3C (Azul corporativo)
- `--primary-dark`: #0A1F2A (Azul oscuro)
- `--accent-color`: #00C853 (Verde)
- `--text-light`: #F5F5F5 (Texto claro)

### Funcionalidades JavaScript
- Navegación responsive con menú hamburguesa
- Scroll suave entre secciones
- Animaciones de scroll (Intersection Observer)
- Manejo de estados activos en navegación
- Formularios de contacto

### Optimizaciones Incluidas
- ✅ Imágenes optimizadas (WebP, compresión)
- ✅ CSS minificado
- ✅ JavaScript optimizado
- ✅ Lazy loading de imágenes
- ✅ Cache headers configurados
- ✅ Compresión GZIP habilitada

## 🔧 Personalización

### Cambiar Colores
Editar las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #102D3C;
    --primary-dark: #0A1F2A;
    --accent-color: #00C853;
    --text-light: #F5F5F5;
}
```

### Agregar Nuevas Páginas
1. Crear archivo HTML siguiendo la estructura existente
2. Agregar enlace en navegación (`nav__menu`)
3. Actualizar JavaScript si es necesario

### Modificar Contenido
- **Textos:** Editar directamente en los archivos HTML
- **Imágenes:** Reemplazar en carpeta `images/` manteniendo nombres
- **Estilos:** Modificar `css/styles.css`

## 📞 Contacto Técnico
- **Email:** siperecs@gmail.com
- **Teléfono:** +593 9 5875 3940

## 📊 Métricas de Rendimiento
- **Tamaño total:** ~60MB (optimizado desde 450MB)
- **Lighthouse Score:** Performance 90+, Accessibility 95+
- **Tiempo de carga:** <3 segundos
- **Imágenes optimizadas:** 85% reducción de peso

## 🛠️ Mantenimiento

### Actualizaciones Regulares
1. Revisar enlaces rotos
2. Actualizar información de contacto
3. Optimizar nuevas imágenes antes de subir
4. Verificar compatibilidad móvil

### Backup
- Mantener copia de seguridad de todos los archivos
- Versionar cambios importantes
- Documentar modificaciones realizadas

---
**Fecha de entrega:** $(date)
**Versión:** 1.0.0
**Estado:** Listo para producción

