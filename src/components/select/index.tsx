import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { GLOBAL_STYLES, SelectWithLabel, Label } from '../globalStyles';

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
  label: string;
  value: string | number | null;
  onChange: SelectProps['onChange'];
  getOptions: () => (string | number)[];
}

function CustomSelect({
  label,
  value, 
  onChange, 
  getOptions
}: CustomSelectProps) {

  const classes = useStyles();

  const getOptionItems = () => {
    return getOptions().map(option => (
      <MenuItem value={option}>{option ? option : 'Brak'}</MenuItem>
    ))
  };

  return (
    <SelectWithLabel>
      <Label>
        {label}
      </Label>
      <FormControl variant='outlined'>
        <Select
          value={value}
          onChange={onChange}
          className={classes.hideIconPadding}
        >
          {getOptionItems()}
        </Select>
      </FormControl>
    </SelectWithLabel>
  );
}

export default CustomSelect;
