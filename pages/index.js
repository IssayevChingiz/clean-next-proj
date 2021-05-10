import Link from "next/link";
import Pic from "./pic";
export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <Pic />
    </div>
  );
}
