import React, { useState, useEffect} from 'react';
import './RollInputs.css';
import Result from './Result';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
export default function RollInputs() {
  const classes = useStyles();

  const [roll, setRoll] = useState('');
  const [table, setTable] = useState(false);
  const [numArray, setNumArray] = useState([]);
  const [invalidInput, setInvalidInput] = useState(false);

  useEffect(() => {
    console.log('hi' + roll);
    setTable(false);
  }, [roll]);
  const handleSubmit = () => {
    setTable(!table);
    setNumArray(() => {
      const rollArray = roll.split(',').map((item) => Number(item));
      const uniqueArray = rollArray.filter(Boolean);
      console.log('uniqueArray' + uniqueArray);
      const rollLength = rollArray.length;
      const unqiueLength = uniqueArray.length;
      if (rollLength > unqiueLength) {
        setInvalidInput(true);
      } else {
        setInvalidInput(false);
      }
      setTimeout(()=>{window.scrollBy({
        top: 200,
        behavior: 'smooth',
      })}, 1);
      return uniqueArray;
    });
  };

  // console.log("rollArray length " +rollArray.length());
  // console.log("uniqueArray length" + uniqueArray.length());
  console.log('numArray ' + numArray);
  console.log('ID ' + table);
  console.log('invalidInput ' + invalidInput);
  const invalidStyle = {
    color: 'white',
    padding: '10px',
    fontFamily: 'Arial',
    fontSize: '1.5rem',
    marginLeft: '40%',
  };
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={classes.root}
        noValidate
      >
        <CssTextField
          className={classes.margin}
          type="text"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
          label="Enter Roll No."
          variant="outlined"
        />
        {roll === '' ? (
          <button>{table === true ? 'Return' : 'Submit'}</button>
        ) : (
          <button onClick={handleSubmit}>
            {table === true ? 'Return' : 'Submit'}
          </button>
        )}
      </form>
      {invalidInput && table && (
        <div style={invalidStyle}>Invalid inputs are removed</div>
      )}
      {table && (
        <>
          <Result arrayRoll={numArray} />
          <button className="btn" onClick={handleSubmit}>
            Return
          </button>
        </>
      )}
    </>
  );
}
