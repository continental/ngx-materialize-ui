import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RootContainerComponent } from './root-container/root-container.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBarSearchComponent } from './app-bar/app-bar-search.component';
import { AppBarDropdownComponent } from './app-bar/app-bar-dropdown.component';
import { AppBarActionComponent } from './app-bar/app-bar-action.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PushContentComponent } from './side-nav/push-content.component';
import { CardComponent } from './card/card.component';
import { CardContentComponent } from './card/card-content.component';
import { CardImageComponent } from './card/card-image.component';
import { CardContentMetricComponent } from './card/card-content-metric.component';
import { CardActionsComponent } from './card/card-actions.component';
import { TableComponent } from './table/table.component';
import { TableColspecComponent } from './table/table-colspec.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { ViewHeaderActionComponent } from './view-header/view-header-action.component';
import { ViewHeaderDropdownComponent } from './view-header/view-header-dropdown.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TextBoxComponent } from './form-controls/text-box.component';
import { SelectComponent } from './form-controls/select.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ConfirmModalTextValidationComponent } from './confirm-modal/confirm-modal-text-validation.component';
import { TextAreaComponent } from './form-controls/text-area.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  declarations: [
    RootContainerComponent,
    AppBarComponent,
    AppBarSearchComponent,
    AppBarActionComponent,
    AppBarDropdownComponent,
    SideNavComponent,
    PushContentComponent,
    CardComponent,
    CardContentComponent,
    CardImageComponent,
    CardContentMetricComponent,
    CardActionsComponent,
    TableComponent,
    TableColspecComponent,
    ViewHeaderComponent,
    ViewHeaderActionComponent,
    ViewHeaderDropdownComponent,
    SpinnerComponent,
    TextBoxComponent,
    TextAreaComponent,
    SelectComponent,
    ConfirmModalComponent,
    ConfirmModalTextValidationComponent,
    TextAreaComponent,
    CollapsibleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    RootContainerComponent,
    AppBarComponent,
    AppBarSearchComponent,
    AppBarActionComponent,
    AppBarDropdownComponent,
    SideNavComponent,
    PushContentComponent,
    CardComponent,
    CardContentComponent,
    CardImageComponent,
    CardContentMetricComponent,
    CardActionsComponent,
    TableComponent,
    TableColspecComponent,
    ViewHeaderComponent,
    ViewHeaderActionComponent,
    ViewHeaderDropdownComponent,
    SpinnerComponent,
    TextBoxComponent,
    TextAreaComponent,
    SelectComponent,
    ConfirmModalComponent,
    ConfirmModalTextValidationComponent,
    CollapsibleComponent
  ]
})
export class MaterializeUiCoreModule { }
