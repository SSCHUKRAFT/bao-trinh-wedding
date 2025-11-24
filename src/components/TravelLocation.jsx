import './travellocation.css';

export default function TravelLocation({name, map, image, phone, website}) {
  return (
    <div className="travel-location">
      <div className="travel-location-txt">
        <a target="_blank" rel="noopener noreferrer" href={website}>
          <div dangerouslySetInnerHTML={{__html: name}} />
        </a>
        {phone != null ? <a href={"tel:" + phone}>{phone}</a> : null}
      </div>
      <a href={map} target="_blank" rel="noreferrer">
        <img src={image} alt="google maps location" />
      </a>
    </div>
  )
}