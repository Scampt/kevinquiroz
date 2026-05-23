---
title: "Chatwoot + n8n: el stack de soporte que uso en producción"
description: "Cómo automatizar tickets, escalar a humano y medir tiempo de primera respuesta en ecommerce."
date: "02 May 2026"
category: "CX"
readTime: 12
tags: ["Chatwoot", "n8n", "CX", "soporte", "ecommerce", "automatización"]
---

El stack de soporte más común en ecommerce LATAM es: WhatsApp Business, un agente humano, y mucho copia-pega. Funciona hasta los 100 pedidos al mes. Después, se rompe.

Lo que implementamos en Jousfit (y replicamos en otros clientes) es diferente: Chatwoot + n8n como columna vertebral de toda la operación de soporte.

## Qué hace Chatwoot

Chatwoot es la bandeja de entrada unificada. Todos los canales (WhatsApp, email, chat web) llegan a un solo lugar con contexto completo del cliente. El equipo de soporte ve el historial, las etiquetas, el estado de la conversación.

Lo importante: Chatwoot tiene una API robusta que n8n puede consumir y escribir en tiempo real.

## La arquitectura

El flujo productivo tiene tres capas:

**Capa 1: Router** — El V1 Router Maestro recibe cada mensaje entrante, identifica el canal y el tipo de consulta, y enruta al workflow correcto.

**Capa 2: Especialistas** — Workflows dedicados por caso de uso: pedidos (V3), menú digital (V5), menú físico (V4), agente IA (V18). Cada uno conoce su dominio.

**Capa 3: Handoff** — Cuando el bot no puede resolver, el V2 Human Handoff transfiere la conversación a un agente humano con contexto completo, sin que el cliente sienta la transición.

## El resultado

De 4 horas de tiempo de primera respuesta a 12 minutos. Sin contratar más agentes.

---

*Artículo completo próximamente — en construcción.*
