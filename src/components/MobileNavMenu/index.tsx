import { useMobileNavMenu } from "../../context/MobileNavMenu";

export default function MobileNavMenu() {
  const { isOpen } = useMobileNavMenu();

  return (
    <div>
      <div> is open: {String(isOpen)} </div>
    </div>
  );
}
