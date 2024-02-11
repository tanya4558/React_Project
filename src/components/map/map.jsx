import React, { Component } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  LayerGroup,
  FeatureGroup,
  Rectangle,
  Circle
} from "react-leaflet";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.css";
import "leaflet-fullscreen";
import LayerControl, { GroupedLayer } from "./LayerControl";


const center = [51.505, -0.09];
const rectangle = [[51.49, -0.08], [51.5, -0.06]];

class MapLeaflet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layers: [],
    };
  }

  handleLayerAdd = (layer, name, group) => {
    const { layers } = this.state;
    const id = Util.stamp(layer);

    // Check if the layer with the same id is already added
    if (!layers.some((l) => l.id === id)) {
      this.setState({
        layers: [
          ...layers,
          {
            layer,
            group,
            name,
            checked: true,
            id,
          },
        ],
      });
    }
  };

  handleLayerToggle = (id) => {
    this.setState((prevState) => ({
      layers: prevState.layers.map((layer) =>
        layer.id === id ? { ...layer, checked: !layer.checked } : layer
      ),
    }));
  };

  render() {
    const position = [28.619181, 77.314201];

    return (
      <MapContainer
        style={{
          flex: 1,
          width: '100%',
          height: '300px',
          position: 'relative',
          zIndex: 0,
        }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        fullscreenControl={true}
      >
         <LayerControl position="topright">
          {/* Base Layers */}
          <GroupedLayer checked name="OpenStreetMap" group="Base Layers" >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </GroupedLayer>

          <GroupedLayer name="OpenStreetMap B&W" group="Base Layers">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </GroupedLayer>

          {/* Layer Group */}
          <GroupedLayer name="Layer Group with Circles" group="Layer Group">
            <LayerGroup>
              <Circle
                center={position}
                pathOptions={{ fillColor: 'blue' }}
                radius={200}
              />
              <Circle
                center={position}
                pathOptions={{ fillColor: 'red' }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: 'green', fillColor: 'green' }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </GroupedLayer>

          {/* Feature Group */}
          <GroupedLayer name="Feature Group Squares" group="Layer Group">
            <FeatureGroup pathOptions={{ color: 'purple' }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </GroupedLayer>
        </LayerControl>
      </MapContainer>
    );
  }
}

export default MapLeaflet;
