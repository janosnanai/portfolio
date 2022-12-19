export default function validateEmail({
  name,
  emailAddress,
  message,
}: I_EmailMessage) {
  let valid = true;
  const errors: I_ValidationErrorMessage = {
    name: null,
    emailAddress: null,
    message: null,
  };
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Name errors
  if (!name) {
    valid = false;
    errors.name = "Name must be provided.";
  }

  // Email errors
  if (!emailAddress) {
    valid = false;
    errors.emailAddress = "Email must be provided.";
  } else if (!emailAddress.match(emailRegex)) {
    valid = false;
    errors.emailAddress = "Email address not valid.";
  }

  // Message errors
  if (!message) {
    valid = false;
    errors.message = "Message must be provided.";
  }

  return { valid, errors };
}
