import './App.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getTrainingType, updateTrainingType } from "../redux/trainingSlice";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const onClick = () => {
  for(let i=0; i<5; i++) {
    chrome.tabs.create({url:'https://qczaj.pl/moje-konto/my-favourites/'}, function(tab) {
    });
  }
}

function App() {
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.value as string
    if (name) {
      dispatch(updateTrainingType(name))
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => onClick()}>
          New Tabs
        </button>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={useAppSelector(getTrainingType)}
          onChange={handleChange}
          displayEmpty
          //className={classes.selectEmpty}
        >
          <MenuItem value={'bjs'}>BJS</MenuItem>
          <MenuItem value={'pt'}>PT</MenuItem>
          <MenuItem value={'mg'}>MG</MenuItem>
        </Select>
        {JSON.stringify(useAppSelector(getTrainingType))}
      </header>
    </div>
  );
}

export default App;
