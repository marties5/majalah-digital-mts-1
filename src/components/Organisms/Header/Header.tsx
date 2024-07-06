import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { HeaderMenus } from "./menus";

export const Header1 = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader menus={HeaderMenus} />
      </div>
      <div className="block md:hidden">
        <MobileHeader menus={HeaderMenus} />
      </div>
    </>
  );
};
