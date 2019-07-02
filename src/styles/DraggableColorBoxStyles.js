import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.25)'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%'
        }
    },
    boxContent: {
        position: 'absolute',
        color: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterPpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        color: props => chroma(props.color).luminance() <= 0.085 ? 'white' : 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: 'all 0.3s ease-in-out'
    }
};

export default styles;