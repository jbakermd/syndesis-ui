import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'integrationsFilter' })
export class IntegrationsFilterPipe implements PipeTransform {
  transform = () => null;
}
