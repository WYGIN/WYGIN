export default function PageBody({data}: {data!: object}) {
  return(
   <div className='bg-white pb-[80px] w-[100%] relative max-w-[1520px] mx-auto box-border block'>
      <div className='px-[6vw] box-border block'>
        <div className='flex flex-wrap box-border'>
          <main role='main' className='grow shrink-0 basis-auto max-w-[100%] box-border block'>
            <div className='my-[8px] box-border '></div>
            <article className='mb-[30px] box-border block'>
              <header className='box-border block'>
                <h1 className='text-[#333] mt-[60px] text-5xl tracking-tight mb-[10px] box-border block font-light'>{data.title}</h1>                  
              </header>
              <section className='box-border block text-lg'>
                <h2 className='text-black text-3xl mt-[2.1em] mb-[1.3em] font-bold relative box-border'>
                  <strong className='font-bold box-border text-3xl'>h2</strong>
                  <a className='visited:text-[#267438] hover:underline bg-transparent box-border text-3xl font-bold mo-underline'>
                    <svg className='hover:opacity-100 opacity-0 w-[40px] h-[18px] relative box-border text-3xl font-bold link:text-[#267438]'></svg>
                  </a>
                </h2>
                <p className='text-black m-0 mb-[10px] box-border block text-lg '></p>
                <h3 className='text-[#000] mt-[2.1em] mb-[1.3em] font-bold text-[24px] relative box-border block'>
                  <strong className='font-bold box-border text-black text-3xl'></strong> 
                  <a className = 'visited:text-[#267438] hover:underline bg-transparent box-border text-[24px] font-bold no-underline' >
                    <svg className='hover:opacity-100 opacity-0 w-[40px] h-[18px] relative box-border text-3xl font-bold link:text-[#267438]'></svg>
                  </a>
                </h3>
                <pre className='whitespace-pre-wrap relative font-mono text-[1em] box-border'>
                  <code className='rounded border-[#267438] bg-[#fafafa] text-[#000] block p-[1em] text-[14px] font-mono font-[Source_Code_Pro] bg-[#fff] box-border whitespace-pre-wrap'></code>
                </pre>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
