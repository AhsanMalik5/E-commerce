import { Facebook, Twitter, Instagram, Youtube, PinIcon } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://web.facebook.com/profile.php?id=100013954512029"
        target="_blank"
      >
        <Facebook />
      </Link>
      <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank">
        <Twitter />
      </Link>
      <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank">
        <Instagram />
      </Link>
      <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank">
        <Youtube />
      </Link>
      <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank">
        <PinIcon />
      </Link>
    </div>
  );
}
