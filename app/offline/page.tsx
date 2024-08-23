import { H1 } from "../components/H1";
import { OfflineNavigation } from "./components/OfflineNavigation";

interface Props {}

export default function Offline({}: Props) {
  return (
    <main className="flex flex-col justify-center items-center">
      <H1>You Are Offline</H1>
      <p>Some features and content may not be available.</p>
      <br />
      <OfflineNavigation />
    </main>
  );
}
