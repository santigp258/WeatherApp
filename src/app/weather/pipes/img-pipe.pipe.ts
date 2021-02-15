import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipePipe implements PipeTransform {

  transform(value: string): string {
    const urlImg = `https://www.weatherbit.io/static/img/icons/${value}.png`
    return urlImg;
  }

}
