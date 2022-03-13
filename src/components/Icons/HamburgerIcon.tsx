interface Props {
  onOpen?: () => void;
  onClose?: () => void;
}

export default function HamburgerIcon({ onOpen, onClose }: Props) {
  return (
    <div className="first:mt-0 md:hidden">
      <div className="h-[2px] w-6 dark:bg-white my-[6px]"></div>
      <div className="h-[2px] w-6 dark:bg-white my-[6px]"></div>
      <div className="h-[2px] w-6 dark:bg-white my-[6px]"></div>
    </div>
  );
}
