
import * as environment from '@environment';

export const config = {
  api: environment.debug ? 'http://localhost:7000' : (location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''))
}
