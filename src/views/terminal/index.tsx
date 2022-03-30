import { FC } from "react";

export const TerminalView: FC = ({ }) => {

  return (
      <div className="application">
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.32.1/js/jquery.terminal.min.js"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.32.1/css/jquery.terminal.min.css" rel="stylesheet"/>
      </div>
  );
};

jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command) {
        if (command !== '') {
            var result = window.eval(command);
            if (result != undefined) {
                this.echo(String(result));
            }
        }
    }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        height: 200,
        width: 450,
        prompt: 'js> '
    });
});
