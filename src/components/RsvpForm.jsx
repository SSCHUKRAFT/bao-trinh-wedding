import { useState } from "react";
import './rsvpform.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import emailjs from "@emailjs/browser";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from '@mui/material/Radio';
import CircularProgress from '@mui/material/CircularProgress';

function RsvpForm() {
  const [numGuests, setNumGuests] = useState(1);
  const [firstNames, setFirstNames] = useState(Array(numGuests).fill(""));
  const [lastNames, setLastNames] = useState(Array(numGuests).fill(""));
  const [allergyRadios, setAllergyRadios] = useState(Array(numGuests).fill(true))
  const [allergies, setAllergies] = useState(Array(numGuests).fill(""));
  const [loading, setLoading] = useState(false);

  function handleNumGuestsChange(event) {
    const newNumGuests = parseInt(event.target.value);
    setNumGuests(newNumGuests);

    setFirstNames(prevFirstNames => {
      const newFirstNames = [...prevFirstNames];
      while (newFirstNames.length < newNumGuests) {
        newFirstNames.push("");
      }
      return newFirstNames.slice(0, newNumGuests);
    });

    setLastNames(prevLastNames => {
      const newLastNames = [...prevLastNames];
      while (newLastNames.length < newNumGuests) {
        newLastNames.push("");
      }
      return newLastNames.slice(0, newNumGuests);
    });

    setAllergyRadios(prevAllergyRadios => {
      const newAllergyRadios = [...prevAllergyRadios];
      while (newAllergyRadios.length < newNumGuests) {
        newAllergyRadios.push(true);
      }
      return newAllergyRadios.slice(0, newNumGuests);
    });

    setAllergies(prevAllergies => {
      const newAllergies = [...prevAllergies];
      while (newAllergies.length < newNumGuests) {
        newAllergies.push("");
      }
      return newAllergies.slice(0, newNumGuests);
    });
  }

  const handleFirstNameChange = (event, index) => {
    const newFirstNames = [...firstNames];
    newFirstNames[index] = event.target.value;
    setFirstNames(newFirstNames);
  }

  const handleLastNameChange = (event, index) => {
    const newLastNames = [...lastNames];
    newLastNames[index] = event.target.value;
    setLastNames(newLastNames);
  }

  const handleAllergyRadioChange = (event, index) => {
    const newAllergyRadios = [...allergyRadios];
    let booleanResp;
    if (event.target.value === "true"){
      booleanResp = true;
    }else {
      booleanResp = false;
    }
    newAllergyRadios[index] = booleanResp;
    setAllergyRadios(newAllergyRadios);
  }

  const handleAllergyChange = (event, index) => {
    const newAllergies = [...allergies];
    newAllergies[index] = event.target.value;
    setAllergies(newAllergies);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // // Check if any required fields are null
    // if (firstNames.includes("") || lastNames.includes("")) {
    //   alert("Please ensure first and last name(s) are filled out before submitting.");
    //   setLoading(false);
    //   return;
    // }

    // const templateParams = {
    //   guestCount: numGuests,
    //   guestList: Array(numGuests).fill().map((_, i) => (
    //     `Guest ${i + 1}: ${firstNames[i]} ${lastNames[i]}, Food allergies: ${allergies[i]}`
    //   )).join('\n\n')
    // };


    // emailjs.send('service_yuq2dkl', 'template_zj5oroc', templateParams, 'euCgll_J6Ylx_2x2d')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     alert("Your RSVP was successfully received. We can't wait to see you there!" );
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //     alert('Failed to submit RSVP. Please try again.');
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    alert("Sorry, but the time to RSVP has expired. Feel free to contact Vu at (585) 766-4899 or Anh at (585) 978-0029")
  }

  return (
    <div className="form-container">
      <div className="guest-select">
        <div className="guest-select-text-label">How many guests are you bringing?</div>
        <div className="guest-select-dropdown">
          <Select value={numGuests} onChange={handleNumGuestsChange} size="small">
            {[...Array(10)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="form-groups">
        {[...Array(numGuests)].map((_, i) => (
          <div key={i}>
            <div className="form-group">
              <div className="guest-num-txt">Guest {i + 1}</div>
              <div className="name-fields">
                <div className="name-field">
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small" 
                    sx={{ width: '100%' }} 
                    onChange={(event) => handleFirstNameChange(event, i)}
                  />
                </div>
                <div className="name-field">
                  <TextField 
                    label="Last Name" 
                    variant="outlined" 
                    size="small" 
                    sx={{ width: '100%' }} 
                    onChange={(event) => handleLastNameChange(event, i)} 
                  />
                </div>
              </div>
                <div className="allergy-selection">
                  <div className="allergy-radio">
                    <FormControl>
                      <div className="allergy-radio-txt">Any food allergies?</div>
                      <RadioGroup
                        value={allergyRadios[i]}
                        onChange={(event) => handleAllergyRadioChange(event, i)}
                      >
                        <FormControlLabel value={"true"} control={<Radio size="small" />} label="No" />
                        <FormControlLabel value={"false"} control={<Radio size="small" />} label="Yes" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="allergy-input">
                    <TextField
                      label="Allergy"
                      variant="outlined"
                      size="small" 
                      sx={{ width: '100%' }} 
                      disabled={allergyRadios[i]}
                      onChange={(event) => handleAllergyChange(event, i)}
                    />
                  </div>
                </div>
              <div className="divider" />
            </div>
          </div>
        ))}
        <button onClick={handleFormSubmit}>
          {loading ? <CircularProgress size={20}/> : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default RsvpForm;