# Guia de publicação

## Cloudflare Workers

1. Instale as dependências com `pnpm install --frozen-lockfile`.
2. Autentique a conta: `pnpm wrangler login`.
3. Execute `pnpm deploy:cloudflare`.
4. O processo cria o build e publica o Worker com os recursos estáticos.

O build gera automaticamente `dist/server/wrangler.json`, usado pelo comando de publicação.

## Render

1. No painel Render, escolha **New + → Blueprint**.
2. Ligue o repositório GitHub deste website.
3. Selecione o ficheiro `render.yaml`.
4. Confirme a criação do serviço de testes.

Configuração equivalente:

- Runtime: Node
- Build: `corepack enable && pnpm install --frozen-lockfile && pnpm build`
- Start: `pnpm start:render -- --port $PORT`
- Health check: `/`

## Verificações antes do domínio público

- Substituir o número OCPCA demonstrativo por uma credencial confirmada.
- Confirmar documentalmente as certificações individuais.
- Confirmar autorização para apresentar AGT, INSS e OCPCA como parceiros.
- Testar o formulário e o WhatsApp num telemóvel.
- Configurar domínio, HTTPS e política de privacidade.
