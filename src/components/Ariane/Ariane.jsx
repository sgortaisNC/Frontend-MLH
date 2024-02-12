import "./Ariane.scss";
import Link from "next/link";

export default function Ariane() {
    return <section id={'ariane'} className={'ariane'}>
        <div className="container">
            <ul className="ariane__content">
                <li><Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.844" height="14.197" viewBox="0 0 14.844 14.197">
                        <g transform="translate(0.096 0.088)">
                            <g transform="translate(0.017 0.017)">
                                <path d="M.569,6.654,1.444,5.9v7.889a.3.3,0,0,0,.3.3h11.3a.3.3,0,0,0,.3-.3h0V5.9l.877.75a.3.3,0,1,0,.406-.444L14.618,6.2,7.593.163a.3.3,0,0,0-.392,0L.177,6.2a.3.3,0,0,0,.392.454m8.089,6.837H6.135V9.4H8.658ZM7.395.788l5.351,4.6v8.1H9.26V9.1a.3.3,0,0,0-.3-.3H5.833a.3.3,0,0,0-.3.3v4.389H2.045v-8.1Z" transform="translate(-0.09 -0.09)" fill="#4b7388"/>
                                <path d="M.569,6.654,1.444,5.9v7.889a.3.3,0,0,0,.3.3h11.3a.3.3,0,0,0,.3-.3h0V5.9l.877.75a.3.3,0,1,0,.406-.444L14.618,6.2,7.593.163a.3.3,0,0,0-.392,0L.177,6.2a.3.3,0,0,0,.392.454m8.089,6.837H6.135V9.4H8.658ZM7.395.788l5.351,4.6v8.1H9.26V9.1a.3.3,0,0,0-.3-.3H5.833a.3.3,0,0,0-.3.3v4.389H2.045v-8.1Z" transform="translate(-0.09 -0.09)" fill="#ac3053" stroke="#ac3053" strokeWidth="0.18"/>
                                <path d="M59.527,43.032h-.446c-.06,0-.109-.116-.109-.26V41.7c0-.144.049-.26.109-.26h.446c.06,0,.109.116.109.26v1.067c0,.143-.049.26-.109.26" transform="translate(-52.766 -37.633)" fill="#ac3053" stroke="#ac3053" strokeWidth="0.2"/>
                                <path d="M84.7,43.031h-.446c-.06,0-.109-.116-.109-.26V41.7c0-.144.049-.26.109-.26H84.7c.06,0,.109.116.109.26v1.067c0,.143-.049.26-.109.26" transform="translate(-76.379 -37.632)" fill="#ac3053" stroke="#ac3053" strokeWidth="0.2"/>
                                <path d="M59.527,68.2h-.446c-.06,0-.109-.116-.109-.26V66.876c0-.144.049-.26.109-.26h.446c.06,0,.109.116.109.26v1.067c0,.143-.049.26-.109.26" transform="translate(-52.766 -60.762)" fill="#ac3053" stroke="#ac3053" strokeWidth="0.2"/>
                                <path d="M84.7,68.2h-.446c-.06,0-.109-.116-.109-.26V66.876c0-.144.049-.26.109-.26H84.7c.06,0,.109.116.109.26v1.067c0,.143-.049.26-.109.26" transform="translate(-76.379 -60.762)" fill="#ac3053" stroke="#ac3053" strokeWidth="0.2"/>
                            </g>
                        </g>
                    </svg>
                    Accueil
                </Link></li>
                <li><span>Ariane</span></li>
            </ul>
        </div>
    </section>
}
