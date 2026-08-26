# Valory, Lda — Website institucional

Website responsivo da Valory, Lda, empresa angolana de contabilidade, fiscalidade, consultoria financeira e formação.

## Desenvolvimento local

Requisitos: Node.js 22.13+ e pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

O endereço local é apresentado no terminal.

## Produção

```bash
pnpm build
pnpm start
```

## Publicação

- **Cloudflare Workers:** `pnpm deploy:cloudflare`
- **Render:** ligar este repositório no Render; o ficheiro `render.yaml` contém a configuração sugerida.
- **OpenAI Sites/Cloudflare:** a versão de testes já está disponível em `https://valory-consultoria.victorino-antonio94.chatgpt.site`.

Consulte [DEPLOYMENT.md](DEPLOYMENT.md) para o guia completo.

## Conteúdo provisório

O número OCPCA demonstrativo e as certificações assinaladas como provisórias devem ser substituídos por dados documentais confirmados antes do lançamento público.

