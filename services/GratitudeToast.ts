import { toast } from "react-toastify";

export class GratitudeToast {
  static gratitudes: string[] = [
    "Go see a doctor!",
    "No",
    "noooooooooo",
    "Are you dumb?",
    "Please stop",
    "STOP",
    "Don't make me laugh",
  ];

  static randomToast() {
    const index = Math.floor(Math.random() * this.gratitudes.length);

    return toast(this.gratitudes[index]);
  }
}
