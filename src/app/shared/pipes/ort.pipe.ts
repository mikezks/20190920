import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ort',
  pure: false
})
export class OrtPipe implements PipeTransform {
  transform(ort: string, fmt: string) {
    // fmt: 'short' 'long'

    let short;
    let long;

    switch (ort) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Tahlerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Hamburg Airport';
        break;
      default:
        short = long = 'ROM';
        break;
    }

    return fmt === 'short' ? short : long;
  }
}
