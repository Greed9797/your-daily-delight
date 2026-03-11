

# Plano: Site Institucional - Grupo W3

## Observação Importante

O token do Figma continua inválido, porém consegui capturar um screenshot do design no Figma mostrando a estrutura completa. O design do Figma e o site atual (grupow3.com) parecem ser versões diferentes. Vou basear a implementacao no que consegui observar do Figma.

## O que foi identificado no Figma

O design mostra um site institucional com tema **escuro (fundo preto/cinza escuro) com acentos em laranja**. Contém 3 breakpoints: Desktop 2560, Desktop 1280 e Mobile.

### Estrutura das Seções (baseado no screenshot do Figma)

1. **Header** - Logo Grupo W3 + navegação + CTA
2. **Hero** - Texto grande com arco/grid laranja decorativo, badges (sede Blumenau, 30+ equipe)
3. **Quem Somos** - Stats e descrição da empresa
4. **Soluções/Serviços** - Cards com ícones e descrições
5. **Nosso Time** - Grid de fotos da equipe (4 pessoas visíveis)
6. **Depoimento** - "Nosso Diretor" com foto e quote
7. **Cases** - Cards de cases de sucesso
8. **Resultados em Números** - Métricas com ícones
9. **CTA Final** - "O Ecossistema W3 representa..." com botão
10. **Footer** - Links e informações

## Abordagem Técnica

### Design System
- Background: ~`#0D0D0D` (preto) com variações de cinza escuro
- Accent: ~`#FF6B00` (laranja)
- Texto: branco e cinza claro
- Cards: cinza escuro com bordas sutis
- Fonte: sans-serif moderna

### Arquitetura de Componentes
- `src/pages/Index.tsx` - Página principal orquestrando todas as seções
- `src/components/Header.tsx` - Navegação fixa
- `src/components/HeroSection.tsx` - Hero com gráfico decorativo
- `src/components/AboutSection.tsx` - Quem Somos + stats
- `src/components/ServicesSection.tsx` - Cards de soluções
- `src/components/TeamSection.tsx` - Grid do time
- `src/components/TestimonialSection.tsx` - Depoimento do diretor
- `src/components/CasesSection.tsx` - Cases de sucesso
- `src/components/ResultsSection.tsx` - Números/métricas
- `src/components/CTASection.tsx` - Call-to-action final
- `src/components/Footer.tsx` - Rodapé

### Responsividade
- Desktop (1280+): Layout completo
- Mobile: Layout empilhado adaptado

### Observações
- Imagens de placeholder serão usadas (não temos acesso aos assets do Figma)
- Textos serão baseados no que é visível nos screenshots
- Ajustes finos poderão ser feitos após aprovação

## Limitação

Sem acesso à API do Figma, cores exatas, espaçamentos em pixels e tipografia são aproximações visuais. **Recomendo fortemente gerar um novo token válido** para extrair dados precisos. Para gerar:
1. Figma > Settings > Security > Personal Access Tokens
2. Certifique-se de que o token tem permissão de leitura no arquivo
3. Copie imediatamente (o token só aparece uma vez)

