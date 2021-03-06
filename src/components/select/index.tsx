import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { GLOBAL_STYLES, SelectWithLabel, Label } from '../globalStyles';

interface CustomSelectProps {
  label: string;
  value: string | number | null;
  onChange: SelectProps['onChange'];
  getOptions: () => (string | number)[];
  disabled?: boolean;
  width: string;
}

function CustomSelect({
  label,
  value, 
  onChange, 
  getOptions,
  disabled,
  width
}: CustomSelectProps) {

  const useStyles = makeStyles(theme => ({
    hideIconPadding: {
      '& .MuiOutlinedInput-input': {
        padding: '10px 32px 10px 20px',
      },
      background: GLOBAL_STYLES.buttonBackground,
      color: GLOBAL_STYLES.fontColor,
      width
    }
  }));

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
          disabled={disabled}
        >
          {getOptionItems()}
        </Select>
      </FormControl>
    </SelectWithLabel>
  );
}

export default CustomSelect;
