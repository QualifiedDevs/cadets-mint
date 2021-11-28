import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';

const MintSupply = styled((props) => {
    return (
        <Typography {...props} className={`${props.className} mint-supply`}>
            20/20
        </Typography>
    );
})``;

export default MintSupply;
