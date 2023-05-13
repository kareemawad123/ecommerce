import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CreditFormat' })
export class CreditFormat implements PipeTransform {
  transform(value: string): string {
    // return value.replace(/(\d{4})/g, '$1-');
    var credit = value.trim().split(/(\d{4})/);
    console.log(credit.join(" ").replaceAll("  ", "-"));
    return credit.join(" ").replaceAll("  ", "-");
  }
}
