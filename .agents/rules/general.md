---
trigger: always_on
description: Estándares generales de desarrollo, arquitectura y comportamiento del agente
---

# Reglas Generales del Proyecto
- Responde siempre en español y redacta los comentarios del código en español.
- Mantén código limpio, modular y con buenas prácticas para el stack del proyecto (**React 19 + Vite + JavaScript moderno/JSX**, validado con `oxlint`).
- Antes de aplicar cambios destructivos o modificar esquemas de base de datos, genera un plan claro y verifica que exista respaldo o script de migración.
- Nunca incluyas credenciales, tokens ni contraseñas hardcodeadas; usa variables de entorno (`.env`) y verifica que estén en `.gitignore`.
- Si creas o modificas interfaces web, prioriza diseño moderno, limpio, responsivo y de alto contraste.
