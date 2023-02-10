import LineOfSight from '@arcgis/core/widgets/LineOfSight';

import React from 'react';

type Props = {};

const MapWidget = (props: Props) => {
  const lineOfSight = new LineOfSight({
    view: 'view',
  });

  // Add widget to the bottom left corner of the view
  lineOfSight.ui.add(lineOfSight, {
    position: 'bottom-left',
  });

  return <div>MapWidget</div>;
};

export default MapWidget;
