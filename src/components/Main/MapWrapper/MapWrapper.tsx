import style from "./MapWrapper.module.css";
import { useContext } from "react";
import { CardContext } from "../../../context/cards.context";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { mapKey } from "../../../api/const";

export const MapWrapper = () => {
  const { cardsData } = useContext(CardContext);
  const [width, height] = useWindowSize();
  return (
    <div className={style.mapWrapper}>
      <YMaps
        query={{
          lang: "ru_RU",
          apikey: mapKey,
        }}
      >
        <Map
          width={width}
          height={height / 2}
          defaultState={{ center: [59.939099, 30.315877], zoom: 11 }}
        >
          {cardsData.map((cardData) => (
            <Placemark
              key={cardData.id}
              geometry={[cardData.latitude, cardData.longitude]}
              properties={{ iconContent: `<div class='text'><span>${cardData.name}</span><span>${cardData.model}</span></div>` }}
            />
          ))}

        </Map>
      </YMaps>
    </div>
  );
};
