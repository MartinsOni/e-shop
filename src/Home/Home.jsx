import React from 'react'
import Product from '../Products/Product'
import Typical from 'react-typical'
import "./Home.css"


const Home = () => {

  return (

    <div className="home">

      <div className="home_container">

        <img src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/disaster_relief/ukraine/XCM_Manual_1424860_2295842_4619834_DE_de_de_desktop_editorial_de_de_1500x323_1X_de_DE._CB624741512_.jpg" alt="" className="home_image" />


        <div className="deal">

          <div className="week_deal">
            <Typical
              steps={['Deal of the Week', 2000, 'Reduction in the Original Price!', 4000, "-40% Extra", 2000]}
              loop={Infinity}
            />
            <img src="https://m.media-amazon.com/images/I/51Jni3TaO0L._AC_SX679_.jpg" alt="" className="deal_image" />
          </div>
          <h3>Fitpolo Smartwatch for Men and Women</h3>
          <h2>
          <small style={{ textDecoration: "line-through" }}>€</small>
            <strong style={{  textDecoration: "line-through" }}>480.99</strong>
          </h2>
          <h2>
            <small style={{ color: "red" }}>€</small>
            <strong style={{ color: "red" }}>280.99</strong>
          </h2>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          <button>Add to Basket</button>
        </div>

        <div className="home_row">
        <Product
            id="1"
            title="LEGO 76951 Jurassic World Pyroraptor & Dilophosaurus Transport, Spielzeugauto Off-Roader"
            image="https://www.lego.com/cdn/cs/set/assets/blte01dc98f7d24fa06/31112_alt1.jpg"
            price={300.95}
            rate={5}
          />

          <Product
            id="2"
            title="Fitpolo Smartwatch for Men and Women"
            image="https://m.media-amazon.com/images/I/51Jni3TaO0L._AC_SX679_.jpg"
            price={480.99}
            rate={5}
          />

          <Product
            id="3"
            title="2021 Christmas Random Electronic Box Random Electronic Products Box for Men Search As Projectors"
            price={325.95}
            rate={4}
            image="https://m.media-amazon.com/images/I/612-rnu8QvL._AC_SX679_.jpg"
          />

          <Product
            id="4"
            title="Netatmo Smart Weather Station"
            price={253.90}
            rate={4}
            image="https://m.media-amazon.com/images/I/41yQSN5xsxS._AC_.jpg"
          />

        </div>

        <div className="home_row">

          <Product
            id="5"
            title="Netatmo Smart Weather Station"
            price={125.55}
            rate={4}
            image="https://m.media-amazon.com/images/I/41ii4uFB7zS._AC_.jpg"
          />

          <Product
            id="6"
            title="Siemens EQ.9 – Fully Automatic Coffee Machine with Touch Screen"
            price={251.05}
            rate={2}
            image="https://m.media-amazon.com/images/I/6105ZdLqNoL._AC_SX679_.jpg"
          />

          <Product
            id="7"
            title="LEVOIT 6L Humidifier Top-Fill Humidifier WiFi 26 dB with App & Alexa Control"
            price={235.95}
            rate={4}
            image="https://m.media-amazon.com/images/I/61of2gjCA-L._AC_SX679_.jpg"
          />

          <Product
            id="8"
            title="RoboVac 30C robotic vacuum cleaner, Wi-Fi vacuum cleaner robot with BoostIQ"
            price={205.95}
            rate={5}
            image="https://m.media-amazon.com/images/I/71qeXDbFk2L._AC_SX679_.jpg"
          />

        </div>

        <div className="home_row">

          <Product
            id="9"
            title="Echo Sub | Powerful subwoofer for your Echo—requires compatible Echo device"
            price={255.95}
            rate={4}
            image="https://m.media-amazon.com/images/I/61LMSbmQfsL._AC_SX679_.jpg"
          />

          <Product
            id="10"
            title="STIEBEL ELTRON electronically controlled instantaneous water heater "
            price={251.95}
            rate={3}
            image="https://m.media-amazon.com/images/I/41LJKpFR1oL._AC_SY879_.jpg"
          />

          <Product
            id="11"
            title="Storage Box - Electronic Products Boxes: The Liquidation Boxes Returns Contains Unexpected Gifts "
            price={225.95}
            rate={5}
            image="https://m.media-amazon.com/images/I/61ECV94DqFL._AC_SX679_.jpg"
          />

        </div>

        <div className="home_row">

          <Product
            id="12"
            title="2022 Storage Box - Electronic Products/Jewelry Products Boxes"
            price={225.95}
            rate={5}
            image="https://m.media-amazon.com/images/I/71FAGMrJKKL._AC_SX679_.jpg"
          />

          <Product
            id="13"
            title="Mobile PA Sound System Battery MP3 USB-SD incl. E-Lektron EL38-M Radio Microphone"
            price={215.05}
            rate={4}
            image="https://m.media-amazon.com/images/I/51BpsCQJQGL._AC_SY879_.jpg"
          />

          <Product
            id="14"
            title="Moukey Karaoke Speaker, Bluetooth Karaoke System Power 160 W PA System with DJ Lights"
            price={250.95}
            rate={2}
            image="https://m.media-amazon.com/images/I/71RTLbBg8qL._AC_SX679_.jpg"
          />

          <Product
            id="15"
            title="Digital Picture Frame, WiFi, 8 Inch HD IPS Touchscreen Electronic Photo Frame"
            price={256.95}
            rate={3}
            image="https://m.media-amazon.com/images/I/710vpeT-W8L._AC_SX679_.jpg"
          />

        </div>

      </div>
    </div>

  )
}

export default Home


