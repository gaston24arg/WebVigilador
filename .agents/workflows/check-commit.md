---
description: Revisa el estado del código, seguridad y prepara un commit limpio
---

Ejecuta los siguientes pasos en orden:
1. Revisa `git status` y `git diff` para listar los archivos modificados.
2. Verifica que no haya claves API, contraseñas o archivos `.env` expuestos sin ignorar.
3. Si hay pruebas configuradas en el proyecto, ejecútalas y reporta el resultado.
4. Sugiere un mensaje de commit siguiendo Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`) y pregúntame si procedes con el commit.
