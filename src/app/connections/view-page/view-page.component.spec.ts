/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';

import { RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { RestangularModule } from 'ngx-restangular';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TagInputModule } from 'ngx-chips';

import { ConnectionViewPage } from './view-page.component';
import { ConnectionViewWrapperComponent } from '../view-wrapper/view-wrapper.component';
import { ConnectionViewToolbarComponent } from '../view-toolbar/view-toolbar.component';
import { ConnectionsListComponent } from '../list/list.component';
import { ConnectionsListToolbarComponent } from '../list-toolbar/list-toolbar.component';
import { ConnectionViewComponent } from '../view/view.component';
import { StoreModule } from '../../store/store.module';
import { SyndesisCommonModule } from '../../common/common.module';
import { CurrentConnectionService } from '../create-page/current-connection';
import { DynamicFormsPatternflyUIModule } from '../../common/ui-patternfly/ui-patternfly.module';

describe('ConnectionViewPage', () => {
  let component: ConnectionViewPage;
  let fixture: ComponentFixture<ConnectionViewPage>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          DynamicFormsCoreModule.forRoot(),
          DynamicFormsPatternflyUIModule,
          SyndesisCommonModule,
          StoreModule,
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          ModalModule,
          BrowserAnimationsModule,
          TagInputModule,
        ],
        declarations: [
          ConnectionViewPage,
          ConnectionViewWrapperComponent,
          ConnectionViewToolbarComponent,
          ConnectionViewComponent,
          ConnectionsListComponent,
          ConnectionsListToolbarComponent,
        ],
        providers: [
          MockBackend,
          CurrentConnectionService,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http,
            useFactory: (backend, options) => {
              return new Http(backend, options);
            },
            deps: [MockBackend, RequestOptions],
          },
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
