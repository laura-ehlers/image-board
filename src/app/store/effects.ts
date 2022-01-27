import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {getItems, loadItems} from './actions';
import {switchMap, catchError, concatMap, map, tap, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../api/api.service';
import * as fromActions from './actions';
import { getItems2 } from './actions';

@Injectable()
export class ItemsEffect {

  setItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setItems),
      // tap(action => console.log('setitems')),
      mergeMap(({items}) => {
        console.log(items)
        return this.apiService.getImagesByCategory('category').pipe(
          map(items => loadItems(items)),
          catchError(({error}) => of(error))
        );
      }),
      catchError(error => of({
        type: '[to-do] error item', message: error
      }))
    )
  );

  getItems2$ = createEffect(() => this.actions$.pipe(
      ofType(fromActions.getItems2),
      tap(action => console.log('action')),
      catchError(error => of({
       type: '[to-do] error item', message: error
     }))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
