const Aside = () => {
  const sections = [
    {
      title: "Gintonic",

      url: "../asset/gin.png",
    },
    {
      title: "Fernet",
      url: "../asset/fernet.png",
    },
    {
      title: "Vodka",
      url: "../asset/vodka.png",
    },
    {
      title: "Espumantes",
      url: "../asset/espumantes.png",
    },
    {
      title: "Aperitivos",
      url: "../asset/gancia.png",
    },
    {
      title: "Otros",
      url: "https://buenavibra.es/wp-content/uploads/2016/12/chizitos-1_opt.jpg",
    },
  ];
  return (
    <>
      <div className="content">
        <h1 className="content__h1">Dejá que el escabio llegue a vos!</h1>
      </div>

      <aside className="aside">
        {sections.map((section, index) => (
          <div key={index} className="aside__section">
            <img
              className="aside__section__img"
              src={section.url}
              alt="putaas"
            ></img>
            <div className="aside__section__container"></div>
            <h1 className="aside__section__title">{section.title}</h1>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Aside;
