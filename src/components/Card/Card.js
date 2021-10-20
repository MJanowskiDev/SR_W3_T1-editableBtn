import { useState } from 'react';
import { getColorHex } from 'utils/colors/getColor';
import CardHeader from './CardHeader';
import CardIntro from './CardIntro';
import CardContent from './CardContent';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
	card: {
		maxWidth: 345,
		height: 'auto',
		borderRadius: 6,
		border: '1px solid black',
		background: getColorHex('wet-asphalt'),
		color: getColorHex('clouds'),
		padding: 16,
		margin: 8,
		display: 'flex',
		flexDirection: 'column',
		gap: 16
	},
	chevron: {
		textAlign: 'right',
		color: getColorHex('sun-flower')
	},
	image: {
		width: '100%',
		height: 'auto',
		maxHeight: 200,
		borderRadius: 6,
		objectFit: 'cover'
	}
};

const Card = ({ title, intro, content, image }) => {
	const [ showMore, setShowMore ] = useState(false);
	return (
		<div style={styles.card}>
			<CardHeader title={title} />
			<img alt={title} style={styles.image} src={image} />
			<CardIntro intro={intro} />
			{content && (
				<div style={styles.chevron}>
					<FontAwesomeIcon
						onClick={() => setShowMore(!showMore)}
						size="lg"
						icon={showMore ? faChevronCircleUp : faChevronCircleDown}
					/>
				</div>
			)}

			{showMore && <CardContent content={content} />}
		</div>
	);
};

export default Card;
