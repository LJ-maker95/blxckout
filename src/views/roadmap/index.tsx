import { FC } from "react";

export const RoadmapView: FC = ({ }) => {

  return (
    <body className="roadmap" data-spy="scroll" data-target="#navbar-example">

      <div className="wrapper">

        <nav className="nav__wrapper" id="navbar-example">
          <ul className="nav">

            <li role="presentation" className="active">
              <a href="#section1">
                <span className="nav__counter">01</span>
                <h3 className="nav__title">Intro</h3>
                <p className="nav__body"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section2">
                <span className="nav__counter">02</span>
                <h3 className="nav__title">Section 2 Title</h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section3">
                <span className="nav__counter">03</span>
                <h3 className="nav__title">Section 3 Title</h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section4">
                <span className="nav__counter">04</span>
                <h3 className="nav__title">Section 4 Title</h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section5">
                <span className="nav__counter">05</span>
                <h3 className="nav__title">Section 5 Title</h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

            <li role="presentation">
              <a href="#section6">
                <span className="nav__counter">06</span>
                <h3 className="nav__title">Section 6 Title</h3>
                <p className="nav__body">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
              </a>
            </li>

          </ul>
        </nav>

        <section className="section section1" id="section1">
          <div className="flex flex-col border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Stage 1: Grow the Community.</div>
            <div className="divider" />
            <div className="grid h-20 card bg-base-200 rounded-box place-items-center">Collaborate with other artists and projects.</div>
          </div>
        </section>

        <section className="section section2" id="section2">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Stage 2: Staking Go-live.</div>
            <div className="divider" />
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Staking mechanism for $BLXCK introduced.</div>
          </div>
        </section>

        <section className="section section3" id="section3">
          <div className="flex flex-col w-lg border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Stage 3: Building.</div>
            <div className="divider" />
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Introduction of iOS application closed alpha.</div>
          </div>
        </section>

        <section className="section section4" id="section4">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Stage 4: Building cont. </div>
            <div className="divider" />
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><p>Launch node to bring gov data on chain.</p></div>
          </div>
        </section>

        <section className="section section5" id="section5">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Stage 5: Build the Community.</div>
            <div className="divider" />
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><p>Build the community.</p></div>
          </div>
        </section>

        <section className="section section6" id="section6">
          <div className="flex flex-col w-mid border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Stage 6: Build the Community.</div>
            <div className="divider" />
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><p>Build the community.</p></div>
          </div>
        </section>
      </div>
    </body>
  );
};
