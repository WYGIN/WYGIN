export default function Nav({data}: {data!: object}) {
  return(
    <nav className='pt-[50px] max-w-[1520px] mx-auto box-border block'>
      <div className='bg-[#546076] pb-[150px] box-border block'>
        <div className='p-0 block'>{/*search bar layout*/}
          <div id='menu-search' className='max-w-[500px] mx-auto p-[20px]'>
            <form className='mt-0'>
              <fieldset>
                <div className='flex align-middle box-border'>
                  <button type='submit' className='bg-white rounded-tl-md rounded-bl-md transition-all text-sm inline-block mb-0 text-center align-middle py-1.5 px-3 m-0 box-border'>{/*search icon*/}
                    {/*<img src="https://www.baeldung.com/wp-content/plugins/baeldung-menu//img/search.svg"/>*/}
                    <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
                  </button>
                  <input className='border-0 text-lg w-full table-cell align-middle rounded-none py-0 px-3' placeholder='Search' type='text' />
                  <span className='w-auto table-cell align-middle box-border'>
                    <button type='submit' className='bg-[#4b576d] rounded-tr-md rounded-br-md h-9 z-2 py-1.5 px-3 text-center align-middle text-white'>GO</button>
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
          <div className='block box-border'>
            <ul className='mb-2.5 box-border block list-disc'>
              {
                data.body.nav.link.forEach((link) => {
                  <li key={link.link} className='relative block w-full list-none box-border'>
                    <a href={link.link} className='text-white no-underline relative block h-[50px] p-4 font-semibold text-center bg-transparent box-border'>{link.label}</a>
                  </li>
                })
                data.body.nav.linkGroup.forEach((link) => {
                  <li className='bg-[#4b576d] text-white relative block w-full list-none box-border'>{/*dropdown*/}&nbsp;
                    <a className='text-white no-underline relative block h-[50px] p-4 font-semibold text-center bg-transparent box-border'></a>
                    <div className='hidden block bg-[#535353] my-0 mx-auto box-border text-white list-none '>
                      <ul className='bg-[#535353] p-0 relative block my-0 mx-auto max-w-[470px] box-border list-style-[circle]'>
                        <li className='md:p-0 md:mx-[5px] md:mt-0 md:mb-auto relative block border-b-2 box-border list-style-[circle] text-white'>
                          <a className='text-[#267438] no-underline flex bg-transparent list-style-[circle] '>
                            <div title='icon' className='xl:inline xl:p-0 xl:pl-[5px] xl:max-w-[70px] grow-0 shrink-0 basis-32 box-border text-[#267438] list-style-[circle] '>
                              <svg className='inline-block align-middle w-[100px] h-[100px] max-w-[100%] box-border text-[#267438]'></svg>
                            </div>
                            <div className='m-0 text-[14.4px] xl:inline xl:max-w-[70%] mt-[5px] pl-[10px] relative text-white no-underline text-left grow shrink basis-auto box-border list-style-[circle]'>
                              <h3 className='text-xl font-semibold no-underline mt-[20px] mb-[10px] relative box-border block list-style-[circle]'></h3>
                              <p className='mb-0 mr-[10px] box-border block text-left text-style-[circle]'></p>
                            </div>
                          </a>
                          {/* optional dropdown */}
                          <div title='dropdown' className='block bg-[#454545] my-0 mx-auto box-border list-style-[circle] '></div>
                        </li>
                      </ul>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
          <div title='row' className='box-border block mx-0 md:px-[5%] text-xl'>
            <div title='col-md-6' className='box-border block text-white'>
              <section className='block box-border'>
                <svg className='w-[35px] h-[35px] inline-block align-middle box-border'></svg>
                <h4 className='pl-[5px] my-0 pb-0 font-bold inline-block align-middle text-[22px] no-underline box-border '>{/* spring tutorials and guides */}</h4>
                <hr className='border-[#4e9359] text-[#4e9359] mx-0 mt-[10px] mb-[20px] w-[80%] text-left border-0 border-t-[0px] border-solid box-content h-0 overflow-visible block'/>
                <ul className='list-outside pl-0 mb-[40px] mt-0 box-border block'>
                  <li className='sm:block sm:w-[100%] pb-[12px] align-top pr-[20px] box-border list-outside '></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
