import { FC } from 'react';
import Link from "next/link";
export const ContentContainer: FC = props => {

  return (
    <div className="flex-1 drawer h-52">
     {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">
        {props.children}
      </div>

      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li>
            <Link href="/basics">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="https://necessary-waltz-35b.notion.site/ff0bb4b73ae44092ba7a0b3ea02f6582?v=4f00d8d38c164ec3aa7d9338175691b3">
              <a>BLXCKMAP</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>TEAM</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
