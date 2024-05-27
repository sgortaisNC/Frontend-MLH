import Image from "next/image";
import Link from "next/link";
export default function TeaserLogement({bien}) {

    return <Link href={bien.lien} className="bien-teaser">
        <h3>{bien.titre}</h3>
        <div className="card">
            <figure>
                <Image src={bien.image} width={666} height={383} alt="image"/>
                <figcaption>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="15.711" height="15.021" viewBox="0 0 15.711 15.021">
                        <defs>
                            <clipPath>
                                <rect width="15.711"
                                      height="15.021"
                                      transform="translate(0 0)" fill="#fff"/>
                            </clipPath>
                        </defs>
                        <g transform="translate(0 0)"
                           clipPath="url(#clip-path)">
                            <path
                                d="M15.587,6.531,8.108.1a.407.407,0,0,0-.533,0L.125,6.5a.41.41,0,0,0,.537.617l.781-.675v8.167a.41.41,0,0,0,.408.409H13.833a.409.409,0,0,0,.408-.408V6.45l.778.668a.416.416,0,0,0,.291.115.409.409,0,0,0,.277-.7m-6.5,7.68H6.6V10.053H9.089ZM9.5,9.236H6.184a.409.409,0,0,0-.409.409v4.566H2.255V5.748L7.839.949l5.582,4.793v8.469H9.906V9.645A.409.409,0,0,0,9.5,9.236"
                                fill="#fff"/>
                            <path
                                d="M7.262,4.032H6.789c-.127,0-.215.154-.215.375V5.539c0,.224.086.375.215.375h.473c.126,0,.215-.154.215-.375V4.407c0-.225-.087-.375-.215-.375"
                                fill="#fff"/>
                            <path
                                d="M8.919,4.032H8.446c-.127,0-.215.154-.215.375V5.539c0,.221.088.375.215.375h.473c.127,0,.215-.154.215-.375V4.407c0-.225-.086-.375-.215-.375"
                                fill="#fff"/>
                            <path
                                d="M7.262,6.2H6.789c-.127,0-.215.154-.215.375V7.7c0,.224.086.375.215.375h.473v0c.126,0,.215-.154.215-.375V6.571c0-.225-.087-.375-.215-.375"
                                fill="#fff"/>
                            <path
                                d="M8.919,6.2H8.446c-.127,0-.215.154-.215.375V7.7c0,.22.088.375.215.375h.473v0c.127,0,.215-.154.215-.375V6.571c0-.225-.086-.375-.215-.375"
                                fill="#fff"/>
                        </g>
                    </svg>
                    <span>{bien.loyer_charges_comprises} € / mois (CC)</span>
                </figcaption>
            </figure>
            <div className="tag type">
                {bien.type}
            </div>
            <div className="meta">
                <div className="meta-commune">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.119"
                         height="14.132" viewBox="0 0 12.119 14.132">
                        <path
                            d="M1402.493,393.367a.3.3,0,0,1,.011.159,1.484,1.484,0,0,1,.039.311.115.115,0,0,1,.012.1.13.13,0,0,1,.028.119.061.061,0,0,1,.014.065c.017.05.053.1.038.154a.028.028,0,0,1,.006.042,2.434,2.434,0,0,1,.136.428l.015.063c.023.014.042.029.026.06a.03.03,0,0,1,.012.043.094.094,0,0,1,.035.084.063.063,0,0,1,.02.065.218.218,0,0,1,.066.154c.033.02.034.053.032.086a.174.174,0,0,1,.063.134.057.057,0,0,1,.027.064.46.46,0,0,1,.1.218.04.04,0,0,1,.027.048.2.2,0,0,1,.067.14.039.039,0,0,1,.027.047.1.1,0,0,1,.046.078l.012.033c.026.012.043.03.035.061l.03.057c.034.011.035.04.037.068a.494.494,0,0,1,.122.208.091.091,0,0,1,.046.074.117.117,0,0,1,.048.083.091.091,0,0,1,.047.073l.013.028a.055.055,0,0,1,.039.066.6.6,0,0,1,.146.224.2.2,0,0,1,.083.12.228.228,0,0,1,.076.122c.035.009.039.037.042.066l.021.029a.078.078,0,0,1,.047.065.366.366,0,0,1,.108.16.052.052,0,0,1,.041.06.2.2,0,0,1,.087.121.08.08,0,0,1,.05.067c.022.016.043.033.042.064a.07.07,0,0,1,.047.061,1.479,1.479,0,0,1,.234.317.064.064,0,0,1,.046.059.56.56,0,0,1,.142.189.072.072,0,0,1,.051.062c.022.014.043.029.045.058a.216.216,0,0,1,.1.13.708.708,0,0,1,.179.221.071.071,0,0,1,.052.06.264.264,0,0,1,.1.128.059.059,0,0,1,.048.06,1.526,1.526,0,0,1,.266.311.074.074,0,0,1,.055.065,1.707,1.707,0,0,1,.287.319.132.132,0,0,1,.081.089,1.415,1.415,0,0,1,.233.254.177.177,0,0,1,.092.092l.066.048.249.083h.067l.249-.084.065-.048a.178.178,0,0,1,.092-.091,1.337,1.337,0,0,1,.232-.255.377.377,0,0,1,.142-.156,1.06,1.06,0,0,1,.225-.251.073.073,0,0,1,.056-.065,1.318,1.318,0,0,1,.235-.28.134.134,0,0,1,.079-.092.143.143,0,0,1,.079-.1.133.133,0,0,1,.077-.094.705.705,0,0,1,.178-.219.051.051,0,0,1,.043-.057.148.148,0,0,1,.081-.1.125.125,0,0,1,.074-.1.076.076,0,0,1,.045-.062c0-.033.024-.048.05-.061a.084.084,0,0,1,.045-.064.07.07,0,0,1,.049-.062c0-.031.023-.047.045-.063a.072.072,0,0,1,.049-.062.078.078,0,0,1,.045-.063.071.071,0,0,1,.049-.062l.044-.063a.074.074,0,0,1,.049-.065l.022-.029a.268.268,0,0,1,.106-.151.071.071,0,0,1,.05-.068.055.055,0,0,1,.043-.062.34.34,0,0,1,.107-.157.2.2,0,0,1,.083-.119.357.357,0,0,1,.1-.163.2.2,0,0,1,.083-.123,1.522,1.522,0,0,1,.2-.316.089.089,0,0,1,.048-.075h0a.075.075,0,0,1,.015-.046.348.348,0,0,1,.032-.036.092.092,0,0,1,.047-.076,1.417,1.417,0,0,1,.188-.331.05.05,0,0,1,.035-.062l.012-.032a.1.1,0,0,1,.046-.079h0a.1.1,0,0,1,.016-.058c.01-.017.023-.033.034-.05a.1.1,0,0,1,.044-.078h0a.135.135,0,0,1,.033-.085l.018-.025a.3.3,0,0,1,.08-.156.057.057,0,0,1,.027-.064.069.069,0,0,1,.032-.071.268.268,0,0,1,.063-.148.224.224,0,0,1,.066-.155.063.063,0,0,1,.019-.064.094.094,0,0,1,.036-.085h0a.033.033,0,0,1,0-.024.034.034,0,0,1,.015-.019c-.017-.032,0-.047.027-.061l.014-.063a2.425,2.425,0,0,1,.137-.428h0a.029.029,0,0,1-.007-.022.033.033,0,0,1,.012-.02.081.081,0,0,1,.03-.1.282.282,0,0,1,0-.032.148.148,0,0,1,.024-.089.2.2,0,0,1,.035-.148h0a.054.054,0,0,1,0-.054.086.086,0,0,1,.01-.017,1.432,1.432,0,0,1,.039-.311.407.407,0,0,1,.013-.19q0-.235,0-.47a.282.282,0,0,1-.01-.159,1.451,1.451,0,0,1-.039-.311.117.117,0,0,1-.012-.1.145.145,0,0,1-.031-.119.165.165,0,0,1-.02-.122.088.088,0,0,1-.031-.1.069.069,0,0,1-.014-.069.089.089,0,0,1-.034-.088l-.018-.084a2.553,2.553,0,0,1-.165-.417.057.057,0,0,1-.021-.06.052.052,0,0,1-.033-.065.173.173,0,0,1-.06-.126c-.025-.013-.043-.03-.034-.061a.37.37,0,0,1-.1-.172.148.148,0,0,1-.066-.11.214.214,0,0,1-.084-.131.272.272,0,0,1-.106-.151l-.022-.028a.076.076,0,0,1-.053-.066l-.569-.611a.058.058,0,0,1-.057-.049l-.006,0a.079.079,0,0,1-.064-.055.157.157,0,0,1-.095-.079.059.059,0,0,1-.062-.046.4.4,0,0,1-.157-.109.076.076,0,0,1-.065-.047l-.029-.021c-.029,0-.057-.007-.067-.041l-.309-.171a.09.09,0,0,1-.077-.045h0a1.239,1.239,0,0,1-.184-.069c-.06-.027-.118-.057-.177-.087a.262.262,0,0,1-.164-.065h0l-.086-.018a.165.165,0,0,1-.115-.042h0a.03.03,0,0,1-.016,0l-.007,0a.033.033,0,0,1-.019-.014c-.057.01-.1-.023-.153-.037a.056.056,0,0,1-.065-.018.078.078,0,0,1-.088-.022.116.116,0,0,1-.1-.012,1.074,1.074,0,0,1-.28-.039.264.264,0,0,1-.158-.013h-.627a.266.266,0,0,1-.159.013,1.074,1.074,0,0,1-.28.039.116.116,0,0,1-.1.012.077.077,0,0,1-.088.023.057.057,0,0,1-.065.018c-.051.014-.1.047-.153.037a.029.029,0,0,1-.042.008.167.167,0,0,1-.115.042l-.081.019a.283.283,0,0,1-.169.064l-.068.037a.938.938,0,0,1-.214.083.312.312,0,0,1-.156.081l-.033.012c-.012.025-.029.043-.061.034l-.058.031c-.01.035-.038.038-.068.041a.111.111,0,0,1-.09.053,246.186,246.186,0,0,1-.317.218.14.14,0,0,1-.094.077l-.063.048a.081.081,0,0,1-.065.055l-.006,0a.059.059,0,0,1-.057.05l-.643.7a.284.284,0,0,1-.106.152.216.216,0,0,1-.084.129.154.154,0,0,1-.067.111h0a.39.39,0,0,1-.036.092.363.363,0,0,1-.06.079c.009.032-.009.049-.034.062a.173.173,0,0,1-.06.126.051.051,0,0,1-.033.065.057.057,0,0,1-.02.06,2.56,2.56,0,0,1-.165.416l-.019.085a.161.161,0,0,1-.041.116h0a.03.03,0,0,1,0,.017s0,0,0,0a.032.032,0,0,1-.013.019c.013.058-.021.1-.038.154a.062.062,0,0,1-.013.064.142.142,0,0,1-.031.119.116.116,0,0,1-.012.1,1.452,1.452,0,0,1-.039.311.274.274,0,0,1-.011.158Zm2.848-3.344a3.392,3.392,0,0,1,4.731,1.725,3.671,3.671,0,0,1,.28,1.384,4.621,4.621,0,0,1-.455,1.76,15.252,15.252,0,0,1-2.457,3.734c-.129.15-.272.288-.4.441-.084.1-.135.1-.228,0a17.329,17.329,0,0,1-1.706-2.137,12.449,12.449,0,0,1-1.351-2.529A3.513,3.513,0,0,1,1405.341,390.023Z"
                            transform="translate(-1400.867 -388.618)" fill="#fff"/>
                        <path
                            d="M1398.4,479.966a4.99,4.99,0,0,0-1.781-.806c-.076-.021-.1.026-.136.073-.165.228-.327.458-.5.682-.077.1-.051.136.06.16a6.167,6.167,0,0,1,.809.238,2.742,2.742,0,0,1,1.02.558.441.441,0,0,1,.01.708,1.816,1.816,0,0,1-.448.337,7.644,7.644,0,0,1-2.825.794,13.62,13.62,0,0,1-2.766.045,10.253,10.253,0,0,1-2.285-.426,4.324,4.324,0,0,1-1.2-.558c-.53-.374-.525-.732.021-1.087a3.682,3.682,0,0,1,.9-.417c.262-.083.526-.16.807-.245-.2-.286-.389-.558-.58-.831a.088.088,0,0,0-.109-.035,4.847,4.847,0,0,0-1.85.872,1.479,1.479,0,0,0-.033,2.36,4.421,4.421,0,0,0,1.656.881,12.587,12.587,0,0,0,3.982.54,12.263,12.263,0,0,0,3.684-.539,4.475,4.475,0,0,0,1.621-.85,1.535,1.535,0,0,0,.6-1.314A1.58,1.58,0,0,0,1398.4,479.966Z"
                            transform="translate(-1386.947 -469.679)" fill="#fff"/>
                        <path
                            d="M1436.248,419.569a1.009,1.009,0,1,0-1.012-1.013A1.012,1.012,0,0,0,1436.248,419.569Z"
                            transform="translate(-1430.184 -414.524)" fill="#fff"/>
                    </svg>
                    {bien.ville}
                </div>
                <div className="meta-datas">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="25" height="18"
                             viewBox="0 0 640 512">
                            <path
                                fill={"currentColor"}
                                d="M384 16H576c26.5 0 48 21.5 48 48V448c0 26.5-21.5 48-48 48H409.3c-2.5 5.7-5.6 11.1-9.3 16H576c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H384c-35.3 0-64 28.7-64 64v89.9l16 14.7V64c0-26.5 21.5-48 48-48zm32 272h24c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H408c-7.7 0-14.5 3.6-18.9 9.2l1 .9c3.8 3.5 7.3 7.3 10.3 11.5c1-3.2 4.1-5.6 7.6-5.6h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H415.8c.1 1.7 .2 3.4 .2 5.1V288zm0 112h24c13.3 0 24-10.7 24-24V344c0-13.3-10.7-24-24-24H416v16h24c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H416v16zM520 208c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H520zm-8 24c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H520c-4.4 0-8-3.6-8-8V232zM496 344v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V344c0-13.3-10.7-24-24-24H520c-13.3 0-24 10.7-24 24zm24-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H520c-4.4 0-8-3.6-8-8V344c0-4.4 3.6-8 8-8zM408 96c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H408zm-8 24c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H408c-4.4 0-8-3.6-8-8V120zm96 0v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H520c-13.3 0-24 10.7-24 24zm24-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H520c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8zM16 280.6c0-11.2 4.7-21.9 13-29.5L165 126.5c15.3-14 38.8-14 54.1 0L355 251.1c8.3 7.6 13 18.3 13 29.5V456c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V280.6zM0 456c0 30.9 25.1 56 56 56H328c30.9 0 56-25.1 56-56V280.6c0-15.7-6.6-30.7-18.2-41.3l-136-124.7c-21.4-19.6-54.3-19.6-75.7 0L18.2 239.4C6.6 250 0 264.9 0 280.6V456zM224 280c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V288c0-4.4 3.6-8 8-8h64zm-64-16c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24V288c0-13.3-10.7-24-24-24H160z"/>
                        </svg>

                        <span>{bien.nombre_pieces}</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.983" height="13.583"
                             viewBox="0 0 12.983 13.583">
                            <g id="Picto_surface" data-name="Picto surface"
                               transform="translate(0.501 0.45)">
                                <path id="Tracé_219" data-name="Tracé 219"
                                      d="M3515.493,3588.212v-3.586h3.733"
                                      transform="translate(-3515.493 -3584.625)" fill="none"
                                      stroke="#4b7388"
                                      strokeLinecap="round" strokeWidth="0.9"/>
                                <path id="Tracé_223" data-name="Tracé 223"
                                      d="M3515.493,3585.625v3.586h3.733"
                                      transform="translate(-3515.493 -3576.614)" fill="none"
                                      stroke="#4b7388"
                                      strokeLinecap="round" strokeWidth="0.9"/>
                                <path id="Tracé_221" data-name="Tracé 221"
                                      d="M3520.226,3588.212v-3.586h-3.733"
                                      transform="translate(-3508.317 -3584.625)" fill="none"
                                      stroke="#4b7388"
                                      strokeLinecap="round" strokeWidth="0.9"/>
                                <path id="Tracé_222" data-name="Tracé 222"
                                      d="M3520.226,3585.625v3.586h-3.733"
                                      transform="translate(-3508.317 -3576.614)" fill="none"
                                      stroke="#4b7388"
                                      strokeLinecap="round" strokeWidth="0.9"/>
                                <path id="Tracé_220" data-name="Tracé 220"
                                      d="M3515.824,3585.064l11.345,12.054"
                                      transform="translate(-3515.526 -3584.67)" fill="none"
                                      stroke="#4b7388"
                                      strokeLinecap="round" strokeWidth="0.9"/>
                                <path id="Tracé_224" data-name="Tracé 224" d="M11.853-.568.143,11.653"
                                      transform="translate(-0.008 0.844)" fill="none" stroke="#4b7388"
                                      strokeLinecap="round" strokeWidth="0.9"/>
                            </g>
                        </svg>
                        <span>{bien.surface
                         }m²</span>
                    </div>
                </div>

            </div>
        </div>
    </Link>

}
