import React from 'react';
import './Footer.css';

function Footer(data) {
	return (
		<>
			{data.poweredBy !== '' ? (
				<p className='p-footer'>
					Powered by <a className='a-footer' href={data.link}> {data.poweredBy}</a>
				</p>
			) : (
				<></>
			)}
		</>
		);
}



export default Footer;
