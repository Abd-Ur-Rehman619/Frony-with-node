export default function generateToken(email) {
  let asciiString = "";
  for (let i = 0; i < email.length; i++) {
    asciiString += email.charCodeAt(i);
  }
  return asciiString;
}
