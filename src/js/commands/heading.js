import FormatBlockCommand from './format-block';

export default class HeadingCommand extends FormatBlockCommand {
  constructor() {
    const options = {
      name: 'heading',
      tag: 'h2',
      button: '<i class="ck-icon-heading"></i>1'
    };
    super(options);
  }
}
