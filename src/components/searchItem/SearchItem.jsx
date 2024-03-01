import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Apartamentos en Tower Street</h1>
        <span className="siDistance">500 m del centro</span>
        <span className="siTaxiOp">Taxi gratuito al aeropuerto</span>
        <span className="siSubtitle">
        Apartamento Estudio con aire acondicionado
        </span>
        <span className="siFeatures">
        Estudio completo • 1 baño • 21m² 1 cama matrimonial
        </span>
        <span className="siCancelOp">Cancelación gratis </span>
        <span className="siCancelOpSubtitle">
        Puedes cancelar más tarde, ¡así que asegura este excelente precio hoy!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excelente</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Incluye impuestos y tasas.</span>
          <button className="siCheckButton">Ver disponibilidad</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
