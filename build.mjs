// Gera dist/index.html trocando o marcador pelo número de WhatsApp
// lido da variável de ambiente WHATSAPP_NUMBER (ou de um arquivo .env local).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

if (existsSync(".env")) {
  for (const line of readFileSync(".env", "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*["']?(.*?)["']?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const number = (process.env.WHATSAPP_NUMBER || "").replace(/\D/g, "");
if (!number) {
  console.error("✗ Defina WHATSAPP_NUMBER (ex.: 5511987654321) no ambiente ou no arquivo .env");
  process.exit(1);
}

const html = readFileSync("src/index.html", "utf8");
if (!html.includes("__WHATSAPP_NUMBER__")) {
  console.error("✗ Marcador __WHATSAPP_NUMBER__ não encontrado em src/index.html");
  process.exit(1);
}
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", html.replaceAll("__WHATSAPP_NUMBER__", number));
console.log(`✓ dist/index.html gerado (WhatsApp terminando em …${number.slice(-4)})`);
