# 🛡️ VISE Ecuador - Sitio Web Entregado

## 📋 Información del Proyecto

**Cliente:** VISE Ecuador  
**Proyecto:** Sitio Web Corporativo  
**Fecha de entrega:** $(date +"%d/%m/%Y")  
**Desarrollador:** Edison Fernández  
**Versión:** 1.0.0  

## 📁 Contenido del Paquete

```
vise-ecuador/
├── index.html              # Página principal
├── contacto.html           # Información de contacto
├── nosotros.html           # Sobre la empresa
├── soluciones.html         # Servicios de seguridad
├── sectores.html           # Sectores de trabajo
├── tendencias.html         # Tendencias del sector
├── css/
│   └── styles.css          # Estilos del sitio
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── images/                 # Imágenes optimizadas (7.9MB)
│   ├── popup/             # Imágenes de modales
│   ├── sectores/          # Imágenes de sectores
│   └── certificaciones/   # Logos de certificaciones
└── INSTRUCCIONES_CLIENTE.md # Este archivo
```

## 🚀 Instrucciones de Instalación

### Opción 1: Subir a Hosting Existente

1. **Acceder al panel de control** de tu hosting
2. **Ir a "Administrador de archivos"** o "File Manager"
3. **Navegar a la carpeta** `public_html` o `www`
4. **Subir todos los archivos** de esta carpeta
5. **Verificar** que `index.html` esté en la raíz

### Opción 2: Usar cPanel

1. **Iniciar sesión** en cPanel
2. **Abrir "Administrador de archivos"**
3. **Navegar a** `public_html`
4. **Subir archivo ZIP** y extraer
5. **Mover archivos** a la raíz de `public_html`

### Opción 3: FTP

1. **Conectar** con cliente FTP (FileZilla, WinSCP)
2. **Subir** todos los archivos a la carpeta raíz
3. **Verificar** permisos de archivos (644 para archivos, 755 para carpetas)

## ⚙️ Configuración del Dominio

### Si usas subdominio:
- Subir archivos a: `public_html/subdominio/`
- Acceder desde: `https://subdominio.tudominio.com`

### Si es dominio principal:
- Subir archivos a: `public_html/`
- Acceder desde: `https://tudominio.com`

## 🔧 Verificación Post-Instalación

### ✅ Checklist de Verificación:

- [ ] **Página principal carga** correctamente
- [ ] **Navegación funciona** entre páginas
- [ ] **Imágenes se muestran** correctamente
- [ ] **Formulario de contacto** funciona
- [ ] **Mapa de Google** se carga
- [ ] **Responsive** funciona en móvil
- [ ] **Animaciones** funcionan al hacer scroll
- [ ] **Footer** se muestra completo

### 🐛 Problemas Comunes y Soluciones:

**Problema:** Las imágenes no se muestran
**Solución:** Verificar que la carpeta `images/` se subió completa

**Problema:** Los estilos no se aplican
**Solución:** Verificar que `css/styles.css` está en la ubicación correcta

**Problema:** JavaScript no funciona
**Solución:** Verificar que `js/script.js` está en la ubicación correcta

## 📞 Información de Contacto Actualizada

### Datos en el sitio web:
- **Teléfono:** (+593) 2 234 5679
- **Email:** atencion@vise-ecuador.com
- **Dirección:** Inglaterra E3-266 Avenida Amazonas, Edificio Stratta, Piso 7, Quito, Ecuador

### Redes Sociales:
- **Facebook:** https://www.facebook.com/senaproecuador
- **LinkedIn:** https://www.linkedin.com/company/vise-senapro/
- **Instagram:** https://www.instagram.com/vise_senapro_oficial/
- **WhatsApp:** https://wa.me/593999206671

## 🔄 Actualizaciones Futuras

### Para cambiar contenido:
1. **Editar archivos HTML** directamente
2. **Modificar estilos** en `css/styles.css`
3. **Actualizar información** de contacto
4. **Subir cambios** al servidor

### Para agregar nuevas imágenes:
1. **Optimizar imagen** (recomendado: máximo 1MB)
2. **Subir a carpeta** `images/` correspondiente
3. **Actualizar HTML** con nueva ruta
4. **Subir cambios** al servidor

## 📊 Especificaciones Técnicas

- **Peso total:** ~60MB (optimizado)
- **Páginas:** 6 páginas HTML
- **Imágenes:** 49 optimizadas
- **Responsive:** Mobile-first design
- **Navegadores:** Chrome, Firefox, Safari, Edge
- **Dispositivos:** Desktop, Tablet, Mobile

## 🆘 Soporte Técnico

Si necesitas ayuda con la instalación o configuración:

**Email:** siperecs@gmail.com  
**Teléfono:** +593 9 5875 3940  
**Horario:** Lunes a Viernes, 9:00 AM - 6:00 PM  

## 📄 Archivos de Configuración

### .htaccess (si es necesario):
```apache
# Redirección a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compresión GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

---

**¡Sitio web listo para producción! 🚀**

*Desarrollado con ❤️ para VISE Ecuador*
