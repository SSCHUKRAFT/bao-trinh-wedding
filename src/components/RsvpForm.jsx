import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Divider,
  Group,
  Notification,
  Paper,
  Radio,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import "./rsvpform.css";

const GUEST_OPTIONS = Array.from({ length: 10 }, (_, index) => ({
  value: String(index + 1),
  label: String(index + 1),
}));

const SEND_RSVP_EMAIL = true;

const fieldStyles = {
  label: { color: "#744b5e", fontWeight: 600, marginBottom: 6 },
  input: {
    background: "#fffdfd",
    border: "1px solid rgba(190, 145, 162, 0.18)",
    color: "#5e3a4a",
    "&:focus": {
      borderColor: "#c98598",
      boxShadow: "0 0 0 3px rgba(201, 133, 152, 0.16)",
    },
  },
};

function RsvpForm() {
  const [numGuests, setNumGuests] = useState(1);
  const [firstNames, setFirstNames] = useState([""]);
  const [lastNames, setLastNames] = useState([""]);
  const [allergyRadios, setAllergyRadios] = useState([true]);
  const [allergies, setAllergies] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const notificationTimeoutRef = useRef(null);

  const alphabeticOnlyPattern = /[^a-zA-Z]/g;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  function dismissActiveInput() {
    const activeElement = document.activeElement;
    if (activeElement && typeof activeElement.blur === "function") {
      activeElement.blur();
    }
  }

  function showNotification(color, message) {
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    setNotification({ color, message });
    notificationTimeoutRef.current = setTimeout(() => {
      setNotification(null);
      notificationTimeoutRef.current = null;
    }, 6000);
  }

  function scrollPageToTop() {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }

  function resizeGuestFields(newNumGuests) {
    setFirstNames((prevFirstNames) => {
      const newFirstNames = [...prevFirstNames];
      while (newFirstNames.length < newNumGuests) {
        newFirstNames.push("");
      }
      return newFirstNames.slice(0, newNumGuests);
    });

    setLastNames((prevLastNames) => {
      const newLastNames = [...prevLastNames];
      while (newLastNames.length < newNumGuests) {
        newLastNames.push("");
      }
      return newLastNames.slice(0, newNumGuests);
    });

    setAllergyRadios((prevAllergyRadios) => {
      const newAllergyRadios = [...prevAllergyRadios];
      while (newAllergyRadios.length < newNumGuests) {
        newAllergyRadios.push(true);
      }
      return newAllergyRadios.slice(0, newNumGuests);
    });

    setAllergies((prevAllergies) => {
      const newAllergies = [...prevAllergies];
      while (newAllergies.length < newNumGuests) {
        newAllergies.push("");
      }
      return newAllergies.slice(0, newNumGuests);
    });
  }

  function handleNumGuestsChange(value) {
    const newNumGuests = Number(value || 1);
    setNumGuests(newNumGuests);
    resizeGuestFields(newNumGuests);
  }

  const handleFirstNameChange = (value, index) => {
    const newFirstNames = [...firstNames];
    newFirstNames[index] = value.replace(alphabeticOnlyPattern, "");
    setFirstNames(newFirstNames);
  };

  const handleLastNameChange = (value, index) => {
    const newLastNames = [...lastNames];
    newLastNames[index] = value.replace(alphabeticOnlyPattern, "");
    setLastNames(newLastNames);
  };

  const handleAllergyRadioChange = (value, index) => {
    const newAllergyRadios = [...allergyRadios];
    newAllergyRadios[index] = value === "no";
    setAllergyRadios(newAllergyRadios);
  };

  const handleAllergyChange = (value, index) => {
    const newAllergies = [...allergies];
    newAllergies[index] = value;
    setAllergies(newAllergies);
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    dismissActiveInput();

    if (firstNames.some((name) => !name.trim()) || lastNames.some((name) => !name.trim())) {
      alert("Please ensure each guest has both a first and last name before submitting.");
      return;
    }

    setLoading(true);

    const guestList = Array.from({ length: numGuests }, (_, i) => {
      const hasAllergies = !allergyRadios[i];
      const allergyValue = hasAllergies ? allergies[i].trim() || "Not provided" : "None";

      return {
        guestNumber: i + 1,
        firstName: firstNames[i].trim(),
        lastName: lastNames[i].trim(),
        allergies: allergyValue,
      };
    });

    const guestSummary = guestList
      .map(
        (guest) =>
          `Guest ${guest.guestNumber}: ${guest.firstName} ${guest.lastName} | Allergies: ${guest.allergies}`
      )
      .join("\n");

    try {
      if (SEND_RSVP_EMAIL && (!emailJsPublicKey || !emailJsServiceId || !emailJsTemplateId)) {
        throw new Error("EmailJS is not configured. Please set the EmailJS environment variables.");
      }

      if (SEND_RSVP_EMAIL) {
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            guest_count: numGuests,
            guests: guestSummary,
            guest_summary: guestSummary,
            message: `New RSVP submission!\nGuest count: ${numGuests}\n\n${guestSummary}`,
          },
          {
            publicKey: emailJsPublicKey,
          }
        );
      }

      showNotification("teal", "Your RSVP has been received. Thank you! 🎉");
      setNumGuests(1);
      setFirstNames([""]);
      setLastNames([""]);
      setAllergyRadios([true]);
      setAllergies([""]);
      scrollPageToTop();
    } catch (error) {
      console.error("Failed to submit RSVP email.", error);
      showNotification(
        "red",
        "We're sorry, something went wrong. Please contact Bao or Trinh if you continue to have issues."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      {notification ? (
        <div className="rsvp-notification-shell">
          <Notification
            className="rsvp-notification"
            color={notification.color}
            radius="lg"
            disallowClose={false}
            onClose={() => setNotification(null)}
            styles={{
              root: {
                background: notification.color === "red" ? "rgba(123, 40, 54, 0.95)" : "rgba(52, 113, 92, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.26)",
                boxShadow: "0 18px 42px rgba(32, 18, 24, 0.24)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              },
              title: { color: "#fffaf7", fontWeight: 700 },
              description: { color: "rgba(255, 250, 247, 0.92)", lineHeight: 1.5 },
              closeButton: {
                color: "#fffaf7",
                "&:hover": { background: "rgba(255, 255, 255, 0.12)" },
              },
              icon: {
                background: "rgba(255, 255, 255, 0.18)",
                color: "#fffaf7",
              },
            }}
          >
            {notification.message}
          </Notification>
        </div>
      ) : null}

      <div className="guest-select">
        <div className="guest-select-text-label">
          <Text className="guest-select-eyebrow">Celebration Details</Text>
          <Text className="guest-select-heading">How many guests are you bringing?</Text>
        </div>
        <div className="guest-select-dropdown">
          <Select
            data={GUEST_OPTIONS}
            value={String(numGuests)}
            onChange={handleNumGuestsChange}
            radius="xl"
            size="md"
            aria-label="Number of guests"
            styles={{
              input: {
                minHeight: 52,
                background: "rgba(255, 247, 249, 0.96)",
                border: "1px solid rgba(184, 132, 150, 0.24)",
                color: "#744b5e",
                fontWeight: 600,
                boxShadow: "0 14px 30px rgba(105, 67, 82, 0.08)",
                "&:focus": {
                  borderColor: "#c98598",
                  boxShadow: "0 0 0 3px rgba(201, 133, 152, 0.16)",
                },
              },
              rightSection: {
                color: "#bc7f95",
              },
              dropdown: {
                background: "#fff7fb",
                border: "1px solid rgba(184, 132, 150, 0.18)",
                boxShadow: "0 22px 38px rgba(105, 67, 82, 0.14)",
              },
              item: {
                color: "#744b5e",
                fontWeight: 600,
                "&[data-selected]": {
                  background: "rgba(201, 133, 152, 0.16)",
                  color: "#744b5e",
                },
                "&[data-hovered]": {
                  background: "rgba(201, 133, 152, 0.1)",
                },
                "&[data-selected][data-hovered], &[data-selected]:hover": {
                  background: "rgba(201, 133, 152, 0.16)",
                  color: "#744b5e",
                },
              },
            }}
          />
        </div>
      </div>

      <Stack spacing="lg" className="form-groups">
        {Array.from({ length: numGuests }, (_, i) => (
          <Paper
            key={i}
            radius={28}
            p="lg"
            className="guest-card"
            sx={{
              background: "rgba(255, 249, 251, 0.92)",
              border: "1px solid rgba(190, 145, 162, 0.16)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 22px 42px rgba(105, 67, 82, 0.12)",
            }}
          >
            <Stack spacing="md">
              <div className="guest-card-header">
                <Text className="guest-card-kicker">Guest {i + 1}</Text>
                <Text className="guest-card-title">Guest Information</Text>
              </div>

              <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                  label="First Name"
                  placeholder="First name"
                  radius="md"
                  size="md"
                  value={firstNames[i]}
                  onChange={(event) => handleFirstNameChange(event.currentTarget.value, i)}
                  styles={fieldStyles}
                />
                <TextInput
                  label="Last Name"
                  placeholder="Last name"
                  radius="md"
                  size="md"
                  value={lastNames[i]}
                  onChange={(event) => handleLastNameChange(event.currentTarget.value, i)}
                  styles={fieldStyles}
                />
              </SimpleGrid>

              <div className="allergy-selection">
                <div className="allergy-radio">
                  <Text className="allergy-radio-txt">Any food allergies?</Text>
                  <Radio.Group
                    value={allergyRadios[i] ? "no" : "yes"}
                    onChange={(value) => handleAllergyRadioChange(value, i)}
                  >
                    <Group mt="xs" spacing="xl" className="allergy-radio-options">
                      <Radio
                        value="no"
                        label="No"
                        color="pink"
                        styles={{ label: { color: "#744b5e", fontWeight: 600 } }}
                      />
                      <Radio
                        value="yes"
                        label="Yes"
                        color="pink"
                        styles={{ label: { color: "#744b5e", fontWeight: 600 } }}
                      />
                    </Group>
                  </Radio.Group>
                </div>

                {!allergyRadios[i] ? (
                  <div className="allergy-input">
                    <Textarea
                      label="Allergy Details"
                      placeholder="List allergies or dietary restrictions"
                      minRows={2}
                      autosize
                      radius="md"
                      size="md"
                      value={allergies[i]}
                      onChange={(event) => handleAllergyChange(event.currentTarget.value, i)}
                      styles={fieldStyles}
                    />
                  </div>
                ) : null}
              </div>

              {i < numGuests - 1 ? <Divider color="rgba(190, 145, 162, 0.18)" /> : null}
            </Stack>
          </Paper>
        ))}

        <Button
          type="submit"
          loading={loading}
          radius="xl"
          size="lg"
          className="rsvp-submit-button"
          sx={{
            alignSelf: "center",
            background: "linear-gradient(135deg, #c98598 0%, #d7a1b3 100%)",
            color: "#fffaf5",
            border: "2px solid rgba(255, 255, 255, 0.86)",
            boxShadow: "0 18px 36px rgba(134, 81, 100, 0.24)",
            transition: "transform 180ms ease, box-shadow 180ms ease",
            "&:hover": {
              background: "linear-gradient(135deg, #c98598 0%, #d7a1b3 100%)",
              border: "2px solid rgba(255, 255, 255, 0.96)",
              transform: "translateY(-1px)",
              boxShadow: "0 22px 42px rgba(134, 81, 100, 0.28)",
            },
          }}
        >
          Submit RSVP
        </Button>
      </Stack>
    </form>
  );
}

export default RsvpForm;
