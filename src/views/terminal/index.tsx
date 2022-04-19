import { FC } from "react";

export const TerminalView: FC = ({ }) => {

  return (
      <div className="md:container md:mx-auto text-center px-4">
        <div className="typewriter py-20">
          <h1 className="md:container md:mx-half text-center text-5xl text-white">FIRST 100 TO CRXCK THE CODE GET BLXCKLISTED...</h1>
        </div>
        <div className="mockup-code md:mx-half">
          <pre data-prefix="$"><code>npm i blxckout</code></pre>
          <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" className="text-danger"><code>if you install now you will enter the 21st century. Are you sure you would like to continue? (Y/N)</code></pre>
          <pre data-prefix=">" className="text-red"><code>are you sure you really want to do this? (Y/N)</code></pre>
          <pre data-prefix=">" className="text-warning"><code>a jpeg has been added to your phantom wallet.</code></pre>
          <pre data-prefix=">" className="text-red"><code>Okay.... LFG THEN! WAGMI 2022</code></pre>
          <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
      </div>
  );
};
