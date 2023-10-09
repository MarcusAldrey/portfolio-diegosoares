import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego Soares - Portfolio</title>
        <meta name="description" content="Diego Soares - Diretor de arte - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <section className='bg-slate-900'>
        <nav className='bg-green-200 flex justify-end py-5 mb-12 '>
          <ul className='flex items-center gap-2 pe-4'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Sobre</a></li>
            <li><a href='#'>Contato</a></li>
          </ul>
        </nav>
        <div className='ms-4 text-white min-h-screen'>
        <h1 className='text-4xl mb-2 '>Diego Soares</h1>
        <h2 className='text-2xl'>Diretor de arte</h2>
        </div>
      </section>
      
    </main>
    </div>
  )
}
