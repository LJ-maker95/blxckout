import { FC } from "react";

export const RoadmapView: FC = ({ }) => {

  return (
    <body className="roadmap" data-spy="scroll" data-target="#navbar-example">
      <div className="wrapper">

        <nav className="nav__wrapper" id="navbar-example">
          <ul className="nav">

            <li role="presentation" className="active">
              <a href="#section1">
                <span className="nav__counter">Q2</span>
                <h3 className="nav__title"><span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Grow Community</span></h3>
                <p className="nav__body"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section2">
                <span className="nav__counter">Q2</span>
                <h3 className="nav__title"><span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Staking Go Live</span></h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section3">
                <span className="nav__counter">Q3</span>
                <h3 className="nav__title"><span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">iOS Closed Alpha</span></h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section4">
                <span className="nav__counter">Q3</span>
                <h3 className="nav__title"><span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Launch Nodes</span></h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section5">
                <span className="nav__counter">Q3</span>
                <h3 className="nav__title"><span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">NFT Buyback</span></h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section6">
                <span className="nav__counter">Q4</span>
                <h3 className="nav__title"><span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Initial Coin Offering</span></h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

          </ul>
        </nav>

        <section className="section section1" id="section1">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Grow the Community.</h1>
          <p className="grid h-20 card rounded-box place-items-center">Collaborate with other artists and projects.</p>
        </section>

        <section className="section section2" id="section2">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Staking Go-live.</span>
            </div>
            <div className="divider" />
              <div className="grid h-20 card rounded-box place-items-center">Staking mechanism for $BLXCK introduced.</div>
          </div>
        </section>

        <section className="section section3" id="section3">
          <div className="flex flex-col w-lg border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">iOS Closed Alpha.</span>
            </div>
            <div className="divider" />
              <div className="grid h-20 card rounded-box place-items-center">Introduction of iOS application closed alpha.</div>
          </div>
        </section>

        <section className="section section4" id="section4">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Launch Nodes.</span>
            </div>
            <div className="divider" />
              <div className="grid h-20 card rounded-box place-items-center"><p>Launch node to bring gov data on chain.</p></div>
          </div>
        </section>

        <section className="section section5" id="section5">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">NFT Buyback.</span>
            </div>
            <div className="divider" />
              <div className="grid h-20 card rounded-box place-items-center">Build the community.</div>
          </div>
        </section>

        <section className="section section6" id="section6">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Initial Coin Offering.</span>
            </div>
            <div className="divider" />
              <div className="grid h-20 card rounded-box place-items-center">Build the community.</div>
          </div>
        </section>

      </div>
    </body>
  );
};
