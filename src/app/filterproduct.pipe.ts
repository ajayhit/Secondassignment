import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './Iproduct';

@Pipe({
  name: 'filterproduct'
})
export class FilterproductPipe implements PipeTransform {

  transform(value: Iproduct[], args: string): unknown {
    if(!args)
    {
      return value;
    }
    return value.filter(
      item=>item.Price > parseInt(args)
    );
  }

}
