export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">
        Finanças Simples
      </h1>
      <p className="text-gray-600 mb-8">
        Dicas práticas para cuidar do seu dinheiro
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-4">Posts recentes</h2>
        <article className="border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
          <span className="text-sm text-gray-400">03 mai 2026</span>
          <h3 className="font-semibold mt-1">
            Como montar reserva de emergência sendo autônomo
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Guia prático para autônomos que querem ter segurança financeira
          </p>
        </article>
      </section>
    </main>
  )
}