import { FC } from "react";
import * as $ from "jquery";

export const TerminalView: FC = ({ }) => {

  return (
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
      <div className="Jquery application">
      <script src="jquery-3.6.0.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.32.1/js/jquery.terminal.min.js"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.32.1/css/jquery.terminal.min.css" rel="stylesheet"/>
      </div>
  );
};
