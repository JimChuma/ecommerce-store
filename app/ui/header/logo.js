import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function Logo() {
  return (
    <Link href="/" className="link">
      <h1 className={poppins.className}>Nautix</h1>
    </Link>
  );
}
