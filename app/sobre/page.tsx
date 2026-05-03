import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a história por trás do Finanças Simples',
}

export default function SobrePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Sobre o blog</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          Olá! Sou Anderson, criador do <strong>Finanças Simples</strong>.
        </p>

        <p>
          Criei esse blog porque percebi que a maioria dos conteúdos sobre
          finanças pessoais é complicado demais ou distante da realidade
          brasileira. Aqui você vai encontrar dicas práticas e diretas,
          sem enrolação.
        </p>

        <h2>O que você vai encontrar aqui</h2>
        <ul>
          <li>Como sair das dívidas de forma realista</li>
          <li>Como montar sua reserva de emergência do zero</li>
          <li>Investimentos simples para quem está começando</li>
          <li>Dicas para autônomos e freelancers</li>
        </ul>

        <h2>Por que confiar nesse blog?</h2>
        <p>
          Todo conteúdo publicado aqui é baseado em fontes confiáveis como
          o Banco Central do Brasil, a CVM e especialistas reconhecidos.
          Não vendo cursos milagrosos nem prometo enriquecimento rápido.
        </p>

        <h2>Fale comigo</h2>
        <p>
          Tem alguma dúvida ou sugestão de pauta? Me manda uma mensagem
          pelo Instagram ou por e-mail. Respondo sempre!
        </p>
      </div>
    </div>
  )
}