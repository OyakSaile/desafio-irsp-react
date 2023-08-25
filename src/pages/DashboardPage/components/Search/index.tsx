export const Search = () => {
  return (
    <div className="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
      <div>
        <div className="max-w-xl lg:text-left">
          <div>
            <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
              Pesquise um usuário
            </p>
            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
              Preencha o campo abaixo para pesquisar um usuário por nome ou
              email.
            </p>
          </div>
          <form className="flex flex-col items-center max-w-lg" action="">
            <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
              <input
                name="email"
                type="email"
                className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                placeholder="E-mail ou nome."
                required={true}
              />
              <button
                type="button"
                className="items-center inline-flex justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                <div style={{ position: 'relative' }}></div>
                Pesquisar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-auto ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
