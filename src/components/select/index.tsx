import Select, { SelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { GLOBAL_STYLES } from '../globalStyles';

const useStyles = makeStyles(theme => ({
  hideIconPadding: {
    '& .MuiOutlinedInput-input': {
      padding: '10px 32px 10px 20px',
    },
    background: GLOBAL_STYLES.buttonBackground,
    color: GLOBAL_STYLES.fontColor
  }
}));

interface CustomSelectProps {
  value: string | null;
  onChange: SelectProps['onChange'];
  options: JSX.Element[];
}

function CustomSelect({
  value, 
  onChange, 
  options
}: CustomSelectProps) {
  const classes = useStyles();
  return (
    <FormControl 
      variant='outlined' 
      // className={classes.formControl}
    >
      <Select
        value={value}
        onChange={onChange}
        className={classes.hideIconPadding}
      >
        {options}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
