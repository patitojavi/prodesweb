const Contact = () => {
  return (
    <section className="text-gray-400 bg-slate-950 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contacta con Nosotros
          </h1>
          <p class="lg:w-3x1 mx-auto leading-relaxed text-base">
            Dirección: Rudecindo Ortega 2968-3308, Temuco, Araucanía, Chile ·
            ~5,6 kmd{" "}
          </p>
          <p class="lg:w-3x1 mx-auto leading-relaxed text-base">
            Lunes a Sabado de 9:00 hasta las 17:30 hrs
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Formulario de Contacto
          </h2>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-400">
              Correo Electronico
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-400">
              Correo Electronico
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-20 px-50 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-violet-950 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-900 rounded text-lg">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
