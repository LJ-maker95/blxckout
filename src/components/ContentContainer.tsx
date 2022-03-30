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
              <a>PROJECT</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a>BLXCKMAP</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>TEAM</a>
            </Link>
          </li>
          <li>
            <Link href="/tech">
              <a>TECH</a>
            </Link>
          </li>
          <li>
            <Link href="/terminal">
              <a> GET BLXCKLISTED</a>
            </Link>
          </li>
          <li>
            <Link href="/staking">
              <a>STAKING</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
