"use client";

import useSWR from "swr";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Titre from "@/components/Titre/Titre";


const fetcher = url => fetch(url).then(r => r.json())

export default function Page({params}) {

    const lastSlug = params.slug[params.slug.length - 1]

    const {data, error} = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/bien_louer/${lastSlug}`, fetcher)

    return (
        <>
            <Titre titre={params.slug}/>

            <MapContainer style={{height: '100px', width: '200px'}} center={[51.505, -0.09]} zoom={13}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}
