---
title: "Por qué n8n ganó la guerra del no-code en producción"
description: "Trade-offs reales entre n8n self-hosted y Make cuando tu workflow corre 24/7 con ecommerce en juego."
date: "15 May 2026"
category: "Automation"
readTime: 8
tags: ["n8n", "Make", "automatización", "ecommerce", "self-hosted"]
---

Cuando empecé a automatizar operaciones de CX para ecommerce, la pregunta era simple: ¿n8n o Make?

Spoiler: la respuesta correcta depende de qué tan en serio vas a tomar la automatización.

## El problema con Make en producción

Make es excelente para demos y workflows ocasionales. El editor visual es limpio, la curva de aprendizaje es baja y el ecosistema de integraciones es enorme. Pero cuando tu workflow corre 24/7 procesando pedidos de Shopify y tickets de Chatwoot, los límites aparecen rápido:

- **Operaciones por mes**: cada ejecución consume operaciones. Con 500+ pedidos diarios, el costo escala agresivamente.
- **Latencia de webhooks**: Make introduce un delay de segundos entre trigger y ejecución. En soporte al cliente, esos segundos importan.
- **Debug en producción**: cuando algo falla a las 3 AM, necesitas contexto completo de ejecución, no un resumen recortado.

## Por qué n8n self-hosted gana

Con n8n corriendo en tu propio servidor (nosotros usamos Oracle Cloud + Dokploy), los trade-offs cambian completamente:

- **Sin límite de ejecuciones**: procesas todo lo que necesites.
- **Ejecuciones históricas completas**: cada nodo, cada input/output, timestamp exacto.
- **Code nodes reales**: cuando la lógica es compleja, escribes JavaScript puro.
- **Costo predecible**: $0 en ejecuciones, solo la infraestructura.

## El costo real

La contrapartida es obvia: tú eres el DevOps. Backups, actualizaciones, monitoreo. En nuestro caso tenemos 68+ workflows en producción y el mantenimiento representa menos de 2 horas al mes.

Para un ecommerce serio en LATAM que quiere escalar soporte sin escalar equipo, el cálculo es claro.

---

*Artículo completo próximamente — en construcción.*
