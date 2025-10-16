# 🌐 Configuración para Diferentes Tipos de Hosting

## 📋 Instrucciones por Tipo de Hosting

### 1. Hosting Compartido (cPanel)

**Pasos:**
1. Iniciar sesión en cPanel
2. Ir a "Administrador de archivos"
3. Navegar a `public_html`
4. Subir todos los archivos
5. Verificar que `index.html` esté en la raíz

**Archivos necesarios:**
- Todos los archivos HTML
- Carpeta `css/`
- Carpeta `js/`
- Carpeta `images/`
- Archivo `.htaccess`

### 2. Hosting VPS/Dedicado

**Pasos:**
1. Conectar por SSH o FTP
2. Navegar al directorio web (ej: `/var/www/html/`)
3. Subir archivos
4. Configurar permisos: `chmod 644 *.html` y `chmod 755 css/ js/ images/`

**Comandos útiles:**
```bash
# Permisos para archivos
find . -type f -exec chmod 644 {} \;

# Permisos para carpetas
find . -type d -exec chmod 755 {} \;

# Propietario correcto
chown -R www-data:www-data .
```

### 3. Cloudflare + Hosting

**Configuración en Cloudflare:**
1. Activar "Always Use HTTPS"
2. Activar "Auto Minify" para CSS, JS, HTML
3. Activar "Brotli Compression"
4. Configurar "Browser Cache TTL" a 1 mes

### 4. WordPress (como tema personalizado)

**No aplicable** - Este es un sitio estático independiente.

### 5. GitHub Pages

**Pasos:**
1. Crear repositorio en GitHub
2. Subir archivos
3. Activar GitHub Pages en Settings
4. Configurar dominio personalizado (opcional)

## 🔧 Configuraciones Específicas

### Apache (.htaccess incluido)
- ✅ Redirección HTTPS
- ✅ Compresión GZIP
- ✅ Cache de archivos
- ✅ Headers de seguridad

### Nginx
```nginx
server {
    listen 80;
    server_name tudominio.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name tudominio.com;
    root /var/www/html;
    index index.html;
    
    # Compresión
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Cache
    location ~* \.(css|js|png|jpg|jpeg|gif|webp|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### IIS (web.config)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="Redirect to HTTPS" stopProcessing="true">
                    <match url=".*" />
                    <conditions>
                        <add input="{HTTPS}" pattern="off" ignoreCase="true" />
                    </conditions>
                    <action type="Redirect" url="https://{HTTP_HOST}/{R:0}" 
                            redirectType="Permanent" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
        </staticContent>
    </system.webServer>
</configuration>
```

## 📊 Verificación Post-Deploy

### Herramientas de verificación:
1. **Google PageSpeed Insights:** https://pagespeed.web.dev/
2. **GTmetrix:** https://gtmetrix.com/
3. **WebPageTest:** https://www.webpagetest.org/

### Métricas esperadas:
- **Performance Score:** 90+
- **Largest Contentful Paint:** <2.5s
- **First Input Delay:** <100ms
- **Cumulative Layout Shift:** <0.1

## 🆘 Solución de Problemas

### Problema: Error 500
**Causa:** Problema con .htaccess
**Solución:** Renombrar .htaccess a .htaccess.bak temporalmente

### Problema: CSS no carga
**Causa:** Ruta incorrecta o permisos
**Solución:** Verificar ruta y permisos de carpeta css/

### Problema: Imágenes no se muestran
**Causa:** Carpeta images/ no subida completa
**Solución:** Verificar que todas las subcarpetas se subieron

### Problema: JavaScript no funciona
**Causa:** Archivo script.js no encontrado
**Solución:** Verificar ruta y permisos de js/script.js

## 📞 Soporte Técnico

Para problemas específicos del hosting, contactar al proveedor de hosting.

Para problemas del sitio web, contactar al desarrollador:
- **Email:** edison.fernandez@email.com
- **Teléfono:** +593 99 123 4567
