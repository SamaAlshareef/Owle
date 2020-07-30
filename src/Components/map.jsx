import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    position: 'relative', 
    width: '1166px',
    height: '100%',
  

  };
  
  export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };
      onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

        onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
        };
    render() {
      return (
        <div className="container-fluid " style={{ height: '100vh', width: '100%' }}>
          <div className="row">
            <div className="col-sm-12">
            <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 30.097987,
           lng: 31.324595
          }}
        >
             <Marker
          onClick={this.onMarkerClick}
          name={'O-projects'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
            </div>
          </div>
        </div>
        
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyArCg3KTGGsLD2Wwz3sU2SnHKMDALmLkNA'
  })(MapContainer);
 
