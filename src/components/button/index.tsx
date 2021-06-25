import MuiButton, {} from '@material-ui/core/Button';
import { GLOBAL_STYLES } from '../globalStyles';

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({onClick, title, disabled}: Props) => (
    <MuiButton
      style={{
        backgroundColor: GLOBAL_STYLES.buttonBackground, 
        color: GLOBAL_STYLES.fontColor, 
        marginRight: '16px'
      }}
      variant='contained'
      size='medium'
      onClick={() => onClick()}
      disabled={disabled}
    >
      {title}
    </MuiButton>
  );

export default Button;
