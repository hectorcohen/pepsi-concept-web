import React from 'react'
import './styles.css'
import soda from '../../assets/soda2.png'
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter} from 'react-icons/fi'

export default function Home() {
	return (
		<>
			<div className="container">
				<div className="container-texts">
					<h1>Get More With Pepsi</h1>
					<div className='container-content-text'>
						<p>
							All your favorite flavors. All right here. Pepsi, Diet Pepsi
							Pepsi Zero Sugar. The gang's all here. Compare flavors, get nutritional
							facts and check out ingredients for all our Pepsi products
						</p>
					</div>
					<button>VIEW PRODUCTS</button>
				</div>
				<div className="container-images">
					<img src={soda} alt='pepsi soda'/>
				</div>
			</div>
			<div className="container-networks">
				<FiInstagram className="container-networks-icons"/>
				<FiYoutube  className="container-networks-icons"/>
				<FiTwitter  className="container-networks-icons"/>
				<FiFacebook  className="container-networks-icons"/>
			</div>
		</>

	)
}