const FloatingButtons = () => {
  const whatsNumber = +919149835168;
  const number = +918899882546;
  return (
    <section>
      {/* Social Links */}
      <div className="floatingButtons fixed right-0 top-[30%] transform -translate-y-1/2 space-y-4">
        <a
          href={`https://wa.me/${whatsNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 md:p-3 bg-indigo-600 text-white rounded-l-lg hover:bg-indigo-800 transition-colors z-10"
        >
          <i className="ri-whatsapp-line text-xl cursor-pointer"></i>
        </a>
        <a
          href={`tel:${number}`}
          className="block p-2 md:p-3 bg-indigo-600 text-white rounded-l-lg hover:bg-indigo-800 transition-colors z-10"
        >
          <i className="ri-phone-line text-xl cursor-pointer"></i>
        </a>
      </div>
    </section>
  );
};

export default FloatingButtons;
