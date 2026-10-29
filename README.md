# SHERIFF Seguridad S.R.L. - Recreación y Modernización Web

Sitio web oficial corporativo desarrollado desde cero con **Vite + React**, sustituyendo la arquitectura pesada de WordPress por una aplicación web ultrarrápida, interactiva y optimizada para conversión y SEO.

---

## 🚀 Mejoras Implementadas Respecto a la Web Anterior en WordPress

1. **Velocidad y Carga Instantánea**:
   - De decenas de plugins lentos y hojas de estilo sobredimensionadas a un bundle compilado en **567ms** que pesa tan solo **90 kB comprimido**.
2. **Video Hero Cinematográfico con Controles**:
   - Video oficial (`sheriff.mp4`) en background con overlay de gradiente, poster fallback para celulares lentos y botones para pausar/silenciar.
3. **Identidad y Habilitación Oficial Destacada**:
   - Inclusión en cabecera y cuerpo de la **Resolución Ministerial N° 0527** del *Ministerio de Gobierno y Seguridad de la Provincia de Neuquén*.
   - Cita testimonial destacada del Director Operativo **Luis Ariel Hernandez**.
4. **Cotizador de Seguridad en Vivo**:
   - Herramienta interactiva para que clientes particulares, empresas y consorcios configuren puestos, tipo de servicio y horas, generando al instante una propuesta lista para enviar a WhatsApp.
5. **WhatsApp Integrado en Todos los Puntos Clave**:
   - Botón flotante 24/7 con menú de consultas rápidas.
   - Botones en cada servicio con el mensaje predefinido ("*Hola, solicito presupuesto para Barrios Privados...*").
6. **Capacitaciones Especializadas**:
   - Módulo que destaca la certificación del personal en **Primeros Auxilios & RCP**, manejo de conflictos, control de accesos y legislación.
7. **Formulario de Contacto & Mapa Interactivo**:
   - Ubicación exacta en **Perito Moreno 62, Neuquén Capital** con mapa dinámico.
   - Formulario de contacto con animación de confeti y opción de envío directo por WhatsApp.

---

## 🛠️ Cómo Ejecutar en Local

Para iniciar el servidor de desarrollo en cualquier momento:

```powershell
.\dev.ps1
```
O directamente con npm:
```bash
npm run dev
```
Luego abrir: `http://localhost:5173/`

---

## 📦 Cómo Subir a Hostinger

1. Generar la versión de producción ejecutando:
   ```powershell
   .\build.ps1
   ```
   (O `npm run build`).
2. Se creará la carpeta **`dist/`**.
3. En el panel de **Hostinger (hPanel)**:
   - Ir al **Administrador de Archivos (File Manager)** del dominio `sheriffseguridad.com.ar`.
   - Entrar en la carpeta **`public_html`**.
   - Subir todos los archivos y carpetas que están **adentro** de `dist/` (`index.html`, carpeta `assets/`, etc.).
4. ¡Listo! La web cargará instantáneamente en tu dominio con certificado SSL.
