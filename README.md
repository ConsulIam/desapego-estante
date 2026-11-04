# Desapego da Estante

Estante virtual dos livros que estou desapegando.

O número de WhatsApp **não fica no repositório**: `src/index.html` tem o marcador
`__WHATSAPP_NUMBER__`, que é trocado no build pela variável de ambiente `WHATSAPP_NUMBER`.

## Rodar localmente

```bash
cp .env.example .env      # e coloque seu número no .env
node build.mjs            # gera dist/index.html
```

## Deploy

**GitHub Pages:** em *Settings → Secrets and variables → Actions*, crie o secret
`WHATSAPP_NUMBER`. Em *Settings → Pages*, escolha *Source: GitHub Actions*.
Cada push na `main` publica a página. O subdomínio se configura em *Settings → Pages → Custom domain*.

**Vercel / Netlify / Cloudflare Pages:** build command `node build.mjs`,
output directory `dist` e a variável `WHATSAPP_NUMBER` nas configurações do projeto.

## Marcar livros vendidos

Em `src/index.html`, coloque o Nº do livro em `const VENDIDOS = [];` (ex.: `[2, 17]`).
