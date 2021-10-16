import { getColorHex } from 'utils/colors/getColor';
import CardHeader from './CardHeader';
import CardIntro from './CardIntro';
import CardContent from './CardContent';

const styles = {
	card: {
		maxWidth: 345,
		height: 'auto',
		borderRadius: 6,
		border: '1px solid black',
		background: getColorHex('clouds'),
		color: getColorHex('midnight-blue'),
		padding: 16,
		margin: 8,
		display: 'flex',
		flexDirection: 'column',
		gap: 16
	}
};

const Card = ({ title, intro, content, showMore }) => {
	return (
		<div style={styles.card}>
			<CardHeader title={title} />
			<CardIntro intro={intro} />
			{showMore && <CardContent content={content} />}
		</div>
	);
};

export default Card;
