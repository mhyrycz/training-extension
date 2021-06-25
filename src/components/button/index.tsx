import MuiButton, {} from '@material-ui/core/Button';
import { GLOBAL_STYLES } from '../globalStyles';

interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({onClick, title}: Props) => (
    <MuiButton
      style={{
        backgroundColor: GLOBAL_STYLES.buttonBackground, 
        color: GLOBAL_STYLES.fontColor, 
        marginRight: '16px'
      }}
      variant='contained'
      size='medium'
      onClick={() => onClick()}
    >
      {title}
    </MuiButton>
  );

export default Button;
