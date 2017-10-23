import { ajax } from 'rxjs/observable/dom/ajax'
import {fullfilled} from '../state/actions'
import Rx from 'rxjs/Rx'

export const fetchPage = action$ => action$.filter(action => action.type === 'fetching')
                            .mergeMap(action => ajax.getJSON('http://localhost:8081/api/v1/pages')
                                                .map(response => fullfilled(response))
                                                .catch(error => Observable.of({
                                                  type: 'error'
                                                }))
                                )
