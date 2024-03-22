import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Link from "next/link";
import {marker} from "@/Utils/Utils";
import MarkerClusterGroup from "react-leaflet-cluster";
import './leafletSurcharge.css';

export default function Map({biens, popup = false}) {
    const center = biens.length === 1 ? [biens[0].latitude ?? biens[0].markers.latitude, biens[0].longitude ?? biens[0].markers.longitude] : [46.34194422876846, 2.601073765954095];
    return (
        <MapContainer style={{marginTop: '50px', height: '740px', width: '100%'}}
                      zoom={11}
                      center={center}
                      scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup chunkLoading>
                {biens.map((bien) => <Marker icon={marker}
                                             key={bien.id}
                                             position={[bien.latitude ?? bien.markers.latitude, bien.longitude ?? bien.markers.longitude]}>
                    {popup && <Popup>
                        <h3>{bien.titre}</h3>
                        <div className="link">
                            <Link href={bien.lien}>Voir l’annonce</Link>
                        </div>
                    </Popup>}
                </Marker>)}
            </MarkerClusterGroup>
        </MapContainer>
    )
}
