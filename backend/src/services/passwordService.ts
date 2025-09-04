import { randomBytes } from "crypto";
import { PasswordOptions } from "../validator/passwordValidator.js";

export function generateSecurePassword(options: PasswordOptions): string {
  const { length, numbers, symbols, uppercase, lowercase } = options;

  let chars = "";
  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()-_=+[]{}|;:,.<>?";
  if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";

  if (!chars) throw new Error("At least one character type must be enabled");

  let password = "";
  const bytes = randomBytes(length);
  for (let i = 0; i < length; i++) {
    const index = bytes[i] % chars.length;
    password += chars[index];
  }

  return password;
}
