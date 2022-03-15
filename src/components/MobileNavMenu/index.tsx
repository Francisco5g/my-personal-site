import { useMobileNavMenu } from "../../context/MobileNavMenu";
import classnames from "classnames";

export default function MobileNavMenu() {
  const { isOpen } = useMobileNavMenu();

  return (
    <div className={classnames("absolute top-0 right-0", { "translate-x-40": !isOpen })}>
      <div> is open: {String(isOpen)} </div>
    </div>
  );
}
