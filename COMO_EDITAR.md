# Como editar o site (rapido)

Edite apenas o arquivo `site-config.js`.

## Campos principais

- `brandName`: nome da marca no menu e rodape.
- `instagram`: dados do Instagram (handle, foto, seguidores, etc.).
- `buyLink`: link de pagamento (Mercado Pago).
- `payments.whatsappLink`: link do WhatsApp para suporte.
- `countdownMinutes`: tempo do contador na pagina de compra.
- `stickyCtaText`: texto do botao fixo de compra.
- `videos`: lista de videos (`title` + `youtubeId`).
- `samples`: amostras de trabalho (`title` + `image`).
- `results`: resultados reais (`title` + `image`).
- `salesCopy`: textos de venda da pagina inicial.

## Passo a passo recomendado

1. Abra `site-config.js`.
2. Troque `buyLink` pelo seu link real do Mercado Pago.
3. Troque `payments.whatsappLink` pelo seu numero.
4. Atualize `videos`, `samples` e `results`.
5. Salve e publique.

## Importante

- Nao precisa editar `index.html` para trocar conteudo.
- O site agora puxa quase todo conteudo de `site-config.js`.
