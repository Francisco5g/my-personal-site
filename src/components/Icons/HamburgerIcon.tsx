interface Props {
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
}

export default function HamburgerIcon({ onOpen, onClose, onToggle }: Props) {
  return (
    <div className="first:mt-0 md:hidden" onClick={onToggle}>
      <div className="h-[2px] bg-slate-900 w-6 dark:bg-white my-[6px]"></div>
      <div className="h-[2px] bg-slate-900 w-6 dark:bg-white my-[6px]"></div>
      <div className="h-[2px] bg-slate-900 w-6 dark:bg-white my-[6px]"></div>
    </div>
  );
}
