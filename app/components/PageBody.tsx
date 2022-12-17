export default function PageBody({data}: {data!: object}) {
  return(
     <div className='bg-white pb-[80px] w-[100%] relative max-w-[1520px] mx-auto box-border block'>
        <div className='px-[6vw] box-border block'>
          <div className='flex flex-wrap box-border'>
            <main role='main' className='grow shrink-0 basis-auto max-w-[100%] box-border block'>
              <div className='my-[8px] box-border '></div>
              <article className='mb-[30px] box-border block'>
                <header className='box-border block'>
                  <h1 className='text-[#333] mt-[60px] text-5xl tracking-tight mb-[10px] box-border block font-light'></h1>
                  <p className='text-[#333] mt-[3em] font-light text-sm mb-[10px] box-border block'>Last Modified:
                    <span className='box-border text-[#333] text-sm font-light'></span>
                  </p>
                <div className='box-border block text-black text-3xl '>
                  <div className='box-border block border-l border-[#63b175] mt-[50px] mb-[20px] pl-[20px] box-border block '>
                    <span className='text-lg text-[#333] p-0 m-0 w-[50px] leading-[19px] text-light box-border'> by </span>
                    <span className='text-lg text-[#333] p-0 m-0 w-[50px] leading-[19px] text-light box-border'>
                      <a className='text-[#267438] no-underline bg-transparent '></a>
                    </span>
                    <ul title='category' className='mb-0 pl-0 list-style-none text-white mt-0 box-border block'>
                      <li className='mb-[10px] inline-block box-border list-style-none text-lg '>
                        <a className='bg-[#63b175] text-white mr-0 inline-block py-[3px] px-[7px] text-lg font-bold no-underline'></a>
                        <span className='bg-[#267438] text-lg font-bold inline-block box-border list-style-none text-white'>
                          <span className='py-[3px] px-[5px] transition-transform inline-block text-lg font-bold text-white list-style-none '>+</span>
                        </span>
                        
                      </li>
                    </ul>
                    <ul title='tags' className='text-white list-style-none pl-0 mt-0 mb-[10px] box-border block'>
                      <li className='inline-block box-border text-white list-style-none '>
                        <a className='bg-[#333] text-white rounded text-[16px] inline-block py-[3px] px-[7px] font-bold no-underline box-border list-style-none '></a>
                      </li>
                    </ul>
                  </div>
                </div>
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
