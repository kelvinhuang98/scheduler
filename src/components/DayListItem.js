import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

const formatSpots = (spots) => {
  if (!spots) {
    return `no spots remaining`;
  } else if (spots === 1) {
    return `${spots} spot remaining`;
  } else {
    return `${spots} spots remaining`;
  }
};

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
