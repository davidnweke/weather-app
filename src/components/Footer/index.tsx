import React from 'react';
import { Wrapper } from './styles';
import GH from '../../assets/github.svg';


const Footer: React.FC = () => {
	return (
		<Wrapper>
			<p>
				David Nweke
				&copy; { new Date().getFullYear() }
			</p>
			<div className='contact'>
				<a href='https://github.com/davidnweke' target='_blank' rel='noopener noreferrer'>
					<img src={ GH } alt='Github' />
				</a>
			</div>
		</Wrapper>
	);
};

export default Footer;
